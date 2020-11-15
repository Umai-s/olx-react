import React, { Component } from 'react';
import ProductsContextProvider from '../Global/ProductsContext'
import Products from './Products';

class Mobilephones extends Component {
    render() {
        return (
            <div className='container'>
                <img className='top-img aic ml-5 pr-5 my-4' src={require("../images/ad8.PNG")} alt='olx logo' />
                <ProductsContextProvider>
                    <div className="container">
                        <Products />
                    </div>
                </ProductsContextProvider>
                <button className="fontb load-more c333 anim s16">Load More</button>
            </div>
        );
    }
}

export default Mobilephones;