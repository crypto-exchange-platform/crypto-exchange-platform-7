import type { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer id="contact" className="bg-violet-950/30 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <i className="fab fa-bitcoin text-3xl text-yellow-400"></i>
                            <h3 className="text-2xl font-bold">
                                CryptoV
                            </h3>
                        </div>
                        <p className="text-gray-400 mb-4">
                            The most trusted cryptocurrency trading platform with millions of users worldwide.
                        </p>
                        <div className="flex space-x-4">
                            {["twitter", "facebook", "linkedin", "instagram"].map((icon) => (
                                <a key={icon} href="#" className="text-gray-400 hover:text-white">
                                    <i className={`fab fa-${icon} text-xl`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Products</h4>
                        <ul className="space-y-2">
                            {["Exchange", "Wallet", "OTC Desk", "API", "Staking"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {["Help Center", "Blog", "Learn Crypto", "Status", "Community"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            {["About Us", "Careers", "Press", "Legal", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-4 md:mb-0">
                        © {new Date().getFullYear()} CryptoXchange. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                            <a key={item} href="#" className="text-gray-400 hover:text-white">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
