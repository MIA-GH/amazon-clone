import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../Provider/StateProvider';
import CheckoutProduct from '../CheckOut/CheckOutProduct/CheckoutProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../Provider/reducer';
import axios from '../../Config/axios';
import './Payment.css';
import { database } from '../../Config/FireBase';

function Payment() {
    const [{ user, basket }, dispatch] = useStateValue();
    const browserHistory = useHistory();

    // state 
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    // stripe hooks
    const stripe = useStripe();
    const elements = useElements();

    // stripe payment submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        // eslint-disable-next-line no-unused-vars
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // payment intent === payment confirmation

            database
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET",
            });

            browserHistory.replace('/orders-page');
        });
    }

    const handleChange = (event) => {
        event.preventDefault();
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    useEffect(() => {
        // generate special stripe secrete to charge customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects total in a currency sub units 
                url: `./payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        // function call
        getClientSecret();
    }, [basket]);

    return (
        <>
            <div className="payment">
                <div className="payment__container">
                    <h1>
                        Checkout <Link to='/checkout'>{basket?.length} items</Link>
                    </h1>
                    {/* payment section */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>123 React Lane</p>
                            <p>Los Angeles CA</p>
                        </div>
                    </div>

                    {/* payment section */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review Items and Delivery</h3>
                        </div>
                        <div className="payment__items">
                            {
                                basket.map(
                                    (item, index) => (
                                        <CheckoutProduct
                                            key={index}
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                        />
                                    )
                                )
                            }
                        </div>
                    </div>

                    {/* payment section */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment Method</h3>
                        </div>
                        {/* Stripe Magic */}
                        <div className="payment__details">
                            <form action="" onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                                <h3>Order Total: {value} </h3>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeperator={true}
                                        prefix={"$"}
                                    />
                                    <button
                                        disabled={disabled || processing || succeeded}
                                    >
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;
