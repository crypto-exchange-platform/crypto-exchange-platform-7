import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface NewsArticle {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  image_url?: string;
}

interface NewsItem {
  title: string;
  description: string;
  time: string;
  image: string;
  link: string;
}

export default function NewsSection() {
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          'https://newsdata.io/api/1/news?apikey=pub_83392b9f258a41118d58905dceadd83a&q=forex&category=business&language=en'
        );
        const data = await res.json();
        const mapped = (data.results as NewsArticle[])
          .slice(0, 6)
          .map((art) => ({
            title: art.title,
            description: art.description,
            time: new Date(art.pubDate).toLocaleDateString('en-US', {
              month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
            }),
            image: art.image_url || '/placeholder.png',
            link: art.link,
          }));
        setArticles(mapped);
      } catch {
        setError('Unable to load news');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <section id="news" className="py-24 bg-violet-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Latest Forex Insights</h2>
          <p className="mt-2 text-gray-600">
            Get up-to-date analysis and news from the FX market.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader2 className="animate-spin h-8 w-8 text-gray-500" aria-label="Loading" />
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{item.time}</span>
                    <button
                      className="text-indigo-500 hover:text-teal-300 font-medium"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <button
            className="bg-indigo-500 hover:bg-teal-300 text-white px-6 py-2 rounded-full font-semibold transition"
            onClick={() => window.open('https://newsdata.io', '_blank')}
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
 