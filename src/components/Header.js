import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Subheader from './Subheader';

class Header extends Component {

    render() {
       return (
            <React.Fragment>
                <div className="header fixed flex">
                    <div className="logo">
                        <Link to='/'><img src={require("../images/olxlogo.png")}  alt='olx logo' /></Link>
                    </div>
                    <div className='location rel flex aic'>
                        <div className='ico s24'>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg>
                        </div>
                        <input className='label s15 font' placeholder="Your Location" value="Pakistan" />
                        <button className='arrow'>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <div className='search flex aic' >
                        <input className='query font s15' type='text' placeholder='Find Cars, Mobile Phones and more...' />
                        <button className='go s24 cfff'>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="actions flex aic">
                        <Link to="/" className='login color fontb s16 noul noulh'>Login</Link>

                        <button className="sell flex aic">
                            <div className="ico">
                                <svg width="1.5em" height="2em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </div>
                            <h2 className='color s18 fontb '>Sell</h2>
                        </button>
                    </div>
                </div>

                <div className="hnav fixed flex aic">
                    <Subheader/>
                </div>

                <div className='hcir'>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;