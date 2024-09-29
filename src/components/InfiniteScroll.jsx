import React, { useEffect, useState } from 'react'

const InfiniteScroll = ({ loadMoreData }) => {
    const [isLoading, setLoading] = useState(false);
   const handleScroll = () =>{
    const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight){
        if(!isLoading){
        setLoading(true);
        loadMoreData();
    }
    }
   useEffect(()=>{window.addEventListener("scroll", handleScroll); return window.removeEventListener("scroll")},[isLoading])

   }

  return (
    <div>
    {
        isLoading && <Spinner/>
    }
    </div>
  )
}

export default InfiniteScroll