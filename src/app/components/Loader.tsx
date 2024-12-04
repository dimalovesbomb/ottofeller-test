export const Loader: React.FC = () => {
    return (
        <div
            role="status"
            aria-live="polite"
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 z-50"
        >
            <div className="loader" aria-label="Loading..."></div>
        </div>
    )
}
