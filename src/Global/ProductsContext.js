import React, { createContext, useState } from 'react';
import Products from '../components/Products'

import image1 from '../images/image1.webp'
import image2 from '../images/image2.webp'
import image3 from '../images/image3.webp'
import image4 from '../images/image4.webp'
import image5 from '../images/image5.webp'
import image6 from '../images/image6.webp'
import image7 from '../images/image7.webp'
import image8 from '../images/image8.webp'


export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        { id:1, name:'Honda civic car', price:'Rs. 400,000', image:image1, status:'Featured' },
        { id:2, name:'Yamaha Digital Piano YDP-S34 ', price:'Rs. 169,900', image:image2, status:'Featured' },
        { id:3, name:'Matilda 41 inch acoustic finish', price:'Rs. 11,500', image:image3, status:'Featured' },
        { id:4, name:'Honda city model 2017', price:'Rs. 280,000', image:image4, status:'Featured' },
        { id:5, name:'Galaxy s10 plus 512gb ', price:'Rs. 77,000', image:image5, status:'Featured' },
        { id:6, name:'LED TV 32 42 50 Inch ', price:'Rs. 15,499', image:image6, status:'Featured' },
        { id:7, name:'Fairy lights 10 piece', price:'Rs. 999', image:image7, status:'Featured' },
        { id:8, name:'Samsung Galaxy A31', price:'Rs. 34,000', image:image8, status:'Featured' }
    ]);

    return (
        <ProductsContext.Provider value={{ products: [...products] }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;