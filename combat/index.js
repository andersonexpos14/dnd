// index.js
const { Combatant, partyMembers, enemies, startCombat } = require('./combat');

// Example characters
const hero1 = new Combatant('Cran Wintergrip', 100, 17, 14, 14, 8, 12, 10, 15);
const enemy1 = new Combatant('Enemy1', 90,17, 14, 14, 8, 12, 10, 12);

// Adding to party and enemy lists
partyMembers.push(hero1);
enemies.push(enemy1);

// Start the combat
startCombat();
