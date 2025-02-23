import React from 'react'
import SingleCard from './SingleCard'

const Similar = ({title, release_date, genre, rating, profile_path}) => {
  return (
    <>
    <SingleCard url={profile_path}/>
    <div></div>
    </>
  )
}

export default Similar