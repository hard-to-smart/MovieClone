import React, { useState } from "react";

const ToggleButton = () => {
    const [toggle, setToggle] = useState(false)
    const onToggleClick= ()=>{
        setToggle(!toggle)
    }
  return (
    <div className="bg-white flex flex-row gap-1 rounded-full h-fit p-[2px] border border-2px">
      <button id='btn1' onClick={onToggleClick} className={` text-xl ${toggle ? 'text-white bg-gradient-to-br from-orange-500 to-pink-600 ' : 'text-black bg-white'}  w-[3.5em] h-[2em] rounded-full `}>
        abc
      </button>
      <button id='btn2' onClick={onToggleClick} className={`text-xl  ${!toggle ? ' bg-gradient-to-br text-white from-orange-500 to-pink-600' : 'text-black bg-white'}  w-[3.5em] h-[2em] rounded-full `}>
        xyz
      </button>
    </div>
  );
};

export default ToggleButton;
