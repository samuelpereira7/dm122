import React, {createContext, useState, useContext} from 'react';

//[items:items, setItems]
const CartContext = createContext([{items: []}, () => {}]);

const CartProvider = ({ children }) => {
    const [items, setItems] = useState({items: []});

    return (
        <CartContext.Provider value={[items, setItems]}>
            { children }
        </CartContext.Provider>
    )
}

function useCartContext(){
    const context = useContext(CartContext);

    return context;
}

export {CartProvider, useCartContext}