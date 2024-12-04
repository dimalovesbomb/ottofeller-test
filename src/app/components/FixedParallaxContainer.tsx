interface FixedParallaxContainerProps {
    id?: string;
    label?: string;
}

export const FixedParallaxContainer: React.FC<FixedParallaxContainerProps> = ({ label, id }) => {
    return (
        <div
            id={id}
            className="relative bg-[url('/parallax.webp')] bg-center bg-cover bg-no-repeat bg-fixed h-48 md:h-96 w-full"
        >
            {label && <h2 className="absolute bottom-10 left-10 text-white text-xl md:text-3xl font-bold">{label}</h2>}
        </div>
    );
};
