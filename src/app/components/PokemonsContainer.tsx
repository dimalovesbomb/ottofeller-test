import { fetchPokemons } from '@/api/fetchPokemons';
import { PokemonList } from '@/app/components/PokemonList';
import { NoPokemons } from '@/app/components/NoPokemons';

export const PokemonsContainer: React.FC = async () => {
    const pokemons = await fetchPokemons();

    return pokemons ? <PokemonList pokemons={pokemons} /> : <NoPokemons />;
};
