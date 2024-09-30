import React from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import Card from '../components/Card';
import NoResultsFound from '../components/NoResultsFound';

const Search = () => {
  const result = useLoaderData();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  console.log(result, result.length === 0 , "on search page");
  
  if(result.length === 0 || result=== null){
    return (
      <div className='w-screen h-screen flex justify-center items-center flex-col gap-4'>
      <NoResultsFound/>
      </div>
    )
  }

    return(
          
          <div className='flex flex-row flex-wrap gap-4 justify-center'>
            {result.map((each) => (
               <Card key={each.id} element={each} />
            ))}
            </div>

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