import React from 'react';
import Radium from 'radium';

import styles from './Logo.css';
import logo from '../../third-attempt-logo.svg';

const getStyles = _ => ({
    logoText: {
        fontSize: "150px",
        color: "#1f4f7b"
    }
});

const Logo = props => {
    const styles = getStyles();
    const fontSize = props['logo-text-font-size'];
    styles.logoText.fontSize = fontSize;
    // console.log(styles.logoText);
    // console.log(width+ ' ' + height + ' '+ logoTextFontSize);
    // console.log(props['logo-text-font-size']);

    return (
        // <span className={styles.logoText}>j<img src={logo} alt="Joole's Logo" width={props.width} height={props.height} />le</span>
        <span style={styles.logoText}>j<img src={logo} alt="Joole's Logo" width={props.width} height={props.height} />le</span>
    );
}

export default Logo;