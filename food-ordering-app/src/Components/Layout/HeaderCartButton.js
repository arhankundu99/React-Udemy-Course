import classes from './HeaderCartButton.module.css';
import {Fragment, useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import {CartContext} from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((previousValue, item) => {
        return previousValue + item.quantity;
    }, 0);

    const btnClass = `${classes.button} ${buttonIsHighlighted? classes.bump: ''}`;

    useEffect(() => {
        if(items.length === 0)return;
        setButtonIsHighlighted(true);
        const timerID = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 250);
        return () => {
            clearTimeout(timerID);
        }
    }, [items]);

    return (
        <Fragment>
            <button type = "button" className = {btnClass} onClick = {props.onShowCart}>
                <span className = {classes.icon}>
                    <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className = {classes.badge}>{numberOfCartItems}</span>    
            </button>
        </Fragment>
    )
}
export default HeaderCartButton;