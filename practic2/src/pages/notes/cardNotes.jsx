import React from 'react'

function CardNotes(props) {
  return (
    <aside className=' bg-white w-[20%] m-5'>
        <nav className=' flex justify-between  bg-slate-400'>
            <h1 className=' m-2  text-[1.3rem] text-white'>{props.title}</h1>
            <button type="submit" className="text-white bg-gradient-to-r m-2 from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br 
         font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-26 ">Edit</button>
        </nav>
        <main className=''>
            <p className='m-2 '>{props.content}</p>
            <p className='m-2'>{props.rol}</p>
            <p className='m-2'>{props.date}</p>
        </main>
        <footer className=' bg-slate-400'>
        <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
         font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-26  m-2">Delete</button>
        </footer>
    </aside>
  )
}

export default CardNotes
