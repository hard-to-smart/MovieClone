import React from "react";
import { getImageUrl } from "../ApiUrlRecord";
import person from "../assets/person.webp"
const TopCast = ({name, character, profile_path}) => {
  return (
    <div className="max-h-60 flex flex-col text-center align-top m-2">
      <div className="rounded-full w-36 h-36 bg-gray-200">
        <img
          src={`${profile_path? getImageUrl+profile_path : person}`}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="font-medium text-white">{name}</h3>
      <p className="font-light text-gray-300 overflow-hidden"> {character}</p>
    </div>
  );
};

export default TopCast;
