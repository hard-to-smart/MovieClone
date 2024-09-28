import React from 'react'

const ProgressBar = ({value}) => {
  return (
<div class="relative size-10">
  <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="2"></circle>
    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-pink-600 dark:text-pink-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="65" stroke-linecap="round"></circle>
  </svg>

  <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span class="text-center text-sm font-bold text-pink-600 dark:text-pink-500">{value.toFixed(1)}</span>
  </div>
</div>
  )
}

export default ProgressBar