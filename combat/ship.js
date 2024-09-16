// ship.js
import Entity from './entity.js';

export default class Ship extends Entity {
    constructor(name, hp, speed, ac, str, strMod, dex, dexMod, con, conMod) {
        super(name, hp, speed);
        this.ac = ac;
        this.str = str;
        this.strMod = strMod;
        this.dex = dex;
        this.dexMod = dexMod;
        this.con = con;
        this.conMod = conMod;
        this.actions = 0;
        this.bonusActions = 0;
        this.repairCharges = 0;
        this.cannonCharges = 0;
        this.crew = [];

        return this;
    }

    loadCrew(crew) {
        this.crew = crew;
    }
}

export class Raft extends Ship {
    constructor(name) {
        super(name, 10, 2, 7, 8, 0, 10, 0, 5, 0);
        return this;
    }

    repairAuto() {
        this.hp += Math.floor(Math.random()*10) + 4
    }

    repair(hp) {
        this.hp += hp;
    }

    fullSail() {
        this.speed += 2;
    }
}

export class Sailboat extends Ship {
    constructor(name) {
        super(name, 20, 5, 8, 10, 0, 20, 0, 10, 0);
        return this;
    }

    repairAuto() {
        this.hp += Math.floor(Math.random()*10) + 4
    }

    repair(hp) {
        this.hp += hp;
    }

    fullSail() {
        this.speed += 2;
    }
}

export class Rowboat extends Ship {
    constructor(name) {
        super(name, 15, 6, 10, 10, -1, 10, 0, 10, 0);
        return this;
    }

    repairAuto() {
        this.hp += Math.floor(Math.random()*10) +1
    }

    repair(hp) {
        this.hp += hp;
    }

    pushTheCrew() {
        this.bonusActions --;
        this.actions ++;
    }
}

export class Sloop extends Ship {
    constructor(name) {
        super(name, 30, 5, 10, 10, 0, 5, 0, 10, 0);
        this.repairCharges = 5;
        this.cannonCharges = 6;
        return this;
    }

    cannon(target) {
        target.hp -= Math.floor(Math.random()*10) + 4;
        this.cannonCharges--;
    }

    smallArms(target) {
        target.hp -= Math.floor(Math.random()*8) + 4;
    }

    repairAuto() {
        this.hp += Math.floor(Math.random()*10) +1;
        this.repairCharges--;
    }

    repair(hp) {
        this.hp += hp;
        this.repairCharges--;
    }

    fullSail() {
        this.speed += 2;
    }

    pushTheCrew() {
        this.bonusActions --;
        this.actions ++;
    }
}

export class Tartane extends Ship {
    constructor(name) {
        super(name, 45, 4, 12, 13, 0, 10, 0, 10, 0);
        this.repairCharges = 10;
        this.cannonCharges = 6;
        this.availableRowboats = 1;
        return this;
    }

    cannon(target) {
            target.hp -= Math.floor(Math.random()*10) + 4;
            this.cannonCharges--;
    }

    harpoon(target) {
        target.hp -= Math.floor(Math.random() * 6) + 1;
        if (Math.floor(Math.random() * 20) + 1 + target.conMod >= 10 + this.conMod) {
            target.speed = 0;
        }
    }

    smallArms(target) {
        target.hp -= Math.floor(Math.random()*8) + 4;
    }

    repairAuto() {
        this.hp += Math.floor(Math.random()*10) +1;
        this.repairCharges--;
    }

    repair(hp) {
        this.hp += hp;
        this.repairCharges--;
    }

    fullSail() {
        this.speed += 2;
    }

    pushTheCrew() {
        this.bonusActions --;
        this.actions ++;
    }
}

export class Brigantine extends Ship {
    constructor(name) {
        super(name, 60, 3, 13, 15, 2, 10, -1, 10, 1);
        this.repairCharges = 30;
        this.cannonCharges = 10;
        this.availableRowboats = 2;
        return this;
    }

    cannon(target) {
        target.hp -= Math.floor(Math.random()*10) + 4;
    }

    harpoon(target) {
        target.hp -= Math.floor(Math.random() * 6) + 1;
        if (Math.floor(Math.random() * 20) + 1 + target.dexMod >= 10 + this.dexMod) {
            target.speed = 0;
        }
    }

    smallArms(target) {
        target.hp -= Math.floor(Math.random()*8) + 4;
    }

    repairAuto() {
        this.hp += Math.floor(Math.random()*10) +1;
    }

    repair(hp) {
        this.hp += hp;
    }

    fullSail() {
        this.speed += 1;
    }

    pushTheCrew() {
        this.bonusActions --;
        this.actions ++;
    }
}

export class Galleon extends Ship {
    constructor(name) {
        super(name, 75, 3, 15, 15, 2, 10, -1, 10, 1);
        this.cannonCharges = 10;
        this.repairCharges = 30;
        this.availableRowboats = 3;
        return this;
    }

    cannon(target) {
        target.hp -= Math.floor(Math.random()*10) + 4;
        this.cannonCharges--;
    }

    smallArms(target) {
        target.hp -= Math.floor(Math.random()*8) + 4;
    }

    repairAuto() {
        this.hp += Math.floor(Math.random()*10) +1;
        this.repairCharges--;
    }

    repair(hp) {
        this.hp += hp;
        this.repairCharges--;
    }

    fullSail() {
        this.speed += 1;
    }

    pushTheCrew() {
        this.bonusActions --;
        this.actions ++;
    }
}

export class ShipOfTheLine extends Ship {
    constructor(name) {
        super(name, 100, 3, 16, 18, 3, 10, -2, 10, 2)
        this.cannonCharges = 20;
        this.repairCharges = 50;
        this.availableRowboats = 4;
        return this;
    }

    cannon(target) {
        target.hp -= Math.floor(Math.random()*10) + 6;
        this.cannonCharges--;
    }

    smallArms(target) {
        target.hp -= Math.floor(Math.random()*8) + 6;
    }

    repairAuto() {
        this.hp += Math.floor(Math.random()*10) + 1;
        this.repairCharges--;
    }

    repair(hp) {
        this.hp += hp;
        this.repairCharges--;
    }

    fullSail() {
        this.speed += 1;
    }

    pushTheCrew() {
        this.bonusActions --;
        this.actions ++;
    }
}

export class BombardCannonShip extends Ship {
    constructor(name) {
        super(name, 75, 4, 15, 15, 0, 10, 2, 15, 1);
        this.cannonCharges = 16;
        this.repairCharges = 10;
        this.availableRowboats = 1;
        this.isLoaded = true;
        return this;
    }

    reload() {
        this.isLoaded = true;
        this.actions --;
    }

    giantCannon(target) {
        target.hp -= Math.floor(Math.random()*20) + 21;
        this.isLoaded = false;
    }

    cannon(target) {
        target.hp -= Math.floor(Math.random()*10) + 4;
        this.cannonCharges--;
    }

    smallArms(target) {
        target.hp -= Math.floor(Math.random()*8) + 4;
    }

    repairAuto() {
        this.hp += Math.floor(Math.random()*10) + 1;
        this.repairCharges--;
    }

    repair(hp) {
        this.hp += hp;
        this.repairCharges--;
    }

    fullSail() {
        this.speed += 1;
    }

    pushTheCrew() {
        this.bonusActions --;
        this.actions ++;
    }
}

export class GoblinWarBarge extends Ship {
    constructor(name) {
        super(name, 50, 3, 10, 13, 0, 10, 0, 10, -1);
        this.cannonCharges = 4;
        this.repairCharges = 5;
    }

    cannon(target) {
        target.hp -= Math.floor(Math.random()*10) + 4;
        this.cannonCharges--;
    }

    harpoon(target) {
        target.hp -= Math.floor(Math.random() * 6) + 1;
        if (Math.floor(Math.random() * 20) + 1 + target.conMod >= 10 + this.conMod) {
            target.speed = 0;
        }
    }

    smallArms(target) {
        target.hp -= Math.floor(Math.random()*8) + 4;
    }

    repairAuto() {
        this.hp += Math.floor(Math.random()*10) + 1;
        this.repairCharges--;
    }

    repair(hp) {
        this.hp += hp;
        this.repairCharges--;
    }

    fullSail() {
        this.speed += 1;
    }

    pushTheCrew() {
        this.bonusActions --;
        this.actions ++;
    }
}

export class GhostShip extends Ship {
    constructor(name) {
        super(name, 100, 10, 17, 15, 0, 15, 0, 15, 0);
        this.cannonCharges = 4;
        this.repairCharges = 5;
    }

    cannon(target) {
        target.hp -= Math.floor(Math.random()*10) + 4;
        this.cannonCharges--;
    }

    harpoon(target) {
        target.hp -= Math.floor(Math.random() * 6) + 1;
        if (Math.floor(Math.random() * 20) + 1 + target.conMod >= 10 + this.conMod) {
            target.speed = 0;
        }
    }

    smallArms(target) {
        target.hp -= Math.floor(Math.random()*8) + 4;
    }

    fullSail() {
        this.speed += 1;
    }

    pushTheCrew() {
        this.bonusActions --;
        this.actions ++;
    }
}

export class DragonTurtleShell extends Ship {
    constructor(name) {
        super(name, 150, 7, 15, 20, 0, 10, 0, 15, 0);
    }

    bite(target) {
        target.hp -= 2*(Math.floor(Math.random()*20) + 1);
    }

    claws(target) {
        target.hp -= Math.floor(Math.random()*20) + 6;
    }
}

export class MegalodonSahuaginWarship extends Ship {
    constructor(name) {
        super(name, 125, 8,  13, 15, 0, 15, 0, 13, 0);
        this.cannonCharges = 6;
    }

    bite(target) {
        target.hp -= 2*(Math.floor(Math.random()*20) + 1);
    }

    ballista(target) {
        target.hp -= Math.floor(Math.random()*8) + 1;
    }
}