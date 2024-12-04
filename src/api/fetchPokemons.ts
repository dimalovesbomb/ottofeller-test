import { PokemonDetails, PokemonsResponse } from '@/api/types';

const POKEMONS_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=5';

export const fetchPokemons = async (): Promise<PokemonDetails[]> => {
    // cache is turned off in order to see a loader each time user refreshes the page
    const res: Response = await fetch(POKEMONS_API_URL, { cache: 'no-cache' });

    // simulating slow response to see the loader
    const data: PokemonsResponse = await new Promise((resolve) => {
        setTimeout(() => resolve(res.json()), 2500);
    });

    return await Promise.all(data.results.map((pokemon) => fetch(pokemon.url).then((res) => res.json())));
};
