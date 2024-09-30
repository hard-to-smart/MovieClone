import React, {useState} from "react";

const Sort = ({value, setSelectedSortOption}) => {

    const handleCallAPIData=(e)=>{
        setSelectedSortOption(e.target.value);
    }
  return (
      <select
        id="sortId"
        className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500  focus:ring-2" 
        onChange={handleCallAPIData}
        defaultValue={value}
        >
        <option disabled>{value}</option>
        <option value="Popularity Descending" >Popularity Descending</option>
        <option value="Popularity Ascending" >Popularity Ascending</option>
        <option value="Rating Descending">Rating Descending</option>
        <option value="Rating Ascending" >Rating Ascending</option>
        <option value="Title A-Z">Title A-Z</option>
      </select>
  );
};

export default Sort;
