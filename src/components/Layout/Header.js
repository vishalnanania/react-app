import React from 'react';
import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartBtn from './HeaderCartBtn';

function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartBtn onClick={props.onToggleCartHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="food table"></img>
            </div>
        </React.Fragment>
    );
}
export default Header;