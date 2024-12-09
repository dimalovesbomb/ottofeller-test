const footerLinks = [
    {
        href: '#about',
        label: 'About',
    },
    {
        href: '#services',
        label: 'Services',
    },
    {
        href: '#contact',
        label: 'Contact',
    },
    {
        href: '#faq',
        label: 'FAQ',
    },
];

export const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
            <nav
                aria-label="Footer navigation"
                className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8"
            >
                {footerLinks.map(({ href, label }) => (
                    <a key={label} href={href} className="text-gray-400 hover:text-white transition-colors">
                        {label}
                    </a>
                ))}
            </nav>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
                © 2024 PokeLand. All rights reserved.
            </div>
        </div>
    </footer>
);
