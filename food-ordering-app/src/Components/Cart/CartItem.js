import classes from './CartItem.module.css';

const CartItem = (props) => {

  const removeHandler = () => {
    props.onRemove(props.id);
  }
  const addHandler = () => {
    const item = {
      name: props.name,
      id: props.id,
      price: props.price,
      quantity: 1
    }
    props.onAdd(item);
  }
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeHandler}>−</button>
        <button onClick={addHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
