import React from 'react'
import "./product.css"
import { useStateValue } from './StateProvider'
function Product({title, image, price, rating}) {
  const [{ basket },dispatch] = useStateValue();
  const addToBasket = () =>{

    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        
        title: title,
        image:image,
        price:price,
        rating:rating
      }
    })
  }
 
  return (
    <div className='product'>
      {/* Title */}
      {/* star */}
      {/* image */}
      {/* Add to cart */}
      <div className='product__info'>
        <p> {title}</p>
        <p className='product__price'> 
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {
            Array(rating).fill().map((_,i)=>(
              <p>⭐</p>
           ) )

          }
       
        </div>

      </div>
      <img src={image}/>

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
