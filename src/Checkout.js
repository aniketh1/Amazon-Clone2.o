import React from "react";
import "./Checkout.css"
import BasketItem from "./BasketItem"
import Subtotal from "./Subtotal"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout(){
    const [{basket},dispatch] = useStateValue();
    return(

        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle-content-smeghn/2024/KBD0917/KBHP_1500x300_EN.jpg"/>
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            
                        />

                    ))}

                </div>
            </div>
            <div className="checkout__right">

                <Subtotal/>
            </div>
        </div>
    )
}
export default Checkout;