import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'

const FoodItem = ({ id, name, price, description, category, image }) => {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <div className="image-item">
<img className="card-img-top" src='https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg' alt="Card image cap" />
        </div>
        <ul className="list-group list-group-flush">
          <h5 className="card-title">{name}</h5>
          <img src={assets.rating_starts} alt="" />
          <li className="list-group-item">Category : {category}</li>
          <li className="list-group-item">Price : ${price}</li>
        </ul>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  )
}

export default FoodItem
