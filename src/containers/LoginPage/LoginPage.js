import React, { Component } from 'react';
import { Route, Router, NavLink, Switch, Redirect} from 'react-router-dom';

import styles from './LoginPage.css';
// import './LoginPage.module.css';
// import logo from './../../third-attempt-logo.svg';
import LoginForm from '../LoginForm/LoginForm';
import SearchBar from '../SearchBar/SearchBar';
import Logo from './../../components/Logo/Logo';

class LoginPage extends Component {

    render() {
        return (
            <div className={styles.globalContainer}>
                {!this.props.isAuthed? <div className={styles.signUp}><a href='./' className={styles.nonDecor}>Sign up</a></div>: null}
                <div className={styles.loginDiv}>
                    <Logo width='138' height='120' logo-text-font-size='150px' />
                    <br />
                    <span
                        className={styles.description}
                    >Building Product Selection Platform</span><br />
                    <Switch>
                        <Route path='/search' component={SearchBar} />
                        <Route path='/login' component={LoginForm} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default LoginPage;