import React, { useState, useEffect } from "react";
import Card from "../cards/Card";
import Faves from "../faves/faves";

function SavedCards() {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
    setSavedCards(faveCards);
  }, []);

  const handleFaveClick = (card) => {
    const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");

    const index = faveCards.findIndex((c) => c.id === card.id);
    if (index === -1) {
      const newFaveCards = [...faveCards, card];
      localStorage.setItem("faves", JSON.stringify(newFaveCards));
      setSavedCards(newFaveCards);
    } else {
      const newFaveCards = [
        ...faveCards.slice(0, index),
        ...faveCards.slice(index + 1),
      ];
      localStorage.setItem("faves", JSON.stringify(newFaveCards));
      setSavedCards(newFaveCards);
    }
  };

  const handleRemoveFaveCard = (id) => {
    const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
    const newFaveCards = faveCards.filter((card) => card.id !== id);
    setSavedCards(newFaveCards);
    localStorage.setItem("faves", JSON.stringify(newFaveCards));
  };

  useEffect(() => {
    window.addEventListener("storage", () => {
      const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
      setSavedCards(faveCards);
    });
    return () => window.removeEventListener("storage", () => {});
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10" id="faves">
      <h1 className="text-3xl font-bold text-center mb-10">Saved Events</h1>
      {savedCards.length === 0 && (
        <p className="text-center text-lg">No saved events yet.</p>
      )}
      {savedCards.map((savedCard) => (
        <div key={savedCard.id}>
          <Card
            title={savedCard.title}
            id={savedCard.id}
            date={savedCard.date}
            address={savedCard.address}
            link={savedCard.link}
            image={savedCard.image}
            description={savedCard.description}
            event_location_map={savedCard.event_location_map}
          />
          <div className="flex justify-center items-center mt-2 remove">
            <Faves
              className="remove"
              title={savedCard.title}
              id={savedCard.id}
              date={savedCard.date}
              address={savedCard.address}
              link={savedCard.link}
              image={savedCard.image}
              description={savedCard.description}
              event_location_map={savedCard.event_location_map}
              setSavedCards={setSavedCards}
              cards={savedCards}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedCards;
