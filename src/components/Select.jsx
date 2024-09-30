import React, {useState} from "react";

const Select = ({value, setSelectedGenreOption}) => {
    const handleChange=(e)=>{
      setSelectedGenreOption(e.target.value);
    }
  return (

      <select
        id="genreId"
        className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500  focus:ring-2"
        onChange={handleChange} defaultValue={value}>
        <option  disabled>{value}</option>
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
      </select>
  );
};

export default Select;
