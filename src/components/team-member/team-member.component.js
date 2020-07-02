import React from 'react'
import './team-member.styles.css'

const TeamMember = (props) => (
    <div className="team-member">
        <div className="img-container">
            <img src={props.img} alt=""/>
        </div>
        <div className="content-container">
            <h2>{props.name}</h2>
            <h4>{props.position}</h4>
            <p>{props.bio}</p>
        </div>
    </div>
)

export default TeamMember;