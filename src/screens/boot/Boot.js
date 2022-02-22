import React from "react";
import logo from '../../assets/images/windows_logo.png'
import './Boot.css';

const Boot = () => {
    return (
        <div id="boot-container">
            <div className='loader'>
                <div className="bg"></div>
                <img
                    src={logo}
                    width={150}
                    height={150}
                    className='logo'
                />
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
        </div>
    )
}

export default Boot