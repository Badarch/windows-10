import React, { useEffect, useState } from "react";
import './Lockscreen.css';
import Moment from "react-moment";

const Lockscreen = () => {

    return (
        <div className="lockscreen-container">
            <div className="lockscreen-time-container">
                <div className="lockscreen-time ls-hours">
                    <Moment
                        interval={10000}
                        format="hh:mm"
                    />
                </div>
                <div className="lockscreen-time ls-months">
                    <Moment
                        interval={10000}
                        format="dddd, MMMM DD"
                    />
                </div>
            </div>
        </div>
    )
}

export default Lockscreen