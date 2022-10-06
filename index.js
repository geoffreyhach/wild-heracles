// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./src/Fighter").Fighter;

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemeanLion = new Fighter("🦁 Nemean Lion", 11, 13);

const geoffrey = new Fighter("🕺 Geoffrey", 20, 15);
const yavuz = new Fighter("👴 Yavuz", 2, 1);

// console.log(`${heracles.name} has 💙 ${heracles.life}HP`);
// console.log(`${nemeanLion.name} has 💙 ${nemeanLion.life}HP`);

heracles.fight(nemeanLion);

// geoffrey.fight(yavuz);
