import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import Carousel from "./Carousel";

const HomeSection = ({
  title,
  button1result,
  button2result,
  btn1value,
  btn2value,
  displayTitleInCard = true,
}) => {
  const [activeBtn, setActiveBtn] = useState(btn1value);
  const data = activeBtn === btn1value ? button1result : button2result
  return (
    <>
      <div className="flex justify-between pt-4 px-10 items-center">
        <h2 className="text-white text-2xl">{title}</h2>
        <ToggleButton
          btn1value={btn1value}
          btn2value={btn2value}
          setActiveBtn={setActiveBtn}
          activeBtn={activeBtn}
        />
      </div>
      
      <div className="flex flex-wrap gap-4 justify-between flex-row">
        <Carousel title={title} data={data} activeBtn={activeBtn} displayTitleInCard/>
      </div>
    </>
  );
};

export default HomeSection;
