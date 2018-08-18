const pokedex = require("./functions");

const list = async (req, res) => {
    try {
        const pokemons = await pokedex.getPokemons();
        res.status(200).send({
            success: true,
            content: pokemons
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: err.message
        });
    }
};

const details = async (req, res) => {
    const { id } = req.params;
    try {
        const pokemon = await pokedex.getPokemon(id);
        if (pokemon) {
            res.status(200).send({ success: true, content: pokemon });
        } else {
            res.status(404).send({
                success: false,
                message: "Pokemon not found in 1st generation"
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: err.message
        });
    }
};

module.exports = { list, details };
