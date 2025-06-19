
import type { FC } from "react";
import { useRef, useEffect } from "react";

export const TradingView: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const embedWidget = () => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "light",
      locale: "en",
      isTransparent: true,
    });
    containerRef.current.appendChild(script);
  };

  useEffect(() => {
    embedWidget();
  }, []);

  return (
    <section className="py-12 bg-violet-950/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Live Crypto Market Screener
          </h2>
          <p className="text-white/80">
            Explore top cryptocurrencies, sort by market cap, volume, and more—
            powered by TradingView.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={embedWidget}
            className="px-4 py-2 bg-[#00cec9] hover:bg-[#009b93] text-white rounded-md font-medium transition"
          >
            Refresh
          </button>
          <a
            href="https://www.tradingview.com/screener/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white hover:bg-gray-200 text-[#6c5ce7] rounded-md font-medium transition"
          >
            Open Full Screener
          </a>
        </div>

        <div className="h-[600px] bg-white/10 rounded-lg overflow-hidden shadow-lg">
          <div
            ref={containerRef}
            className="tradingview-widget-container__widget h-full"
          />
        </div>
      </div>
    </section>
  );
}
 