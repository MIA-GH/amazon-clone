import React, { useEffect, useState } from 'react';
import { database } from '../../Config/FireBase';
import { useStateValue } from '../../Provider/StateProvider';
import Order from './Order/Order';
import './Orders.css';

function Orders() {

    // eslint-disable-next-line no-unused-vars
    const [{ bakset, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            database
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(
                        snapshot.docs.map(
                            doc => ({
                                id: doc.ic,
                                data: doc.data(),
                            })
                        )
                    )
                })
        } else {
            setOrders([]);
        }
    }, [user]);
    return (
        <div className="orders__container">
            <div className="orders">
                <h1>Your Orders</h1>
                <div className="orders__order">
                    {
                        orders?.map((order, index) => {
                            return (
                                <Order
                                    key={index}
                                    order={order}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Orders;
