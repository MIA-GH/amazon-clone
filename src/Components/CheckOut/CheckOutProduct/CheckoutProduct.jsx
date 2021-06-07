import StarIcon from "@material-ui/icons/Star";
import React from 'react';
import { useStateValue } from "../../../Provider/StateProvider";
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {

    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="item" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p className="product__ratingIcon">
                                <StarIcon />
                            </p>
                        ))
                    }
                </div>
                {
                    !hideButton &&
                    (
                        <button className="removeProductFromBasket" onClick={removeFromCart}>
                            Remove from Basket
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default CheckoutProduct;