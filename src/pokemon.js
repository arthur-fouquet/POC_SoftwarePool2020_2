const fs = require('fs');

function ex1(oui) {
    if (oui.length !== 4) {
        console.log('Error woula t bête');
        return (84);
    }
    var rd = fs.readFile(oui[2], 'utf8', function read (err, data) {
        if (err) {
            throw err;
        }
        const content = data;
        processFile(content);
    });
}

function processFile(content) {
    console.log(content);
    let game = craete_array();
    let poke = content.split("\n");
    for (let a = 0; poke[a]; a += 1) {
        poke[a] = poke[a].split('=');
    }
    console.log(poke);
}

function craete_array() {
    let game = {
        pokemon: [],
        bag: {
            berry: [],
            potion: [],
        },
    };
    return game;
}

function setPokemon(name, type, level, hp, evo, noevo) {
    let obj = {
        '"name" =': name,
        '"type"': type,
        '"level"': level,
        '"hp"': hp,
        '"hasEvolution"': evo,
        '"hasEvolved"': noevo,
    }
    return obj;
}

function berryAndPpotion(name, effect) {
    let obj = {
        '"name" = ': name,
        '"effect" =': effect,
    }
    return obj;
}

ex1(process.argv);