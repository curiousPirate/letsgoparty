import React, { useState } from "react";
import { CiBeerMugFull } from "react-icons/ci";

function Faves({
  title,
  id,
  date,
  address,
  link,
  image,
  description,
  event_location_map,
  cards = [],
}) {
  const [isFave, setIsFave] = useState(
    () => localStorage.getItem(id) === "true"
  );

  const handleFaveClick = () => {
    const newIsFave = !isFave;
    setIsFave(newIsFave);
    if (newIsFave) {
      const card = {
        id,
        title,
        date,
        event_location_map,
        address,
        link,
        image,
        description,
      };
      onAdd(card);
    } else {
      handleRemoveFaveCard(id);
    }
  };

const onAdd = (card) => {
  const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
  const existingCardIndex = faveCards.findIndex((c) => c.id === card.id);
  if (existingCardIndex !== -1) {
    // Replace existing card with new card
    faveCards[existingCardIndex] = card;
  } else {
    // Add new card
    faveCards.push(card);
  }
  localStorage.setItem("faves", JSON.stringify(faveCards));
  localStorage.setItem(id, "true");
};


  const handleRemoveFaveCard = (id) => {
    const faveCards = JSON.parse(localStorage.getItem("faves") || "[]");
    const newFaveCards = faveCards.filter((card) => card.id !== id);
    localStorage.setItem("faves", JSON.stringify(newFaveCards));
    localStorage.removeItem(id);
  };

  return (
    <>
      {isFave || cards.some((card) => card.id === id) ? (
        <button onClick={handleFaveClick} style={{ border: "none" }}>
          <CiBeerMugFull className="fave-icon-active text-yellow-600 h-10 w-10" />
        </button>
      ) : (
        <button onClick={handleFaveClick} style={{ border: "none" }}>
          <CiBeerMugFull className="fave-icon text-black lg:text-black border-cyan-950 h-10 w-10" />
        </button>
      )}
    </>
  );
}

export default Faves;
