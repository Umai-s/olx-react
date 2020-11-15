import React, { createContext, useReducer } from 'react';

import { ItemReducer } from './ItemReducer'
export const CartContext = createContext();

const ItemContextProvider = (props) => {
    
    // const[]=useReducer(ItemReducer,{})
    
    return (
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}

export default ItemContextProvider;