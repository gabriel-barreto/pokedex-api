const path = require('path');

const readFile = (filePath = path.resolve('pokemons.json')) => (
    new Promise((resolve, reject) => {
        try {
            const file = require(filePath);
            resolve(file);
        }
        catch(err) {
            reject(err)
        }
    })
);

const getPokemons = () => (
    new Promise(async (resolve, reject) => {
        try {
            let pokemons = await readFile();
            pokemons = pokemons.map(each => {
                return {
                    id: each.id,
                    name: each.name,
                    thumb: each.thumb,
                };
            });
            resolve(pokemons);
        }
        catch(err) {
            reject(err);
        }
    })
);

const getPokemon = (id = 1) => (
    new Promise(async (resolve, reject) => {
        try {
            const pokemons = await readFile();
            const [ pokemon ] = pokemons.filter(each => each.id == id);
            resolve(pokemon);
        }
        catch(err) {
            reject(err);
        }
    })
);

module.exports = { getPokemons, getPokemon };