import { Suspense } from 'react';
import { Footer } from '@/app/components/Footer';
import { FadeInSectionHeader } from '@/app/components/FadeInSectionHeader';
import { Loader } from '@/app/components/Loader';
import PokemonList from '@/app/components/PokemonList';

export default function Home() {
    return (
        <div>
            <header className="text-center py-10">
                <h1 className="text-4xl font-bold" tabIndex={0}>
                    PokeLand
                </h1>
                <p className="mt-4 text-gray-600" tabIndex={0}>
                    Catch &#39;em all!
                </p>
            </header>
            <main className="container mx-auto px-4">
                <section>
                    <div className="relative bg-[url('/parallax.webp')] bg-center bg-cover bg-no-repeat bg-fixed h-48 md:h-96 w-full">
                        <h2 className="absolute bottom-10 left-10 text-white text-xl md:text-3xl font-bold">such wow much cool!</h2>
                    </div>
                </section>
                <section aria-labelledby="pokemon-section-title" className="my-24">
                    <FadeInSectionHeader header="Pokemons" subheader="This text is animated as you scroll!" />
                    <Suspense fallback={<Loader />}>
                        <PokemonList />
                    </Suspense>
                </section>
            </main>
            <Footer />
        </div>
    );
}
