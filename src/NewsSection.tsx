import { useEffect, useState } from 'react';

interface NewsArticle {
    title: string;
    description: string;
    pubDate: string;
    link: string;
    image_url?: string;
}

interface NewsItem {
    category: string;
    time: string;
    icon: string;
    title: string;
    description: string;
    image: string;
    gradient: string;
}

const NewsSection = () => {
    const [newsList, setNewsList] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(
                    `https://newsdata.io/api/1/news?apikey=pub_83392b9f258a41118d58905dceadd83a&q=forex&category=business&language=en`
                );
                const data = await res.json();

                const mapped = (data.results as NewsArticle[]).slice(0, 6).map((article, i) => ({
                    category: 'Forex News',
                    time: new Date(article.pubDate).toLocaleString(),
                    icon: 'fas fa-newspaper',
                    title: article.title,
                    description: article.description,
                    image: article.image_url || 'https://via.placeholder.com/600x400',
                    gradient: i % 2 === 0 ? 'from-indigo-500 to-teal-300' : 'from-teal-300 to-indigo-500',
                }));

                setNewsList(mapped);
            } catch (err) {
                console.error('API Error:', err);
                setError('Failed to fetch news');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <section id="news" className="py-20 bg-violet-950/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Forex News</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Stay updated with the latest foreign exchange market trends
                    </p>
                </div>

                {loading ? (
                    <p className="text-center text-white">Loading...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsList.map((news, index) => (
                            <div
                                key={index}
                                className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 hover:-translate-y-1 transition"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-30"
                                    style={{ backgroundImage: `url(${news.image})` }}
                                />
                                <div className={`relative h-12 bg-gradient-to-r ${news.gradient} flex items-center justify-center`}>
                                    <i className={`${news.icon} text-6xl text-white opacity-40`}></i>
                                </div>
                                <div className="relative p-6 z-10">
                                    <div className="flex items-center text-sm text-gray-400 mb-2">
                                        <span>{news.category}</span>
                                        <span className="mx-2">•</span>
                                        <span>{news.time}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">{news.title}</h3>
                                    <p className="text-gray-300 mb-4">{news.description}</p>
                                    <a href="#" className="text-indigo-400 hover:text-teal-300 font-medium flex items-center">
                                        Read More <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-indigo-500 to-teal-300 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition duration-300">
                        View All News Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
