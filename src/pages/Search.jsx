import React from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import Card from '../components/Card';
import NoResultsFound from '../components/NoResultsFound';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const result = useLoaderData();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  
  if(result?.length === 0 || result=== null){
    return (
      <NoResultsFound/>
    )
  }

    return(
          <>
           <div className='flex mt-20 px-10 font-serif italic text-3xl'>
              Search results for <span className='text-yellow-200'> &nbsp; "{query}" </span>
              </div>
          <div className='flex flex-row flex-wrap gap-4 pt-10 justify-center'>
           
            {result.map((each) => (
               <Card key={each.id} element={each} type={each?.media_type}/>
            ))}
            </div>
            </>

    )
}
//   return (
//     <div className='flex flex-row flex-wrap gap-4 justify-center'>
//       {
//           result && result.length >0 ?
//           (
//             result.map((each) => (
//               <Card key={each.id} element={each} />
//             ))
//           ) : (
            
//             <NoResultsFound/>
            
//           )
//         }
//     </div>
//   )
// }

export default Search