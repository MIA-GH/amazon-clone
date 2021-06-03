import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LogoAlt } from '../../assets/AssetExport';
import { authentication } from '../../Config/FireBase';
import './Login.css';


function LogIn() {
    // state
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [login, setLogIn] = useState(false);

    // browser history
    const browserHistory = useHistory();

    // clear errors
    const clearErrors = () => {
        setErrorMessage("")
    };

    // clear input fields
    const clearInputs = () => {
        setUserName("");
        setUserEmail("");
        setUserPassword("");
    }

    // on User Name change
    const onUserNameInputChanged = (event) => {
        event.preventDefault();
        clearErrors();
        setUserName(event.target.value);
    }

    // on Email change
    const onUserEmailInputChanged = (event) => {
        event.preventDefault();
        clearErrors();
        setUserEmail(event.target.value);
    }


    // on password change
    const onUserPasswordInputChanged = (event) => {
        event.preventDefault();
        clearErrors();
        setUserPassword(event.target.value);
    }

    /* Switch between the log in and register screen */
    const handleSwitch = (event) => {
        // prevent refreshing of the page
        event.preventDefault();
        clearErrors();
        clearInputs();
        setLogIn(!login);
    }

    // handle log in
    const handleLogIn = async () => {
        clearErrors();
        await authentication
            .signInWithEmailAndPassword(userEmail, userPassword)
            .then((auth) => {
                if (auth) {
                    browserHistory.push('/');
                }
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/invalid-email":
                        setErrorMessage("Invalid Email");
                        break;
                    case "auth/user-disabled":
                        setErrorMessage("Account has been disabled");
                        break;
                    case "auth/user-not-found":
                        setErrorMessage("User not found");
                        break;
                    case "auth/wrong-password":
                        setErrorMessage("Invalid password");
                        break;
                    default:
                        setErrorMessage("A network error occured");
                        break;
                }
            })
    }

    // handle sign up
    const handleSignUp = async () => {
        clearErrors();
        await authentication
            .createUserWithEmailAndPassword(userEmail, userPassword)
            .then((auth) => {
                if (auth) {
                    browserHistory.push('/');
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
                switch (error.code) {
                    case "auth/invalid-email":
                        setErrorMessage("Invalid Email");
                        break;
                    case "auth/email-already-in-use":
                        setErrorMessage("Email in use by another account");
                        break;
                    case "auth/weak-password":
                        setErrorMessage("Password must be at least 8 characters");
                        break;
                    default:
                        setErrorMessage("A network error occured");
                        break;
                }
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
                                    value={userName}
                                    onChange={onUserNameInputChanged}
                                />
                            </div>
                    }

                    <label className="input__title" htmlFor="email">email</label>
                    <input
                        className="email__address"
                        name="userEmail"
                        type="text"
                        value={userEmail}
                        onChange={onUserEmailInputChanged}
                    />

                    <label className="input__title" htmlFor="password">Password</label>
                    <input
                        className="password"
                        name="userPassword"
                        type="password"
                        value={userPassword}
                        onChange={onUserPasswordInputChanged}
                    />
                    <p className="error__message">{errorMessage}</p>
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
