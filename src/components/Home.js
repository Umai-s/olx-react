import React, { Component, useState, useEffect } from 'react';
import Additem from './Additem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductsContextProvider from '../Global/ProductsContext'
import Products from './Products';

function Home() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            let _list = [];
            for (let i = 0; i < 12; i++) {
                _list.push(<Additem placeholder={true} />)
            }
            setList(_list)
        }
    }, list)


    return (
        <React.Fragment>
            <div className='home'>
                <div className='img-div'>
                    <img className='top-img' src={require("../images/hero_bg_pk (2).jpg")} alt='olx logo' />
                </div>
                <div>
                    <img className='add' src={require("../images/add.png")} alt='olx logo' />
                </div>
                <div className="">
                    <ProductsContextProvider>
                        <div className="container">
                            <Products />
                        </div>
                        {/* {list} */}
                    </ProductsContextProvider>
                </div>
                <button className="fontb load-more c333 anim s16">Load More</button>
            </div>
            <div className='app-ribbon flex aic'>
                <div className='img '>
                    <img className='bl' src='//statics.olx.com.pk/external/base/img/phone-app.webp'></img>
                </div>
                <div className='meta'>
                    <h2 className='title fontb s30 color'>TRY THE OLX APP</h2>
                    <h2 className='slogan font s18 color'>
                        Buy, sell and find just about anything using the app on your mobile.</h2>
                </div>
                <div className='links'>
                    <h2 className='title fontb s20 color'>Get Your App Today</h2>
                    <div className='flex as'>
                        <a href='#' className='noul bl '><img src='//statics.olx.com.pk/external/base/img/appstore_2x.png'></img></a>
                        <a href='#' className='noul bl '><img src='//statics.olx.com.pk/external/base/img/playstore_2x.png'></img></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
