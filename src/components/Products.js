import React, { Component, useContext } from 'react';
import { ProductsContext } from '../Global/ProductsContext'
import { Link } from "react-router-dom";




const Products = () => {

    // item_info=(product)=>{
    //     console.log("this prod=>",product.id)
    // }

    const { products } = useContext(ProductsContext)

    // const item = () => {
    // <Router>
    //     <Header />
    // <Route path='/item' exact component={Item} />
    //     <Footer />
    // </Router>
    // }
    /* {onClick={this.item.bind(this, product)} */

    return (
        <React.Fragment>
            <br></br>
            <h1 className='font s24'>Fresh Recommendations</h1>
            <div className='products font' >
                {
                    products.map((product) => (
                        <div className='product' key={product.id}>
                            <div className='product-image'>
                                <img src={product.image} alt='not found'></img>
                            </div>
                            <div className='product-price fontb'>
                                {product.price}
                            </div>
                            <div className='product-name s14 tagline'>
                                {product.name}
                            </div>
                            {product.status === 'Featured' ? <div className='featured color s12'>FEATURED</div> : ''}
                            {/* <Link  to='/item' className="btn btn-primary" props={product}>View Details </Link>  */}
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    )
}
export default Products;