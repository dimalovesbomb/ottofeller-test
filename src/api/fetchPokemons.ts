import { PokemonDetails, PokemonsResponse } from '@/api/types';

const POKEMONS_API_URL = process.env.POKEMON_HOST + '/api/v2/pokemon?limit=6';

export const fetchPokemons = async (): Promise<PokemonDetails[] | null> => {
    try {
        const res = await fetch(POKEMONS_API_URL);

        // simulating slow response to see the loader
        const data: PokemonsResponse = await new Promise((resolve) => {
            setTimeout(() => resolve(res.json()), 2500);
        });

        return await Promise.all(data.results.map((pokemon) => fetch(pokemon.url).then((res) => res.json())));
    } catch (err) {
        // usually sending these errors to analytics
        console.error(err);
        return null;
    }
};
