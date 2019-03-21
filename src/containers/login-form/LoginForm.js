import React, { Component } from 'react';
import './LoginForm.module.css';

class LoginForm extends Component {
    render() {
        return (
            <>
                <span id='username' className='input-spans'>
                    <input id='username-input' className='inputs'
                        type='text' required placeholder='Username or Email' />
                </span><br />
                <span id='password' className='input-spans'>
                    <input className='inputs' id='password-input'
                        type='text' required placeholder='Password' />
                </span><br />
                <button type='button' id='log-in'>Log In</button>
            </>
        );
    }
}

export default LoginForm;