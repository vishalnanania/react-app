import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);
  const toggleCartHandler = () => {
    setCartIsShown(cur => !cur);
  };


  return (
    <React.Fragment>
      {cartIsShown && <Cart onToggleCartHandler={toggleCartHandler} />}
      <Header onToggleCartHandler={toggleCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
