import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = () => {
  return (
   <>

    <div className="container">

    
    <a href="#" className="btn btn-primary m-2 ">Go with everything</a>
    <p className="card-text">Take or choose best food for related yourself. everything is already best in their taise wise but you can taist it once.</p>
      <div className="card">
  <div className="card-body">

    {menu_list.map((item , i) => (
      <div key={i} className=''>
      <img className="card-img-top card-img" src={item.menu_image} alt="Card image cap"/>
      <h5 className="card-title">{item.menu_name}</h5>
      </div>
    ))}
  </div>
</div>
    </div>
   </>
  )
}

export default ExploreMenu
