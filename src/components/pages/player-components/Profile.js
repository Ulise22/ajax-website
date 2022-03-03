import React from "react";
import './profile.css'

const Profile = (props) => {
    return (
        <div className="container">
            <div className="profile__container">
                <div className='img__container'>
                    <img src={props.info.img} alt="player" />
                </div>
                <div className='texts'>
                    <h1 className='light'> {props.info.name} </h1>
                    <p className='light'>Posición: {props.info.position} </p>
                    <p className='light'>Dorsal: {props.info.dorsal} </p>
                    <p className='light'>Nacimiento: {props.info.bornDate} </p>
                    <p className='light'>Nacionalidad: {props.info.nacionality} </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;