import React from 'react'
import { getImageUrl } from '../ApiUrlRecord'

const SingleCard = ({path}) => {
  return (
    <div className='h-full w-[300px] shadow cursor-pointer' >
      <img className='h-full w-full rounded-lg' src={getImageUrl+ path}/>
    </div>
  )
}

export default SingleCard