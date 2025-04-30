import "./RandomQuote.css";
import { useEffect, useState } from "react";

interface Quote {
  quote: string;
  author: string;
}

const QuoteComponent = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("/data/quotes.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Quote[] = await response.json();
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote);
      } catch (error) {
        console.error("Error fetching the quotes:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      {quote && (
        <div className="quote">
          <p className="quote quote-text">{quote.quote}</p>
          <footer className="quote-author">
            &mdash; {quote.author ? quote.author : "Unknown"}
          </footer>
        </div>
      )}
    </div>
  );
};

export default QuoteComponent;
