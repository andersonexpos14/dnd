// combat.js
const Combatant = require('./combatant');

const partyMembers = [];
const enemies = [];

// Function to sort combatants by speed
function getSortedCombatants() {
    const allCombatants = [...partyMembers, ...enemies];
    return allCombatants.sort((a, b) => b.speed - a.speed); // Higher speed goes first
}

// Function to perform combat
function startCombat() {
    const combatants = getSortedCombatants();

    while (combatants.some(c => c.isAlive())) {
        for (const combatant of combatants) {
            if (combatant.isAlive()) {
                // Determine if there are any enemies or party members left
                const targets = combatant instanceof Combatant ? (partyMembers.includes(combatant) ? enemies : partyMembers) : [];

                // Filter out dead targets
                const aliveTargets = targets.filter(t => t.isAlive());

                if (aliveTargets.length === 0) {
                    console.log(`${combatant.name} has no targets left.`);
                    continue;
                }

                // Choose a target (randomly for simplicity)
                const target = aliveTargets[Math.floor(Math.random() * aliveTargets.length)];

                // Deal damage and log result
                const damage = combatant.dealDamage(target);
                console.log(`${combatant.name} attacks ${target.name} for ${damage} damage.`);

                if (!target.isAlive()) {
                    console.log(`${target.name} has been defeated.`);
                }

                // Check if all targets are defeated
                if (targets.every(t => !t.isAlive())) {
                    console.log(`${combatant.name}'s side has won the battle.`);
                    return;
                }
            }
        }
    }

    console.log('Combat ended.');
}

// Export functions for external use
module.exports = {
    Combatant,
    partyMembers,
    enemies,
    startCombat
};
