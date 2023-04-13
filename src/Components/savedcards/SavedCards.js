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
    <div className="max-w-4xl mx-auto mt-10" id="bucket-list">
      <div>
        <h2
          className="text-3xl font-bold mb-8 text-white my-6 underline
        underline-offset-8 text-center p-4"
        >
          BUCKET LIST
        </h2>
      </div>
      {savedCards.length === 0 && (
        <h3 className="text-justify text-xl p-8 text-white">
          "Don't let your bucket list stay empty! Take a sip of adventure and
          click on that beer icon to add it to your list. Let's make some
          unforgettable memories and cheers to life's greatest moments. You
          won't regret it - trust us, your future self will thank you for taking
          the plunge! So go ahead, add that brew to your bucket list and let the
          good times roll!"
        </h3>
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

