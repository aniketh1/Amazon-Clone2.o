import React from 'react'
import "./BasketItem.css"
function BasketItem() {
  return (
    <div className='basket__item'>
      <div className='basket__item__left'>
        <img src='https://m.media-amazon.com/images/I/81mu53Xnv2L._AC_UY436_FMwebp_QL65_.jpg'/>
      </div>
      <div className='basket__item__right'>
        <h4>title</h4>
        <h5>price</h5>
        <p>rating</p>
        <button>remove from cart</button>
      </div>
    </div>
  )
}

export default BasketItem
