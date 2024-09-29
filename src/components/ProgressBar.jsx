import React from 'react'

const ProgressBar = ({value}) => {
  return (
<div className="relative size-10">
  <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-pink-600 dark:text-pink-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="65" strokeLinecap="round"></circle>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-sm font-bold text-pink-600 dark:text-pink-500">{value.toFixed(1)}</span>
  </div>
</div>
  )
}

export default ProgressBar