import { PokemonList } from "./pokemonList.model";

export interface Pokemons {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonList[];
}