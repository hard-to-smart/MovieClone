import React, {  useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';


const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query')
  const [formData, setFormData] = useState(query ? query : '');

  const handleChange=(e)=>{
    setFormData(e.target.value);
  }

  const handleSearch=(e)=>{
    e.preventDefault();
    if (formData.trim() !== '') {
      navigate(`/search?query=${formData}`);
    }
    setFormData('')
  }

  
  return (
    <form className='flex flex-row relative w-full' onSubmit={handleSearch}>
    <input className='text-slate-600 border h-[3rem] w-full rounded-full  text-lg font-semibold px-[14px]' placeholder='Search a movie or tv show' value={formData} onChange={handleChange}/>
        <button type='submit' className='h-[3rem] flex bg-gradient-to-br text-white text-xl justify-center items-center from-orange-500 to-pink-600 end-0 absolute w-36 rounded-r-full'>Search</button>
    </form>

  )
}

export default SearchBar