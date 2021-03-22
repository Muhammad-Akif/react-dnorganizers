// import React from 'react'
import videoSource from '../img-ved/video.mp4' 

import React from 'react';

const BackgroundVideo = () => {
    return (
        <div className="Container" >
            <video autoPlay="autoplay" loop="loop" muted className="Video" >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="Content">
                <div className="SubContent" >
                    <h1>WE DESIGN YOUR DREAMS</h1>
                    <p style={{fontSize: "20px"}}>A premier wedding planner and event coordination company in Pakistan and abroad, Shan event management is your one stop shop for wedding and corporate events.</p>
                    <button type="button" className="btn btn-outline-dark">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo;

