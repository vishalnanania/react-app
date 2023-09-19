import classes from './Input.module.css';

export function Input(props) {
    return (
        <div className={classes.input}>
            <label htmlfor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    )
}