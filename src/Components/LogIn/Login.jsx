import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/AssetExport';
import './Login.css';

// values to handle state
const credentialValues = {
    name: "",
    email: "",
    password: "",
};

function LogIn() {

    // state
    const [values, setValues] = useState(credentialValues);
    const [login, setLogIn] = useState(false);

    // on password change
    const onPassowrdChange = (event) => {
        event.preventDefault();
        setValues({ password: event.target.value });
    }

    // on email change 
    const onEmailChanged = (event) => {
        event.preventDefault();
        setValues({ email: event.target.value });
    }

    // on user name field change
    const onUserNameChanged = (event) => {
        event.preventDefault();
        setValues({ name: event.target.value });
    }

    /* Switch between the log in and register screen */
    const handleSwitch = (event) => {
        event.preventDefault(); // prevent refreshing of the page
        setLogIn(!login);
    }

    // handle log in
    const handleLogIn = async (event) => {
        event.preventDefault(); // prevent refreshing of the page
    }

    // handle sign up
    const handleSignUp = async (event) => {
        event.preventDefault(); // prevent refreshing of the page
    }

    // decide on which authentication function to call
    const handleAuthentication = (event) => {
        event.preventDefault();
        if (!login) {
            handleSignUp();
        } else {
            handleLogIn();
        }
    }


    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src={Logo} alt="brand identity" />
            </Link>
            <div className="login__container">
                {
                    !login ?
                        <h1 className="form__title">Sign In</h1> :
                        <h1 className="form__title">Sign Up</h1>
                }
                <form action="">
                    {
                        !login ?
                            <div></div> :
                            <div>
                                <label className="input__title" htmlFor="name">Name</label>
                                <input
                                    className="user__name"
                                    name="name"
                                    type="text"
                                    value={values.name}
                                    onChange={onUserNameChanged}
                                />
                            </div>
                    }

                    <label className="input__title" htmlFor="email">email</label>
                    <input
                        className="email__address"
                        name="email"
                        type="text"
                        value={values.email}
                        onChange={onEmailChanged}
                    />

                    <label className="input__title" htmlFor="password">Password</label>
                    <input
                        className="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={onPassowrdChange}
                    />
                    <button
                        className="login__button"
                        type="submit"
                        onClick={handleAuthentication}
                    >
                        {
                            !login ?
                                <span>Log In</span> : <span>Register</span>
                        }
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
                        {
                            !login ?
                                <span>Create Account</span> :
                                <span>Log In</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
