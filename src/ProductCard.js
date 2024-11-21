import React from 'react'
import './ProductCard.css'

function ProductCard({title, price, description, category, image, rating}) {

    console.log(rating);

    const ratingValue = rating && rating.rate ? rating.rate : 0;
    const ratingColor = rating.reate >= 3 || 3.0 ? 'green' : 'red';

  return (
<>    


    <h2>
        <div className='card'>
          <div className='details-card'>
            <div className='details'>
            <img src={image} alt='NotFound'/>
            <p className='pt'>{title}</p>
            <p className='pp'>${price}</p>
            <p className='pr' style={{color: ratingColor}}>Rating: {ratingValue}</p>
            </div>
          </div>
        </div>
    </h2>
    </>

  )
}
export default ProductCard;