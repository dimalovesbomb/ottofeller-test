export const NoPokemons: React.FC = () => (
    <div role="alert" className="w-full flex justify-center items-center" tabIndex={0}>
        <div className="relative bg-white shadow rounded-lg p-6 w-full md:w-1/2">
            <p className="mt-4 text-lg text-center font-semibold text-slate-950">Upsies!</p>
            <p className="mt-2 text-md text-center text-slate-600">No pokemons :( Try reloading this page</p>
        </div>
    </div>
);
