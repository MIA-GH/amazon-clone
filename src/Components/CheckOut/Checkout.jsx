import React from 'react';
import './Checkout.css';
import CheckoutProduct from "./CheckOutProduct/CheckoutProduct";
import { useStateValue } from "../../Provider/StateProvider";
import { SubTotal } from "../index";
import { ProductLarge1 } from "../../assets/AssetExport";

function CheckOut() {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src={ProductLarge1} alt="advertisement" className="checkout__ad" />
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your basket is empty</h2>
                            <p>
                                You have no items in your basket. To buy one click
                                "Add to basket" next to the item.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="checkout__title">Your shopping basket</h2>
                            {
                                basket.map(item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        <SubTotal />
                    </div>
                )
            }
        </div>
    );
}

export default CheckOut;