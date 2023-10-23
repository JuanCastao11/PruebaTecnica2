import React from 'react'

function User(props) {


  return (
    <div className=' bg-white h-14 flex items-center border-2 '>
      <p className=' m-5 text-black'>{props.userName}</p>
    </div>
  )
}

export default User
