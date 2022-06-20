import React from 'react'
import './ProfileContainer.css'

const ProfileContainer = (props) => {
  return (
    <div className='ProfileContainer'>
   {props.showImage === "false" ? null :  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="A" width='100px'/>}
   <div className="info">
   <p id='name'>{props.name}</p>
    <p id='designation'>{props.position}</p>
   </div>
</div>
  )
}

export default ProfileContainer