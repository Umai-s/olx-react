import React, { Component } from 'react';
import ProductsContextProvider from '../Global/ProductsContext'
import Products from './Products';

class Mobilephones extends Component {
    render() {
        return (
            <div className='container'>
                <img className='top-img aic my-4 pl-5 py-3' src={require("../images/ad2.PNG")} alt='olx logo' />
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