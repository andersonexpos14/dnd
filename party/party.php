<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Party Management</title>
</head>
<body>
    <h1>Party Management</h1>

    <?php
    // File to store the party data
    $filePath = 'party.json';
    $partyData = [];

    // Load existing party data if it exists
    if (file_exists($filePath)) {
        $jsonData = file_get_contents($filePath);
        $partyData = json_decode($jsonData, true) ?: [];
    }

    // Handle file upload
    if (isset($_FILES['jsonFile'])) {
        if ($_FILES['jsonFile']['error'] === UPLOAD_ERR_OK) {
            $uploadedFile = $_FILES['jsonFile']['tmp_name'];
            $jsonContent = file_get_contents($uploadedFile);
            $uploadedData = json_decode($jsonContent, true);

            if (is_array($uploadedData)) {
                $partyData = $uploadedData;
                file_put_contents($filePath, json_encode($partyData, JSON_PRETTY_PRINT));
                echo "<p>File uploaded successfully.</p>";
            } else {
                echo "<p>Invalid JSON format.</p>";
            }
        } else {
            echo "<p>Error uploading file.</p>";
        }
    }

    // Handle adding new member
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_member'])) {
        $name = trim($_POST['name']);
        $class = trim($_POST['class']);
        $xp = intval($_POST['xp']);

        if ($name && $class) {
            $newId = count($partyData) > 0 ? max(array_column($partyData, 'id')) + 1 : 1;
            $newMember = [
                'id' => $newId,
                'name' => $name,
                'class' => $class,
                'xp' => $xp
            ];
            $partyData[] = $newMember;
            file_put_contents($filePath, json_encode($partyData, JSON_PRETTY_PRINT));
        }
    }

    // Handle removing member
    if (isset($_GET['remove'])) {
        $idToRemove = intval($_GET['remove']);
        $partyData = array_filter($partyData, function($member) use ($idToRemove) {
            return $member['id'] !== $idToRemove;
        });
        file_put_contents($filePath, json_encode($partyData, JSON_PRETTY_PRINT));
    }
    ?>

    <!-- Form to upload JSON file -->
    <h2>Import Party Data</h2>
    <form action="party.php" method="post" enctype="multipart/form-data">
        <input type="file" name="jsonFile" accept=".json">
        <button type="submit">Upload</button>
    </form>

    <!-- Form to add a new party member -->
    <h2>Add New Member</h2>
    <form action="party.php" method="post">
        <input type="text" name="name" placeholder="Name" required>
        <input type="text" name="class" placeholder="Class" required>
        <input type="number" name="xp" placeholder="Starting XP" min="0" required>
        <input type="hidden" name="add_member" value="1">
        <button type="submit">Add Member</button>
    </form>

    <h2>Party Members</h2>
    <ul>
        <?php if (count($partyData) > 0): ?>
            <?php foreach ($partyData as $member): ?>
                <li>
                    <?php echo htmlspecialchars($member['name']); ?>
                    (Class: <?php echo htmlspecialchars($member['class']); ?>, XP: <?php echo htmlspecialchars($member['xp']); ?>)
                    <a href="party.php?remove=<?php echo $member['id']; ?>" onclick="return confirm('Are you sure you want to remove this member?');">Remove</a>
                </li>
            <?php endforeach; ?>
        <?php else: ?>
            <li>No party members found.</li>
        <?php endif; ?>
    </ul>
</body>
</html>
