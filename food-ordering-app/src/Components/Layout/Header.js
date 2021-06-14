import {Fragment} from 'react';
import classes from './Header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {

    const showCartHandler = () => props.onShowCart();

    return (
        <Fragment>
            <header className = {classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onShowCart = {showCartHandler}>Cart</HeaderCartButton>
            </header>
            <div className = {classes['main-image']}>
                <img src = {mealImage} alt = "Delicious Food"/>
            </div>
        </Fragment>
    )
}
export default Header;