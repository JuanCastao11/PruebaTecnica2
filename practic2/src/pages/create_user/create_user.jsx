import React from 'react'

function Create_user() {
  return (
    <>
    <div className="conten w-full flex ">
      <div className="cont2 w-[25%]  bg-white m-5">
      <h1 className=' m-10 font-bold text-[1.4rem] '>Create a Note</h1>
      <form action="" className='  m-10 flex flex-col  gap-3 justify-start '>
        <input type="text" name='user' placeholder='User' id='' className='  w-full border-2 outline-0 h-[40px] rounded-md' />
        <div className="button flex  w-full">
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
         font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-26 ">Save</button>
        </div>
        </form>
      </div>
      
    </div>
    </>
  )
}

export default Create_user
