import { PokemonCard } from '@/app/components';
import type { PokemonDetails } from '@/api/types';

interface PokemonListProps {
    pokemons: PokemonDetails[];
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-live="polite">
        {pokemons.map((pokemon) => (
            <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                imgSrc={pokemon.sprites?.front_default || '/bonk.jpg'}
            />
        ))}
    </div>
);
