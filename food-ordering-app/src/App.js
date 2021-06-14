import './App.css';
import { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './store/cart-context';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <CartContextProvider>
      <Header onShowCart = {showCartHandler}/>
      {cartIsShown && <Cart onHideCart = {hideCartHandler}/>}
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
