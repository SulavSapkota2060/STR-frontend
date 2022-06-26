import React from 'react'
import './Team.css'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import MemberContainer from '../ProfileContainer/MemberContainer'


const Team = () => {
    const members = [
            "Sangay", "Prawal", "Srijana", "Prasanna", "Shreeya", "Shrish", "Hems", "Avigya", "Bibhav", "Pranjal", "Samir", "Abhinav", "Sangya", "Raymond", "Sahir"
    ]
    return (
        <div className='container' name="team">
            <a name="team"></a>
            <h1 className='page-header'>
                Our Team
            </h1>

            <div className="coordinators">
                <div className="coordinator">
                    <img src="https://scontent.xx.fbcdn.net/v/t39.30808-1/269913746_10159779863547429_2020318259802257185_n.jpg?stp=c0.33.200.200a_dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=C1ig374I3YAAX9u7El3&_nc_ht=scontent.xx&oh=00_AT_nta7Cl7wCJhwVe8mnnCchuWuivamowatyLXkVLafG-w&oe=62BCC4AD" alt="" />
                    <h3>Mr. Hari Ram Tiwari </h3>
                </div>
                <div className="coordinator">
                    <img src="https://scontent.xx.fbcdn.net/v/t1.6435-1/94506251_10158192207474518_4390597749322547200_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=xYDG7MkF9D4AX-Kj429&_nc_ht=scontent.xx&oh=00_AT9jCBMExzUgmlOPWQ0aXWDF5cjudxIneyfKpfz68q8izQ&oe=62DDF063" alt="" />
                    <h3>Mr. Toya Ghimire</h3>
                </div>
            </div>
            <div className="ProfileHolder">
                <div className="president box">
                    <ProfileContainer name="Sulav" position="President" />
                </div>
                <div className="executive box">
                    <ProfileContainer name="Smritee" position="Vice President" />
                    <ProfileContainer name="Anish" position="Vice President" />
                    <ProfileContainer name="Arjav" position="Secretary" />
                    <ProfileContainer name="Shreyan" position="Treasurer" />
                </div>
                <div className="members box">
                    {members.map(member =>  <MemberContainer name={member} />)}
                 

                </div>

            </div>

        </div>
    )
}

export default Team;