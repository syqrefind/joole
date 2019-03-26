import React from 'react';

import styles from './Logo.css';
import logo from '../../third-attempt-logo.svg';

const Logo = props => {
    return (
        <span className={styles.logoText}>j<img src={logo} alt="Joole's Logo" width={props.width} height={props.height} />le</span>
    );
}

export default Logo;