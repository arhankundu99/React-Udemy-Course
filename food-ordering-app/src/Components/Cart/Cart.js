import { useContext, useState } from "react";
import useHttp from "../../hooks/use-http";
import { CartContext } from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [orderButtonIsTouched, setOrderButtonIsTouched] = useState(false);

  const { requestError: httpRequestError, sendRequest } = useHttp();

  const cartCtx = useContext(CartContext);

  const hideCartHandler = () => props.onHideCart();

  const addHandler = (item) => {
    setOrderButtonIsTouched(false);
    cartCtx.addItem(item);
  };

  const removeHandler = (id) => {
    setOrderButtonIsTouched(false);
    cartCtx.removeItem(id);
  };

  const emailChangeHandler = (event) => {
    setOrderButtonIsTouched(false);
    setEmailIsTouched(true);
    setEmail(event.target.value);

    if (!event.target.value.includes("@")) setEmailIsValid(false);
    else setEmailIsValid(true);
  };

  const postUserOrders = () => {
    const userOrders = cartCtx.items.map((item) => {
      return {
        id: item.id,
        mame: item.name,
        price: item.price,
        quantity: item.quantity,
      };
    });

    const userDetails = {
      emailID: email,
      userOrders,
      totalAmount: cartCtx.totalAmount.toFixed(2),
    };
    const requestConfig = {
      url: "https://react-http-74835-default-rtdb.firebaseio.com/customerOrders.json",
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    sendRequest(requestConfig);
  };
  const orderHandler = () => {
    setOrderButtonIsTouched(true);
    if (emailIsValid) postUserOrders();
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      onAdd={addHandler}
      onRemove={removeHandler}
    />
  ));

  let totalAmount = cartCtx.totalAmount;

  let emailInputIsValid = !emailIsTouched
    ? true
    : emailIsTouched && emailIsValid
    ? true
    : false;

  return (
    <Modal onHideCart={hideCartHandler}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div>
        <label htmlFor="emailID">Email: </label>
        <input
          id="emailID"
          type="email"
          onChange={emailChangeHandler}
          value={email}
        />
        {(!emailInputIsValid || (orderButtonIsTouched && !emailIsValid)) && (
          <p>Email is invalid</p>
        )}
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {cartCtx.items.length !== 0 && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
        {httpRequestError && <p>Unable to place order</p>}
        {orderButtonIsTouched && !httpRequestError && emailIsValid && (
          <p>Order placed Successfully</p>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
