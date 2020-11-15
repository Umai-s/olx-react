import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Subheader extends Component {
    render() {
        return (
            <div className="hnav fixed flex aic">
                <button className="view-cates flex aic color">
                    <h2 className='s18 fontb'>All Categories</h2>
                    <button className='arrow'>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </button>
                <Link to='/MobilePhones' className="submenu noul color font s15 bl" >Mobile Phones</Link>
                <Link to='/Cars' className="submenu noul color font s15 bl" >Cars</Link>
                <Link to='/Motorcycles' className="submenu noul color font s15 bl" >Motorcycles</Link>
                <Link to='/Houses' className="submenu noul color font s15 bl" >Houses</Link>
                <Link to='/TV-Video-Audio' className="submenu noul color font s15 bl" >TV-Video-Audio </Link>
                <Link to='/Tablets' className="submenu noul color font s15 bl" >Tablets</Link>
                <Link to='/LandsAndPlots' className="submenu noul color font s15 bl" >Lands & Plots</Link>
            </div>
        );
    }
}

export default Subheader;