import { useState, useEffect } from "react";

export function useMagicColor() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    let interval = setInterval(() => {
      //0 => 999999
      const colorNew = Math.floor(Math.random() * 999999);
      setColor(`#${colorNew}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return color;
}
