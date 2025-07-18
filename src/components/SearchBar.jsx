import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';


const SearchBar = () => {
  const [formData, setFormData] = useState('');
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleChange=(e)=>{
    setFormData(e.target.value);
  }

  const handleSearch=(e)=>{
    e.preventDefault();
    if (formData.trim() !== '') {
      navigate(`/search?query=${formData}`);
    }
    setFormData('');
    // setSearchParams({ query: formData}); 
  }
//   useEffect(() => {
//     if (searchParams.get('query')!== null) {
//         navigate(`/search?query=${searchParams.get('query')}`);

//     }
// }, [searchParams, navigate]);
  // console.log('Current Search Params:', Array.from(searchParams.entries()));
  
  return (
    <form className='flex flex-row relative w-full' onSubmit={handleSearch}>
    <input className='text-slate-600 border h-[3rem] w-full rounded-full  text-lg font-semibold px-[14px]' placeholder='Search a movie or tv show' value={formData} onChange={handleChange}/>
        <button type='submit' className='h-[3rem] flex bg-gradient-to-br text-white text-xl justify-center items-center from-orange-500 to-pink-600 end-0 absolute w-36 rounded-r-full'>Search</button>
    </form>

  )
}

export default SearchBar