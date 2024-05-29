import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <>
    <div className='food-data container mt-3'>
            <h2>Top Food Items Here.</h2>
            <div className="food-display">
                {food_list.map((item , i) => {
                    return (
                        <FoodItem key={i} id={item._id} name={item.name} price={item.price} description={item.description} category={item.category}/>
                    )
                })}
            </div>
    </div>
    </>
  )
}

export default FoodDisplay
