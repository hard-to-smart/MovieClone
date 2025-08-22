import React, {useState} from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Sort = ({ selectedSortOption, setSelectedSortOption}) => {
    const [showSortOptions, setShowSortOptions] = useState(false)
    const handleCallAPIData=(sortOption)=>{
        setShowSortOptions(false)
        setSelectedSortOption(sortOption);
    }
  return (
      <ul
        id="sortId"
        className="relative block w-full cursor-default text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500  focus:ring-2" 
        onChange={handleCallAPIData}
        >
        <li className={`flex justify-between  px-3 py-2 text-sm text-nowrap bg-gray-50 text-gray-700 shadow ${showSortOptions ? 'rounded-t-lg': 'rounded-lg'} hover:ring-2`} onClick={()=>setShowSortOptions(prev=>!prev)}>
          <span>
            {
              selectedSortOption ? selectedSortOption : 'Select Sort'
            }
          </span>
          <span>
         {
          showSortOptions ?  <MdArrowDropUp size={24}/> : <MdArrowDropDown size={24}/>
         }
          </span>
        </li>
        <div className={`${showSortOptions ? 'block': 'hidden'} absolute left-0 w-full text-sm z-10 border text-gray-700 border-gray-300 rounded-b-lg bg-gray-50`}>
        <li className="px-3 py-2 hover:bg-pink-200" onClick={()=>handleCallAPIData("popularity desc")}>Popularity Descending</li>
        <li className="px-3 py-2 hover:bg-pink-200" onClick={()=>handleCallAPIData("popularity asc")}>Popularity Ascending</li>
        <li className="px-3 py-2 hover:bg-pink-200" onClick={()=>handleCallAPIData("rating desc")}>Rating Descending</li>
        <li className="px-3 py-2 hover:bg-pink-200" onClick={()=>handleCallAPIData("rating asc")}>Rating Ascending</li>
        <li className="px-3 py-2 hover:bg-pink-200" onClick={()=>handleCallAPIData("title a-z")}>Title A-Z</li>
        </div>
      </ul>
  );
};

export default Sort;
