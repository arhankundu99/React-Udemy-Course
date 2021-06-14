import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const hideCartHandler = () => props.onHideCart();
    
    const addHandler = (item) => {
        cartCtx.addItem(item);
    }
    const removeHandler = (id) => {
        cartCtx.removeItem(id)
    }
    


    const cartItems = cartCtx.items.map((item) => <CartItem key = {item.id} id = {item.id} name = {item.name} price = {item.price} quantity = {item.quantity} onAdd = {addHandler} onRemove = {removeHandler}/>);

    let totalAmount = cartCtx.totalAmount;

    return (
        <Modal onHideCart = {hideCartHandler}>
            <ul className = {classes['cart-items']}>
                {cartItems}
            </ul>
            <div className = {classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount.toFixed(2)}</span>
            </div>
            <div className = {classes.actions}>
                <button className = {classes['button--alt']} onClick = {props.onHideCart}>Close</button>
                {cartCtx.items.length !== 0 && <button className = {classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;