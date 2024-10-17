import React, { useEffect, useState } from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import {db} from "./firebase"
import { doc, collection, setDoc } from 'firebase/firestore'; // Import necessary functions from Firestore

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("")
    const [error,setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState("");
    
    useEffect(() => {
      const getClientSecret = async () => {
        try {
          const response = await axios({
            method: 'post',
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
          });
          setClientSecret(response.data.clientSecret);
          console.log("Client secret:", response.data.clientSecret);
        } catch (error) {
          console.error("Failed to fetch client secret:", error);
        }
      };
      getClientSecret();
    }, [basket]);
    
    console.log("client secrete is :",clientSecret)
    
    const handleSubmit = async (event) =>{
        //stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
            card: elements.getElement(CardElement)
          }
        }).then(async({paymentIntent}) => {
          // paymentIntent = payment confirmation
          const userDocRef = doc(db, 'users', user?.uid);
        
          // Reference to the orders collection within the user document
          const orderDocRef = doc(collection(userDocRef, 'orders'), paymentIntent.id);
          
          // Save the order details to Firestore
          await setDoc(orderDocRef, {
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created
          });

          setSucceeded(true);
          setError(null);
          setProcessing(false);
          dispatch({
            type: 'EMPTY_BASKET'
          })
          navigate('/orders')
        })

    }

    const handleChange = event =>{
        // Listen for changes in the card elements
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
  return (
    <div className='payment'>
      <div className='payment__container'>
            <h1>
              Checkout {<Link to="/checkout">{basket?.length} items</Link>}
            </h1>
            {/* Payment section - delivery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>    
                </div>    
                <div className='payment__address'>
                    <p>{user?.email}</p>   
                    <p>123 Somewhere in </p>   
                    <p>the World</p>   
                </div>    
            </div>            
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and Delivery</h3>    
                </div> 
                <div className='payment__items'>
                    {/* products */}
                     {basket.length === 0 ? (
                        <p>Your basket is empty</p>
                      ) 
                      : 
                      (
                        basket.map(item => (
                          <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                          />
                        ))
                      )}
                </div>

            </div>            
            <div className='payment__section'>
                <div className='payment__title'>
                        <h3>Payment Method</h3>    
                </div> 
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                      <CardElement onChange={handleChange}/>
                    <div className='payment__priceContainer'>
                          <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <h3>Order Total : {value}</h3>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                          />
                          <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : 
                            "Buy Now"}</span>
                          </button>
                    </div>
                    {error && <div>{error}</div>}
                      
                    </form>
                    
                  {/* Stripe magic */}
                </div>
            </div>            
            {/* Payment section - review items */}
            {/* Payment section - payment method */}
      </div>
    </div>
  )
}

export default Payment
