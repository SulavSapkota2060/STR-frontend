import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <div className='container'>
        <h1>
            Our Team
        </h1>
        <div className='ProfileHolder'>
        <div className='ProfileContainer'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="A" width='100px'/>
            <p id='name'>John Doe</p>
            <p id='designation'>Member</p>
        </div>

        <div className='ProfileContainer'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="B" width='100px'/>
            <p id='name'>John Doe</p>
            <p id='designation'>Member</p>
        </div>

        <div className='ProfileContainer'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="C" width='100px'/>
            <p id='name'>John Doe</p>
            <p id='designation'>Member</p>
        </div>

        <div className='ProfileContainer'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="D" width='100px'/>
            <p id='name'>Sulav Sapkota</p>
            <p id='designation'>President</p>
        </div>

        <div className='ProfileContainer'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="E" width='100px'/>
            <p id='name'>John Doe</p>
            <p id='designation'>Member</p>
        </div>

        <div className='ProfileContainer'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="F" width='100px'/>
            <p id='name'>John Doe</p>
            <p id='designation'>Member</p>
        </div>

        <div className='ProfileContainer'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="G" width='100px'/>
            <p id='name'>John Doe</p>
            <p id='designation'>Member</p>
        </div>
        </div>


    </div>
  )
}

export default Team;