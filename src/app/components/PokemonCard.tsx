interface PokemonCardProps {
    name: string;
    imgSrc: string;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({name, imgSrc}) => {
    return (
        <div
            key={name}
            role="listitem"
            className="relative bg-white shadow rounded-lg p-6 hover:transform hover:scale-105 transition-transform"
            tabIndex={0}
        >
            <img
                src={imgSrc}
                alt={`Image of ${name}`}
                className="mx-auto"
            />
            <h3
                className="mt-4 text-lg text-center font-semibold text-slate-950"
                tabIndex={0}
            >
                {name}
            </h3>
        </div>
    )
}
