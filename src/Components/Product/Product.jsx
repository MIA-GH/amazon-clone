import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from "../../Provider/StateProvider";

function Product({ id, title, image, price, rating }) {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p className="product__ratingIcon">
                                <StarIcon />
                            </p>
                        ))
                    }
                </div>
            </div>
            <img className="product__image" src={image} alt="product" />
            <button className="add__productToBasket" onClick={addToCart}>
                Add to Basket
            </button>
        </div>
    );
}

export default Product;