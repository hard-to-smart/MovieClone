import React from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import Card from '../components/Card';

const Search = () => {
  const result = useLoaderData();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  console.log(result, "on search page");
  return (
    <div className='flex flex-row flex-wrap gap-4 justify-center'>
      {
          result && result.length > 0 ? (
            result.map((each) => (
              <Card key={each.id} element={each} />
            ))
          ) : (
            <p>No results found for "{query}"</p>
          )
        }
    </div>
  )
}

export default Search