'use client';
import { useEffect, useState } from 'react';
import { Footer } from "@/components/Footer";
import { PokemonCard } from "@/components/PokemonCard";

interface Pokemon {
    name: string;
    sprites: { front_default: string };
}

export default function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5');
            const data = await res.json();
            const detailedData = await Promise.all(
                data.results.map((pokemon: { url: string }) =>
                    fetch(pokemon.url).then((res) => res.json())
                )
            );
            setPokemons(detailedData);
            setLoading(false);
        };
        fetchPokemons();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((el) => {
                if (el.getBoundingClientRect().top < window.innerHeight) {
                    el.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {loading && (
                <div
                    role="status"
                    aria-live="polite"
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 z-50"
                >
                    <div className="loader" aria-label="Loading..."></div>
                </div>
            )}

            <header className="text-center py-10">
                <h1 className="text-4xl font-bold" tabIndex={0}>
                    PokeLand
                </h1>
                <p className="mt-4 text-gray-600" tabIndex={0}>
                    Catch 'em all!
                </p>
            </header>

            <main className="container mx-auto px-4">
                <section>
                    <div
                        className="relative bg-[url('/parallax-cat.png')] bg-center bg-contain bg-no-repeat bg-fixed h-48 md:h-64 w-full"
                    >
                        <h2 className="absolute bottom-10 left-10 text-white text-xl md:text-3xl font-bold">
                            such wow much cool!
                        </h2>
                    </div>
                </section>
                <section aria-labelledby="pokemon-section-title" className="my-60">
                    <h2
                        id="pokemon-section-title"
                        className="text-2xl font-semibold mb-6 text-center fade-in"
                        tabIndex={0}
                    >
                        Pokemons
                    </h2>
                    <div className="fade-in my-10">
                        <p className="text-center text-lg">This text is animated as you scroll!</p>
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        role="list"
                        aria-live="polite"
                    >
                        {pokemons.map((pokemon) => (
                            <PokemonCard key={pokemon.name} name={pokemon.name} imgSrc={pokemon.sprites.front_default} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
