interface Pokemon {
    name: string;
    sprites: { front_default: string };
}

const POKEMONS_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=5';

export const fetchPokemons = async (): Promise<Pokemon[]> => {
    // cache is turned off in order to see a loader each time user refreshes the page
    const res = await fetch(POKEMONS_API_URL, { cache: 'no-cache' });
    const data = await res.json();

    return await Promise.all(data.results.map((pokemon: { url: string }) => fetch(pokemon.url).then((res) => res.json())));
};
