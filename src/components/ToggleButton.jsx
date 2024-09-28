import React, { useState } from "react";

const ToggleButton = ({btn1value, btn2value, setActiveBtn}) => {
    const [toggle, setToggle] = useState(false)

    const onToggleClick1= ()=>{
      setToggle(false);
      setActiveBtn(btn1value)
    }
    const onToggleClick2= ()=>{
      setToggle(true);
      setActiveBtn(btn2value)
    }
  return (
    <div className="bg-white flex flex-row gap-1 rounded-full h-fit p-[2px] border border-2px">
      <button onClick={onToggleClick1} className={`text-[15px] ${!toggle? 'text-white bg-gradient-to-br from-orange-500 to-pink-600 ' : 'text-black bg-white'}  w-[4em] h-[2em] rounded-full `}>
        {btn1value}
      </button>
      <button onClick={onToggleClick2} className={`text-[15px] text-nowrap ${toggle? ' bg-gradient-to-br text-white from-orange-500 to-pink-600' : 'text-black bg-white'}  w-[4em] h-[2em] rounded-full `}>
        {btn2value}
      </button>
    </div>
  );
};

export default ToggleButton;
