const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            title: 'Professional Trader',
            image: 'https://randomuser.me/api/portraits/women/43.jpg',
            text:
                'CryptoVerse has completely transformed how I trade cryptocurrencies. The platform is intuitive yet powerful, with all the tools I need for technical analysis. Execution speeds are excellent even during volatile market conditions.',
            stars: 5,
        },
        {
            name: 'Michael Chen',
            title: 'Blockchain Developer',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            text:
                "As a developer, I appreciate CryptoVerse's API documentation and reliability. Their security measures give me confidence when integrating with my applications. Customer support is knowledgeable and responsive.",
            stars: 4.5,
        },
        {
            name: 'Emma Rodriguez',
            title: 'Beginner Investor',
            image: 'https://randomuser.me/api/portraits/women/65.jpg',
            text:
                'Coming from traditional investing, CryptoVerse made my transition to crypto seamless. Their educational resources are fantastic, and the mobile app is so easy to use. I\'ve already recommended it to all my friends!',
            stars: 5,
        },
    ];

    return (
        <section className="py-20 bg-violet-950/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Trusted by thousands of traders worldwide
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-violet-950 to-violet-750 p-8 rounded-lg shadow-md"
                        >
                            <div className="flex items-center mb-6">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="text-white font-medium">{t.name}</h4>
                                    <p className="text-gray-400 text-sm">{t.title}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4">"{t.text}"</p>
                            <div className="flex text-yellow-400">
                                {[...Array(Math.floor(t.stars))].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                                {t.stars % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;