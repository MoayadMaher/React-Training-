import { useState } from "react";
import bird from "./assets/svg/bird.svg";
import cat from "./assets/svg/cat.svg";
import cow from "./assets/svg/cow.svg";
import dog from "./assets/svg/dog.svg";
import gator from "./assets/svg/gator.svg";
import horse from "./assets/svg/horse.svg";
import heart from "./assets/svg/heart.svg";
import "./AnimalShow.css";

interface AnimalShowProps {
  type: keyof typeof svgMap;
}

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }: AnimalShowProps) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    console.log(clicks);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
