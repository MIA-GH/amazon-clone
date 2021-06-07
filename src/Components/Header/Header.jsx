import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Logo } from "../../assets/AssetExport";
import { useStateValue } from "../../Provider/StateProvider";
import { authentication } from '../../Config/FireBase';

function Header() {
    // eslint-disable-next-line no-unused-vars
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            authentication.signOut();
        }
    }

    return (
        <>
            <div className="header__container">
                <nav className="header">
                    <Link to='/'>
                        <img className="header__logo" src={Logo} alt="logo" />
                    </Link>
                    <div className="header__search">
                        <input type="text" className="header__searchInput" />
                        <SearchIcon className="header__searchIcon" />
                    </div>
                    <div className="header__nav">

                        {/* this is one of the links on the navigation bar */}
                        <Link to={!user && '/login'} className="header__link">
                            <div className="header__option" onClick={handleAuthentication}>
                                <span className="header__optionLineOne">
                                    Hey {!user ? "Guest" : user?.email}
                                </span>
                                <span className="header__optionLineTwo">
                                    {user ? "Sign Out" : "Sign In"}
                                </span>
                            </div>
                        </Link>

                        {/* this is one of the links on the navigation bar */}
                        <Link className="header__link" to="/orders-page">
                            <div className="header__option">
                                <span className="header__optionLineOne">Returns</span>
                                <span className="header__optionLineTwo">& Orders</span>
                            </div>
                        </Link>

                        {/* this is one of the links on the navigation bar */}
                        <Link className="header__link" to="/">
                            <div className="header__option">
                                <span className="header__optionLineOne">Your</span>
                                <span className="header__optionLineTwo">Prime</span>
                            </div>
                        </Link>

                        {/* this is the shopping basket icon */}
                        <Link to="/checkout" className="header__link">
                            <div className="header__optionBasket">
                                <ShoppingBasketIcon />
                                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;
