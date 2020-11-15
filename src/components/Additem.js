import React, { useState } from 'react';
import image1 from '../images/image1.webp';


function Additem(props) {
    if ("placeholder" in props) {
        return (
            <div className="add-item">
                <div className="poster anim placeholder" >
                {/* <img src={image1}></img> */}
                </div>
                <div className="title  anim placeholder"></div>
                <div className="tagline  anim placeholder"></div>
                <div className="footer  anim flex">
                    <div className="location  anim placeholder"></div>
                    <div className="stamp  anim placeholder"></div>
                </div>

            </div>
        );
    }

    return(
        <div className="add-item">
            <img src={image1}></img>
        </div>
    )
}

export default Additem;
