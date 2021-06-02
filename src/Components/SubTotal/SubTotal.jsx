import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "../../Provider/reducer";
import { useStateValue } from "../../Provider/StateProvider";

function SubTotal() {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subTotal">
            {/* total price goes here */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subTotal__gift">
                            <input className="subTotalGift__input" type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />

            <button className="proceedToCheckOut">
                Proceed to checkout
            </button>
        </div>
    );
}

export default SubTotal;