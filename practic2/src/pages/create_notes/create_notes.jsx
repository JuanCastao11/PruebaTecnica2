import React from 'react'
import "./create_notes.css"



function Create_notes() {

  let [rol,setRol] = React.useState("")
  let [title,setTitle] = React.useState("")
  let [content,setContent] = React.useState("")
  let [date,setDate] = React.useState("")

  const body = {
    rol:rol,
    title:title,
    content:content,
    date:date
  }
  async function handleSubmit(event){
    event.preventDefault()
    await fetch("http://localhost:5000/api/notes",{
      headers : {"Content-Type" : "application/json", 'Access-Control-Request-Headers': 'Authorization', 'Access-Control-Request-Method': 'POST', },
      method  : "POST",
      body: JSON.stringify(body)
    }) 
    .then(Response => console.log(Response))
    .catch (error => console.error(error))
    setRol("")
    setTitle("")
    setContent("")
    setDate("")
  }
  const handleChange = (event) => {
    setRol(event.target.value);
  };
  console.log(rol)
  
  const handleChangetitle = (event) => {
    setTitle(event.target.value)
  };
  console.log(title)

  const handleChangeContent = (event) => {
    setContent(event.target.value)
  };
  console.log(content)

  const handleChangeDate = (event) => {
    setDate(event.target.value) 
  };
  console.log(date)


  
  return (

    <>
    <div className="conten w-full flex justify-center">
      <div className="cont2 w-[40%]  bg-white m-5">
      <h1 className=' m-10 font-bold text-[1.4rem] '>Create a Note</h1>
      <form action="" className='  m-6 flex flex-col items-center gap-5 ' onSubmit={handleSubmit}>
        <select value={rol} name="" id="" className=' w-[95%] border-2 outline-0  h-[40px] rounded-md' onChange={handleChange}>
          <option value="Estudiante" >Estudiante</option>
          <option value="Profesor" >Profesor</option>
        </select>
        <input type="text" value={title} name='title' placeholder='Title' id='title' className='  w-[95%] border-2 h-[40px] rounded-md outline-0' onChange={handleChangetitle} />
        <input value={content}  type="text" name='Content' placeholder='Content' id='content' className='  w-[95%] border-2 outline-0 h-[40px] rounded-md' onChange={handleChangeContent} />
        <div className="fecha w-full ml-8">
        <input type="date" name='fecha' placeholder='' id='' value={date} className='  w-[30%] border-2 outline-0 h-[40px] rounded-md' onChange={handleChangeDate} />
        </div>
        <div className="button flex  w-full ml-8">
        <button  type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
         font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-26 ">Save</button>
        </div>
        </form>
      </div>
      
    </div>
    </>
  )
}

export default Create_notes
