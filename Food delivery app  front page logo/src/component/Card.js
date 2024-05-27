import React from 'react'

const Card = () => {
  return (
  
    <>
        <div className="card m-5 p-2" style={{width: "30rem"}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
 <div style={{display: "flex"}}>
 <select class="form-select m" style={{width: "12rem" , margin:'auto'}} aria-label="Default select example">

 {Array.from(Array(6), (e , i ) => {
    return (
        <option key={i} value={i+1}> { i +1}</option>
    )
 })}
</select>

 <select class="form-select" style={{width: "12rem" , margin:"auto"}} aria-label="Default select example">
  <option selected>Size</option>
  <option value="1">Half</option>
  <option value="2">Full</option>
</select>
 </div>
</div>
    </>
  )
}

export default Card
