// index.js
import Combatant from './combatant.js';
import Ship, {Raft, Sailboat, Rowboat, Sloop, Tartane, Brigantine, Galleon, ShipOfTheLine, BombardCannonShip, GoblinWarBarge, GhostShip, DragonTurtleShell, MegalodonSahuaginWarship} from './ship.js';

// Example characters
const hero1 = new Combatant('Cran Wintergrip', 100, 17, 14, 14, 8, 12, 10, 15);
const enemy1 = new Combatant('Enemy1', 90,17, 14, 14, 8, 12, 10, 12);
let brig = new Brigantine('Brig');
brig.loadCrew(['Jonny', 'Steve', 'Jerry']);
console.log(brig.crew);