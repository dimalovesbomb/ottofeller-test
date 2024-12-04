export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                <nav
                    aria-label="Footer navigation"
                    className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8"
                >
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                        About Us
                    </a>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                        Services
                    </a>
                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                        Contact
                    </a>
                    <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                        FAQ
                    </a>
                </nav>

                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
                    © 2024 PokeLand. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
