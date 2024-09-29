import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [formData, setFormData] = useState('');
  const navigate = useNavigate()
  const handleChange=(e)=>{
    setFormData(e.target.value);
  }
  console.log(formData)

  const handleSearch=(e)=>{
    e.preventDefault();
    navigate(`/search?query=${formData}`)
  }
  return (
    <form className='flex flex-row relative h-[4em] ' onSubmit={handleSearch}>
    <input className='text-slate-600 border rounded-full w-[50em] h-full text-2xl font-semibold px-[20px]' placeholder='Search a movie or tv show' value={formData} onChange={handleChange}/>
        <button type='submit' className='h-full flex bg-gradient-to-br text-white text-xl justify-center items-center from-orange-500 to-pink-600 end-0 absolute w-36 rounded-r-full'>Search</button>
    </form>

  )
}

export default SearchBar