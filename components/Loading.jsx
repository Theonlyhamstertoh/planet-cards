import React, { useState, useEffect } from "react";
import { FlexColCenter, Loading } from "./ReusableStyles";
import Image from "next/image";

export default function LoadingScreen({ planet, lvl, setGameMode }) {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgressValue(100), 0);

    setTimeout(() => setGameMode("game"), 1500);

    return () => {
      console.log("UNMOUNTED");
      // setProgressValue(0);
    };
  }, []);

  return (
    <FlexColCenter>
      <Loading progressValue={progressValue} lvl={lvl} />
      <Image className="rotate" src={planet} width="300px" objectFit="contain" height="300px" />
    </FlexColCenter>
  );
}
