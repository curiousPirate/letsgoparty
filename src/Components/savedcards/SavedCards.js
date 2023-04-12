import React, { useState, useEffect } from "react";
import Card from "../cards/Card";

function SavedCards() {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
    setSavedCards(faveCards);

    const intervalId = setInterval(() => {
      const updatedCards = JSON.parse(localStorage.getItem("faves") || "[]");
      setSavedCards(updatedCards);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10" id="faves">
      <div
        style={{
          backgroundImage: `url("https://source.unsplash.com/1600x900/?party")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          borderRadius: "10%"
        }}
      >
        <h1 className="text-0">#</h1>
      </div>
      {savedCards.length === 0 && (
        <p className="text-center text-lg">So empty! Go ahead and click on the beer icon to save it to the bucket list!</p>
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
            handleRemoveFaveCard={savedCard.handleRemoveCard}
          />
        </div>
      ))}
    </div>
  );
}

export default SavedCards;

