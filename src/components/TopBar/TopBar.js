import React from 'react';

import styles from './TopBar.css';

import Logo from '../Logo/Logo';
import SearchBar from '../../containers/SearchBar/SearchBar';
import UserImage from '../UserImage/UserImage';

const TopBar = props => {
    return (
        <div className={styles.container}>
            <Logo />
            <SearchBar />
            <a className={styles.nonDecor} href="/abc">Projects</a>
            <UserImage />
        </div>
    );
}

export default TopBar;