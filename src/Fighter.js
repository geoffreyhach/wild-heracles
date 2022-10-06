/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
    constructor(name, str, dex, life = MAX_LIFE) {
        this.name = name;
        this.str = str;
        this.dex = dex;
        this.life = life;
    }

    fight(ennemy) {
        console.log(`${this.name} is attacking ${ennemy.name}`);

        let i = 1;
        //as long as a fighter is alive we keep launching a round of attack
        while (isAlive(ennemy) && isAlive(this)) {
            console.log(`🕛 Round #${i}`);
            attack(this, ennemy);
            if (isAlive(ennemy)) attack(ennemy, this); //if the enemy is dead, he can't attack back during the round
            i++;
        }
        displayFightResult(this, ennemy);
    }
}

function attack(attacker, defender) {
    defender.life -= damageDealt(attacker, defender);
    displayAttackResult(attacker, defender);
}

// use to calculate the attackers damage based on his strenght and the damage received by defender base on his dexterity
function damageDealt(attacker, defender) {
    let damage = Math.round(Math.random() * (attacker.str - 1) + 1);
    let damageDealt = damage - defender.dex;

    if (damageDealt <= 0) {
        return 0;
    }
    if (damageDealt > 0) {
        return damageDealt;
    }
}

function isAlive(character) {
    if (character.life > 0) return true;
    else return false;
}

function displayFightResult(attacker, defender) {
    if (isAlive(attacker)) console.log(`${attacker.name} won`);
    if (isAlive(defender)) console.log(`${defender.name} won`);
}

function displayAttackResult(attacker, defender) {
    console.log(
        `${attacker.name} 🗡️ ${defender.name}, 💙${defender.name} = ${defender.life} `
    );
}

exports.Fighter = Fighter;
