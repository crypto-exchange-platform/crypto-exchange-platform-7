export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-violet-950/30 to-violet-950 text-white py-10"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Future of{" "}
            <span className="text-[#00cec9]">Digital Currency</span> Is Here
          </h1>
          <p className="text-xl mb-6 opacity-90">
            Trade, invest, and manage your cryptocurrency portfolio with our
            secure and intuitive platform.
          </p>
          <p className="text-lg mb-8 opacity-80">
            Join thousands of users worldwide who rely on real-time analytics,
            instant price alerts, and seamless wallet integration to stay ahead
            in the fast-moving crypto market.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#00cec9] hover:bg-[#009b93] text-white px-6 py-3 rounded-full font-bold text-lg transition">
              Start Trading
            </button>
            <button className="bg-white hover:bg-gray-200 text-[#6c5ce7] px-6 py-3 rounded-full font-bold text-lg transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <img
            src="/bitcoin.webp"
            alt="Bitcoin"
            className="w-24 h-24 absolute top-2 left-10 animate-bounce"
          />
          <img
            src="/ethereum.png"
            alt="Ethereum"
            className="w-20 h-20 absolute top-1 left-40 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <img
            src="/tether.webp"
            alt="Tether"
            className="w-20 h-20 absolute top-0 left-25 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
          <img
              src="/polkastarter.svg"
              alt="Tether"
              className="w-14 h-20 absolute top-0 left-38 animate-bounce"
              style={{ animationDelay: "0.4s" }}
          />
          <img
              src="/cosmos.svg"
              alt="Tether"
              className="w-18 h-18 absolute top-0  animate-bounce"
              style={{ animationDelay: "0.4s" }}
          />
          <img
              src="/tether.webp"
              alt="Tether"
              className="w-20 h-20 absolute top-0 left-25 animate-bounce"
              style={{ animationDelay: "0.4s" }}
          />


          <div className="space-y-6 mt-20">
            {[
              {
                name: "Bitcoin",
                logo: "bitcoin.webp",
                price: "$42,856.12",
                change: 2.45,
                tagline: "🚀 Gearing up for new highs!",
                marketCap: "$810B",
                volume: "$24B",
                high24h: "$43,200",
                low24h: "$41,500",
              },
              {
                name: "Ethereum",
                logo: "ethereum.png",
                price: "$2,345.67",
                change: 1.78,
                tagline: "⚡ Gas fees are dropping",
                marketCap: "$280B",
                volume: "$15B",
                high24h: "$2,360",
                low24h: "$2,300",
              },
             
            ].map((c) => (
              <div
                key={c.name}
                className="flex flex-col p-4 bg-white/10 rounded-lg backdrop-blur-md border border-white/20
                           hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={`/${c.logo}`}
                    alt={c.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-lg font-semibold">{c.name}</span>
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <p className="text-2xl font-bold">{c.price}</p>
                  <p
                    className={`flex items-center text-sm font-medium ${
                      c.change >= 0 ? "text-[#00cec9]" : "text-[#f00]"
                    }`}
                  >
                    {c.change >= 0 ? (
                      <i className="fas fa-arrow-up mr-1"></i>
                    ) : (
                      <i className="fas fa-arrow-down mr-1"></i>
                    )}
                    {Math.abs(c.change).toFixed(2)}%
                  </p>
                </div>
                <p className="italic text-sm opacity-75 mb-3">{c.tagline}</p>
                <div className="grid grid-cols-2 gap-x-4 text-xs opacity-80 mb-3">
                  <div>
                    <span className="font-medium">Market Cap:</span>{" "}
                    {c.marketCap}
                  </div>
                  <div>
                    <span className="font-medium">24h Vol:</span> {c.volume}
                  </div>
                  <div className="col-span-2">
                    <span className="font-medium">24h Range:</span> {c.low24h} –{" "}
                    {c.high24h}
                  </div>
                </div>
                <button className="w-full mt-auto bg-white text-[#6c5ce7] py-2 rounded-lg font-medium hover:bg-gray-200 transition">
                  View All
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
