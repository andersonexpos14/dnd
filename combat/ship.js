// ship.js
const Entity = require("./entity");

class Ship extends Entity {
    constructor(name, hp, speed, ac, str, strMod, dex, dexMod, con, conMod) {
        super(name, hp, speed);
        this.ac = ac;
        this.str = str;
        this.strMod = strMod;
        this.dex = dex;
        this.dexMod = dexMod;
        this.con = con;
        this.conMod = conMod;

        return this;
    }
}

class Sailboat extends Ship {
    constructor(name) {
        super(name, 20, 5, 8, 10, 0, 20, 0, 10, 0);
        return this;
    }

    repair() {
        return 1;
    }
}
