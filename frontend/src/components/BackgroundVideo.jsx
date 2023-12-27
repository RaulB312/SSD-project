import React from 'react';
import video from '../assets/firefly.mp4';

function BackgroundVideo() {
    return (
        <div className="bgContainer">
            <div className="overlay">
                <video src={video} autoPlay loop muted />
            </div>
        </div>
    );
}

export default BackgroundVideo;
