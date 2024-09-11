// combatant.js
class Combatant {
    constructor(name, hp, str, dex, con, int, wis, cha, speed) {
        this.name = name;       // Name of the combatant
        this.hp = hp;           // Hit points
        this.strMod  = Math.floor(str/2) - 5;
        this.dexMod  = Math.floor(dex/2) - 5;
        this.conMod  = Math.floor(con/2) - 5;
        this.intMod  = Math.floor(int/2) - 5;
        this.wisMod  = Math.floor(wis/2) - 5;
        this.chaMod  = Math.floor(cha/2) - 5;
        this.attack = 2 + this.strMod;
        this.defense = 10 + this.dexMod;
        this.speed = speed;     // Speed for turn order
    }

    // Method to determine damage dealt
    dealDamage(target) {
        if (Math.floor(Math.random()*20) + 1 + this.attack >= target.defense) {
            let damage = Math.floor(Math.random()*10) + 1;
            damage = damage > 0 ? damage : 0; // Ensure damage is not negative
            target.hp -= damage;
            return damage;
        }
        else return 0;
    }

    // Method to check if the combatant is alive
    isAlive() {
        return this.hp > 0;
    }
}

module.exports = Combatant;
