import React from 'react'
import CardNotes from './cardNotes'
import "./notes.css"


function Notes() {

  let [notes,setNotes] = React.useState([])
  React.useEffect(() => {
    fetch("http://localhost:5000/api/notes",{
      method: "GET" 
    })
    .then(Response => Response.json())
    .then(data => setNotes(data))
    .catch (error => console.error(error))
    console.log(notes)
  },[])
  

  return (
    <div className=' flex  justify-center'>
     {notes.map(nota => (
       <CardNotes 
       key={nota._id}
       title={nota.title}
       rol={nota.rol}
       content={nota.content}
       date={nota.date}
       />
     ))}
    </div>
  )
}

export default Notes
