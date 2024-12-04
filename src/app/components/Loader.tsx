export const Loader: React.FC = () => {
    return (
        <div role="status" aria-live="polite" className="flex items-center justify-center z-50">
            <div className="loader" aria-label="Loading..."></div>
        </div>
    );
};
