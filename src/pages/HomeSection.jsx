import React, { useState } from "react";
import ToggleButton from "../components/ToggleButton";
import Carousel from "../components/Carousel";

const HomeSection = ({
  title,
  button1result,
  button2result,
  btn1value,
  btn2value,
}) => {
  const [activeBtn, setActiveBtn] = useState(btn1value);
  const data = activeBtn === btn1value ? button1result : button2result
  return (
    <div className="px-[10em]">
      <div className="flex justify-between py-[20px] items-center">
        <h2 className="text-white text-2xl">{title}</h2>
        <ToggleButton
          btn1value={btn1value}
          btn2value={btn2value}
          setActiveBtn={setActiveBtn}
          activeBtn={activeBtn}
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-between flex-row">
        <Carousel slides={data} activeBtn={activeBtn}/>
      </div>
    </div>
  );
};

export default HomeSection;
