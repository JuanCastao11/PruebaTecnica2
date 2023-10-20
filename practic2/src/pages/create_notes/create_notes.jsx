import React from 'react'
import "./create_notes.css"

function Create_notes() {
  return (
    <>
    <div className="conten w-full flex justify-center">
      <div className="cont2 w-[40%]  bg-white m-5">
      <h1 className=' m-10 font-bold text-[1.4rem] '>Create a Note</h1>
      <form action="" className='  m-6 flex flex-col items-center gap-5 '>
        <select name="" id="" className=' w-[95%] border-2 outline-0  h-[40px] rounded-md'>
          <option value="" >Anonimo</option>
          <option value="" >Usuario</option>
        </select>
        <input type="text" name='title' placeholder='Title' id='title' className='  w-[95%] border-2 h-[40px] rounded-md outline-0' />
        <input type="text" name='Content' placeholder='Content' id='content' className='  w-[95%] border-2 outline-0 h-[40px] rounded-md' />
        <div className="fecha w-full ml-8">
        <input type="date" name='fecha' placeholder='' id='' className='  w-[30%] border-2 outline-0 h-[40px] rounded-md' />
        </div>
        <div className="button flex  w-full ml-8">
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
         font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-26 ">Save</button>
        </div>
        </form>
      </div>
      
    </div>
    </>
  )
}

export default Create_notes
