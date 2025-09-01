import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Select = ({ selectedGenreOption, setSelectedGenreOption }) => {
  const [showGenreOptions, setShowGenreOptions] = useState(false)
  const handleSelectGenre = (genre) =>{
    setShowGenreOptions(false);
    setSelectedGenreOption((prev)=> prev.includes(genre) ? prev : [...prev, genre])
  }
  return (
    <ul className="relative cursor-default w-full">
      <li className={`flex justify-between px-3 py-2 text-sm text-nowrap bg-gray-50 text-gray-700 shadow ${showGenreOptions ? 'rounded-t-lg': 'rounded-lg'} hover:ring-2`} onClick={()=>setShowGenreOptions((prev)=>!prev)}>
        <span>
        {
          selectedGenreOption.length > 0 ?
          selectedGenreOption.map((genre, index) => (
            <p key={index} className="mr-1 inline-flex justify-center flex-wrap text-xs">
              {genre}{index < selectedGenreOption.length - 1 ? ', ' : ''}
            </p>
          )) :
          'Select Genre'
        }
        </span>
        <span>
        {
          showGenreOptions ?  <MdArrowDropUp size={24}/> : <MdArrowDropDown size={24}/>
        }
        </span>
      </li>
      <div className={`${showGenreOptions ?'block': 'hidden'} absolute left-0 w-full text-sm z-10 border text-gray-700 border-gray-300 rounded-b-lg bg-gray-50`}> 
        <li className="px-3 py-2 hover:bg-pink-200" onClick={()=>handleSelectGenre('Action')}>
          Action
        </li>
      <li className="px-3 py-2 hover:bg-pink-200" onClick={()=>handleSelectGenre('Adventure')}> 
          Adventure
        </li>
      <li className="px-3 py-2 hover:bg-pink-200" onClick={()=>handleSelectGenre('Comedy')}> 
          Comedy
        </li>
      <li className="px-3 py-2 hover:bg-pink-200 rounded-b-lg" onClick={()=>handleSelectGenre('Drama')}> 
          Drama
        </li>
      </div>
    </ul>
  );
};

export default Select;
