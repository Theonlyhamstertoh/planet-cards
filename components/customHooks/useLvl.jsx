import { useState } from "react";

const CARD_STEPS = 1;
const MAX_CARDS = 2;
const INITIAL = { cardsCount: 2, num: 1 };

export const useLvl = () => {
  const [lvl, setLvl] = useState(INITIAL);

  const nextLvl = () => {
    setLvl((prevLvl) => {
      let cardsCount = prevLvl.cardsCount < MAX_CARDS ? prevLvl.cardsCount + CARD_STEPS : MAX_CARDS;
      let num = prevLvl.num + 1;
      return { cardsCount, num };
    });
  };
  const resetLvl = () => {
    setLvl(INITIAL);
  };
  return { lvl, nextLvl, resetLvl };
};
