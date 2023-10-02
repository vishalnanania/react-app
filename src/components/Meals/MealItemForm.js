import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

export function MealItemform(props) {
    const amountInputRef = React.useRef();
    const [amountIsValid, setAmountIsValid] = React.useState(true);

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount"
                ref={amountInputRef}
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>
                + Add
            </button>
            {!amountIsValid && <p>Add Valid Amount</p>}
        </form>
    )
}