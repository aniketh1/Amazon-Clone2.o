import React, { useState, useEffect } from "react";
import "./Checkout.css"
import BasketItem from "./BasketItem"
import Subtotal from "./Subtotal"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move"

function Checkout(){
    const [{basket,user},dispatch] = useStateValue();
    const [username,setUsername] = useState();
    useEffect(() => {
        if (user && user.email) {
          const extractedUsername = user.email.split('@')[0]; // Extract username from email
          setUsername(extractedUsername);
        } else {
          setUsername(''); // Reset if user is not logged in
        }
      }, [user]);
    return(

        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle-content-smeghn/2024/KBD0917/KBHP_1500x300_EN.jpg"/>
                <div>
                    <h3>Hello, {username ? username : "Guest"}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {/* <FlipMove className="flip-wrapper"> */}
  {basket.length === 0 ? (
    <p>Your basket is empty</p>
  ) : (
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
{/* </FlipMove> */}


                </div>
            </div>
            <div className="checkout__right">

                <Subtotal/>
            </div>
        </div>
    )
}
export default Checkout;