import { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      new window.TradingView.widget({
        width: "auto",
        height: "",
        symbol: "TSLA",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_legend: false,
        container_id: "tradingview_12345",
        backgroundColor: "#212121",
        borderColor: "#515151",
      });
    };

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_12345" ref={containerRef}></div>
    </div>
  );
};

export default TradingViewWidget;
