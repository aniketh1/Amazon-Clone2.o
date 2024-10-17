import React, { useEffect, useState } from 'react';
import "./Orders.css";
import { collection, doc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user?.uid) {
            const userOrdersRef = collection(doc(db, 'users', user.uid), 'orders');
            const q = query(userOrdersRef, orderBy('created', 'desc'));

            const unsubscribe = onSnapshot(q, (snapshot) => {
                setOrders(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                })));
            });

            return () => unsubscribe();
        }
    }, [user?.uid]);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className='order__order'>
                {orders?.map((order) => (
                    <Order key={order.id} order={order} />  
                    // {/* Pass individual order and add key */}
                ))}
            </div>
        </div>
    );
}

export default Orders;
