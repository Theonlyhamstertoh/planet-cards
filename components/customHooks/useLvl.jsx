import { useState } from "react";

const CARD_STEPS = 1;
const MAX_CARDS = 16;
const INITIAL = { cardsCount: 2, num: 1 };

export const useLvl = () => {
  const [lvl, setLvl] = useState(INITIAL);
  const [isInitialLvl, setIsInitialLvl] = useState(true);
  const nextLvl = () => {
    setIsInitialLvl(false);
    setLvl((prevLvl) => {
      let cardsCount = prevLvl.cardsCount < MAX_CARDS ? prevLvl.cardsCount + CARD_STEPS : MAX_CARDS;
      console.log(cardsCount);
      let num = prevLvl.num + 1;
      return { cardsCount, num };
    });
  };
  const resetLvl = () => {
    setIsInitialLvl(true);
    setLvl({ ...INITIAL });
  };
  return { lvl, nextLvl, resetLvl, isInitialLvl };
};
