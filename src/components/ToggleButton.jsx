import React, { useState } from "react";

const ToggleButton = ({btn1value, btn2value}) => {
    const [toggle, setToggle] = useState(false)
    const onToggleClick= ()=>{
        setToggle(!toggle)
    }
  return (
    <div className="bg-white flex flex-row gap-1 rounded-full h-fit p-[2px] border border-2px">
      <button id={btn1value} onClick={onToggleClick} className={`text-[15px] ${toggle ? 'text-white bg-gradient-to-br from-orange-500 to-pink-600 ' : 'text-black bg-white'}  w-[4em] h-[2em] rounded-full `}>
        {btn1value}
      </button>
      <button id={btn2value} onClick={onToggleClick} className={`text-[15px] text-nowrap   ${!toggle ? ' bg-gradient-to-br text-white from-orange-500 to-pink-600' : 'text-black bg-white'}  w-[4em] h-[2em] rounded-full `}>
        {btn2value}
      </button>
    </div>
  );
};

export default ToggleButton;
