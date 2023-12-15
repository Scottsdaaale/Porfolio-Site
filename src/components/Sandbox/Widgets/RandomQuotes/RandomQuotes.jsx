import React, { useState, useEffect } from "react";
import "./RandomQuotes.css"; // Import your CSS file for styling

const RandomQuotes = () => {
  const initialItems = [
    { title: "Random Quote 1", content: "" },
    { title: "Random Quote 2", content: "" },
    { title: "Random Quote 3", content: "" },
    { title: "Random Quote 4", content: "" },
  ];

  const [items, setItems] = useState(initialItems);
  const [activeIndex, setActiveIndex] = useState(null);

  const fetchAllQuotes = async () => {
    try {
      const quotesPromises = initialItems.map(async (item) => {
        const response = await fetch("https://api.quotable.io/random");
        if (response.ok) {
          const data = await response.json();
          return { ...item, content: data.content };
        }
        throw new Error("Failed to fetch data");
      });
      const updatedItems = await Promise.all(quotesPromises);
      setItems(updatedItems);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllQuotes();
  }, []);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-menu">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => onItemClick(index)}
          >
            {item.title}
          </div>
          {index === activeIndex && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RandomQuotes;
