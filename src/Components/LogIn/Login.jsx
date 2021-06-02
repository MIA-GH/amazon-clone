import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LogoAlt } from '../../assets/AssetExport';
import { authentication } from '../../Config/FireBase';
import './Login.css';

const initialValues = {
    userName: '',
    userEmail: '',
    userPassword: '',
}

function LogIn() {

    // state
    const [values, setValues] = useState(initialValues);
    const [login, setLogIn] = useState(false);

    // browser history
    const browserHistory = useHistory();

    // on password change
    const onUserInputChanged = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setValues({ [name]: value });
    }

    /* Switch between the log in and register screen */
    const handleSwitch = (event) => {
        // prevent refreshing of the page
        event.preventDefault();
        setLogIn(!login);
    }

    // handle log in
    const handleLogIn = async () => {
        await authentication
            .signInWithEmailAndPassword(values.userEmail, values.userPassword)
            .then((auth) => {
                if (auth) {
                    browserHistory.push('/');
                }
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    // handle sign up
    const handleSignUp = async () => {
        await authentication
            .createUserWithEmailAndPassword(values.userEmail, values.userPassword)
            .then((auth) => {
                if (auth) {
                    browserHistory.push('/');
                }
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    // decide on which authentication function to call
    const handleAuthentication = (event) => {
        event.preventDefault();
        if (!login) {
            handleLogIn();
        } else {
            handleSignUp();
        }
    }


    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src={LogoAlt} alt="brand identity" />
            </Link>
            <div className="login__container">
                <h1 className="form__title">{!login ? "Sign In" : "Sign Out"}</h1>
                <form action="">
                    {
                        !login ?
                            <div></div> :
                            <div>
                                <label className="input__title" htmlFor="name">Name</label>
                                <input
                                    className="user__name"
                                    name="userName"
                                    type="text"
                                    value={values.userName}
                                    onChange={onUserInputChanged}
                                />
                            </div>
                    }

                    <label className="input__title" htmlFor="email">email</label>
                    <input
                        className="email__address"
                        name="userEmail"
                        type="text"
                        value={values.userEmail}
                        onChange={onUserInputChanged}
                    />

                    <label className="input__title" htmlFor="password">Password</label>
                    <input
                        className="password"
                        name="userPassword"
                        type="password"
                        value={values.userPassword}
                        onChange={onUserInputChanged}
                    />
                    <button
                        className="login__button"
                        type="submit"
                        onClick={handleAuthentication}
                    >
                        <span>{!login ? "Log In" : "Register"}</span>
                    </button>
                </form>
                <div className="other__info__container">
                    <p className="terms__info">
                        By signing in you agree to all terms and conditions of this services
                    </p>
                    <button
                        className="register__button"
                        type="submit"
                        onClick={handleSwitch}
                    >
                        <span>{!login ? "Create Account" : "Log In"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
