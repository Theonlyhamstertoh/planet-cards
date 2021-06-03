import { useState } from "react";

const CARD_STEPS = 2;
const MAX_CARDS = 20;
const INITIAL = { cardsCount: 4, num: 1 };

export const useLvl = () => {
  const [lvl, setLvl] = useState(INITIAL);

  const nextLvl = () => {
    setLvl((prevLvl) => {
      let newCardCounts =
        prevLvl.cardsCount < MAX_CARDS ? prevLvl.cardsCount + CARD_STEPS : MAX_CARDS;
      let newLvl = prevLvl.num + 1;
      return { newCardCounts, newLvl };
    });
  };
  const resetLvl = () => {
    setLvl(INITIAL);
  };
  return { lvl, nextLvl, resetLvl };
};
