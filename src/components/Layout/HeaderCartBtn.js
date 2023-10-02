import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartBtn.module.css';
import CartContext from "../../store/cart-context";

function HeaderCartBtn(props) {
    const cartCtx = React.useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
        return cur + item.amount;
    }, 0);
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
}
export default HeaderCartBtn;