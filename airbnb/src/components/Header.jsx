import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Link to="/">
            <img 
            className={styles.headerIcon} 
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="Airbnb logo"/>
        </Link>

    )
};

export default Header;