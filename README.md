# Pokedex API
Just a API to return all 1st generation pokemons!

> *Special thanks to [PokeAPI](https://pokeapi.co/)*

## Pokemon Model
|  Data Label |   Data Type  | JSON Key |
|:-----------:|:------------:|:--------:|
| Poke Number | Number       | id       |
| Poke Name   | String       | name     |
| Poke Height | Number       | height   |
| Poke Weight | Number       | weight   |
| Poke Types  | Number       | types    |
| Poke Sprite | String (url) | thumb    |

**Sample Model:**
```JSON
    {
        "id": 1,
        "name": "bulbasaur",
        "height": 7,
        "weight": 69,
        "thumb": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "types": ["poison", "grass"]
    }
```

## Usage
 **1.** Clone this repo
 > git clone git@github.com:gabriel-barreto/pokedex-api.git

 **2.** Inside the folder use this command above to install all project dependencies
 > npm install

 **3.** To run use:
 > npm start

 ***API default port: 5000***

 ## Endpoints
List all pokemon
> GET /pokemon

All data of a pokemon
> GET /pokemon/**{id}**

## Try it online!
[List All Pokemons](https://gb-pokedex-api.herokuapp.com/pokemon)

[Details from a Pokemon](https://gb-pokedex-api.herokuapp.com/pokemon/1) 