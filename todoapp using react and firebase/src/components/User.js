import React from "react";
import logo from '../images/logo.jpg'

function User(){
    return (
        <div className='User'>
           <div className="logo">
                <img src={logo} alt='logo'></img>
           </div>
           <div className='info'>
                <p>My Todo</p>
                <a href='#'>Logout</a>
           </div>
        </div>
    )
}

export default User