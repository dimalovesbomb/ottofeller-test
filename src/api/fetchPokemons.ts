import { PokemonDetails, PokemonsResponse } from '@/api/types';
import { allFulfilled } from '@/helpers/allFulfilled';

const POKEMONS_API_URL = process.env.POKEMON_HOST + '/api/v2/pokemon?limit=6';

export const fetchPokemons = async (): Promise<PokemonDetails[] | null> => {
    try {
        const res = await fetch(POKEMONS_API_URL, { cache: 'no-cache' });

        // simulating slow response to see the loader.
        // it throws errors sometimes (even better for demonstration purposes, then <NoPokemons /> is rendered)
        const data: PokemonsResponse = await new Promise((resolve) => {
            setTimeout(() => resolve(res.json()), 2500);
        });

        return allFulfilled(data.results.map((pokemon) => fetch(pokemon.url).then((res) => res.json())));
    } catch (err) {
        // usually sending these errors to analytics
        console.error(err);
        return null;
    }
};
