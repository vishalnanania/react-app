import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
    ].map(item => <li>{item.name}</li>);
    return (
        <Modal onClose={props.onToggleCartHandler}>
            {cartItems}
            <div className={classes.total}>
                <span>
                    Total Amount
                </span>
                <span>
                    35.45
                </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onToggleCartHandler}>
                    Close
                </button>
                <button className={classes.button}>
                    Order
                </button>
            </div>
        </Modal>
    );
};

export default Cart;