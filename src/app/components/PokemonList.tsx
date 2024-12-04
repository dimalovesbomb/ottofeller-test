import { fetchPokemons } from '@/api/fetchPokemons';
import { PokemonCard } from '@/app/components/PokemonCard';

export const PokemonList = async () => {
    const pokemons = await fetchPokemons();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-live="polite">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} name={pokemon.name} imgSrc={pokemon.sprites.front_default} />
            ))}
        </div>
    );
};
