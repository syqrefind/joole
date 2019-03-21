import React, { Component } from 'react';
// import styles from './LoginPage.module.css';
import './LoginPage.module.css';
import logo from './../../third-attempt-logo.svg';
import LoginForm from '../login-form/LoginForm';
import SearchBar from '../search-bar/SearchBar';

class LoginPage extends Component {
    render() {
        return (
            // <div className={styles['global-container']}>
            <div id='global-container'>
                <div id='sign-up'><a href='./'>Sign up</a></div>
                <div id='login-div'>
                    <span className='logo-text'>j<img src={logo} alt="Joole's Logo" width='138' height='120' />le</span><br />
                    <span
                        id='description'
                    >Building Product Selection Platform</span><br />
                    <LoginForm />
                </div>
            </div>
        );
    }
}

export default LoginPage;