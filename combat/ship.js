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

        return this;
    }
}

class Sailboat extends Ship {
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

class Rowboat extends Ship {
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
}

class Sloop extends Ship {
    constructor(name) {
        super(name, 30, 5, 10, 10, 0, 5, 0, 10, 0);
        this.repairCharges = 5;
        this.cannonCharges = 6;
        return this;
    }

    cannon(target) {
        target.hp -= Math.floor(Math.random()*10) + 4;
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
        this.speed += 2;
    }
}

class Tartane extends Ship {
    constructor(name) {
        super(name, 45, 4, 12, 13, 0, 10, 0, 10, 0);
        this.repairCharges = 10;
        this.cannonCharges = 6;
        this.rowboat = new Rowboat(name+"'s Rowboat")
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
        this.speed += 2;
    }
}

export class Brigantine extends Ship {
    constructor() {
        super(name, 75, 3, 15, 15, 2, 10, -1, 10, 1);
        this.repairCharges = 30;
        this.cannonCharges = 10;
        this.rowboats = [new Rowboat(name+"'s Rowboat #1"), new Rowboat(name+"'s Rowboat #2"), new Rowboat(name+"'s Rowboat #3")];

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
        this.speed += 2;
    }
}