import React from 'react'
import User from './user'


function Create_user() {

  let [userName,setUsername] = React.useState("")
  
  const body = {
    userName:userName
  }
  async function handleSubmit(event){
    event.preventDefault()
    await fetch("http://localhost:5000/api/users",{
      headers : {"Content-Type" : "application/json", 'Access-Control-Request-Headers': 'Authorization', 'Access-Control-Request-Method': 'POST', },
      method  : "POST",
      body: JSON.stringify(body)
    }) 
    .then(Response => console.log(Response))
    .catch (error => console.error(error))
    setUsername("")
  }
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  console.log(userName)

  let [userNameGet,setUsernameGet] = React.useState([])
  React.useEffect(() => {
    fetch("http://localhost:5000/api/users",{
      method: "GET" 
    })
    .then(Response => Response.json())
    .then(data => setUsernameGet(data))
    .catch (error => console.error(error))
    console.log(userNameGet)
  })

  return (
    <>
    <div className="conten w-full flex justify-between ">
      <div className="cont2 w-[25%]  bg-white m-5">
      <h1 className=' m-10 font-bold text-[1.4rem] '>Create a Note</h1>
      <form action="" className='  m-10 flex flex-col  gap-3 justify-start ' onSubmit={handleSubmit}>
        <input type="text" name='user' placeholder='User' id='' value={userName} className='  w-full border-2 outline-0 h-[40px] rounded-md' onChange={handleChange} />
        <div className="button flex  w-full">
        <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
         font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-26 ">Save</button>
        </div>
        </form>
      </div>
      <div className="list w-[70%] m-5 ">
      {userNameGet.map(user => (
       <User
       key={user._id}
       userName={user.userName}
       />
     ))}
      </div>
    
      
    </div>
    </>
  )
}

export default Create_user
