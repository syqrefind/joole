import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import styles from './LoginForm.css';
// import Input from '../../components/UI/Input/Input';
// import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

class LoginForm extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }
        },
        isSignedUp: true
    }

    componentDidMount() {
        
    }

    checkValidity (value, rules) {
        let isValid = true;
        if (!rules){
            return true;
        }
        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;

    }

    // Form validation
    inputChangedHandler = (event, controlName) => {
        console.log('inputChangedHandler triggered');
        // console.log(...this.state.controls); // Cannot Run

        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        console.log(updatedControls);
        console.log(this.state);
        this.setState({controls: updatedControls});    
    }

    // Prevent event from happening
    submitHandler = (event) => {
        console.log('submitHandler triggered');
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignedUp);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignedUp: !prevState.isSignedUp};
        });
    }

    render() {
        const formElementsArray = [];   // 'email' and 'password'
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form;
        // let form = formElementsArray.map(formElement => (
            
        // ))

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <>
                {authRedirect}
                {errorMessage}

                <form onSubmit={this.submitHandler}>
                    <span className={[styles.username, styles.inputSpans].join(' ')}>
                    <input className={[styles.usernameInput, styles.inputs].join(' ')}
                    
                    key={formElementsArray[0].id}
                    elementType={formElementsArray[0].config.elementType}
                    elementConfig={formElementsArray[0].config.elementConfig}
                    value={formElementsArray[0].config.value}
                    invalid={!formElementsArray[0].config.valid}
                    shouldValidate={formElementsArray[0].config.validation}
                    touched={formElementsArray[0].config.touched}
                    // changed={( event ) => this.inputChangedHandler( event, formElementsArray[0].id )}
                    onChange={( event ) => this.inputChangedHandler( event, formElementsArray[0].id )}
                    
                    type='text' required placeholder='Username or Email' />
                    </span><br />
                    <span className={[styles.password, styles.inputSpans].join(' ')}>
                    <input className={[styles.inputs, styles.passwordInput].join(' ')}
                    type='text' required placeholder='Password' />
                    </span><br />
                    <button type='submit' className={styles.logIn}>Log In</button>
                </form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
});

const mapDispatchToProps = dispatch => ({
    onAuth: (email, password, isSignedUp) => dispatch(actions.auth(email, password, isSignedUp)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);