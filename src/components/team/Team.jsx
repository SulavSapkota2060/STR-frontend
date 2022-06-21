import React from 'react'
import './Team.css'
import ProfileContainer from '../ProfileContainer/ProfileContainer'


const Team = () => {
    const members = [
        {
            "name": "Sulav",
            "position": "President"
        }, {
            "name": "Anish",
            "position": "Vice President"
        }, {
            "name": "Smritee",
            "position": "Vice President"
        }, {
            "name": "Hemanta",
            "position": "Member"
        }, {
            "name": "Raymod",
            "position": "Member"
        },
    ]
    return (
        <div className='container'>
            <h1>
                Our Team
            </h1>

            <div className="coordinators">
                <div className="coordinator">
                    <img src="https://pbs.twimg.com/media/E2K8BVYVUAExUiE?format=jpg&name=360x360" alt="" />
                    <h3>Mr. Hari Ram Tiwari </h3>
                </div>
                <div className="coordinator">
                    <img src="https://pbs.twimg.com/media/E2K8BVYVUAExUiE?format=jpg&name=360x360" alt="" />
                    <h3>Mr. Toya Ghimire</h3>
                </div>
            </div>
            <div className="ProfileHolder">
                <div className="president box">
                    <ProfileContainer name="Sulav" position="President" />
                </div>
                <div className="executive box">
                    <ProfileContainer name="Sulav" position="President" />
                    <ProfileContainer name="Sulav" position="President" />
                    <ProfileContainer name="Sulav" position="President" />
                    <ProfileContainer name="Sulav" position="President" />
                </div>
                <div className="members box">
                    <ProfileContainer name="Sulav" position="President" showImage="false" />
                    <ProfileContainer name="Sulav" position="President" showImage="false" />

                    <ProfileContainer name="Sulav" position="President" showImage="false" />
                    <ProfileContainer name="Sulav" position="President" showImage="false" />
                    <ProfileContainer name="Sulav" position="President" showImage="false" />

                    <ProfileContainer name="Sulav" position="President" showImage="false" />
                    <ProfileContainer name="Sulav" position="President" showImage="false" />

                </div>

            </div>

        </div>
    )
}

export default Team;