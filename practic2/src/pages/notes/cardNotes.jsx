import React from 'react'

function CardNotes(props) {

 
  return (
<div class="w-full max-w-sm  bg-gray-700 border border-gray-200 rounded-lg shadow  dark:border-gray-700 m-5">
    <div class="flex justify-end px-4 pt-4"> 
    </div>
    <div class="flex flex-col items-center pb-10">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.title}</h5>
        <p class="mb-1 text-xl font-medium text-gray-900 dark:text-white text-[0.8rem]">{props.content}</p>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.rol}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{props.date}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg" >Delete</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg">Edit</a>
        </div>
    </div>
</div>

        
  
    
  )
}

export default CardNotes
