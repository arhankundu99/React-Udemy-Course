import React, { useReducer } from 'react';

const CartContext = React.createContext(
    {
        items: [],
        totalAmount: 0,
        addItem: (item) => {},
        removeItem: (id) => {}  
    }
);
const defaultCart = {
    items: [],
    totalAmount: 0
}

function findIdx(items, id){
    for(let i = 0; i < items.length; i++){
        if(items[i].id === id)return i;
    }
    return -1;
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        const newItem = action.item;
        let updatedItems = [];

        const idx = findIdx(state.items, newItem.id);

        if(idx !== -1){
            updatedItems = [...state.items];
            updatedItems[idx].quantity += newItem.quantity;
        }
        else updatedItems = [...state.items, newItem];

        const updatedAmount = state.totalAmount + (newItem.quantity * newItem.price);

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    else if(action.type === 'REMOVE_ITEM'){
        const id = action.id;

        const idx = findIdx(state.items, id);
        let updatedItems = [...state.items], updatedAmount = state.totalAmount;

        updatedItems[idx].quantity--;
        updatedAmount -= updatedItems[idx].price;

        if(updatedItems[idx].quantity === 0){
            updatedItems.splice(idx, 1);
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    return defaultCart;
}

const CartContextProvider = (props) => {

    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCart);

    const addItemToCartHandler = item => {
        dispatchCartState({type: "ADD_ITEM", item: item});
    };
    const removeItemFromCartHandler = id => {
        dispatchCartState({type: "REMOVE_ITEM", id: id});
    };
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler  
    };
    
    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export {CartContext};
export default CartContextProvider;