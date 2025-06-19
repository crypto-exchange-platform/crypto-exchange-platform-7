import type { FC } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const TradingView: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
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
        if (containerRef.current) {
            containerRef.current.innerHTML = "";
            containerRef.current.appendChild(script);
        }
    }, []);

    return (
        <section className="py-10 bg-violet-950/30 h-[700px]">
            <div className="container mx-auto px-4 ">
                <div className="tradingview-widget-container ">
                    <div ref={containerRef} className="tradingview-widget-container__widget h-[600px]" />
                </div>
            </div>
        </section>
    );
};
