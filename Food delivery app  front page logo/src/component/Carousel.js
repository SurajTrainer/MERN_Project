import React from 'react'

const Carousel = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide mt-5" style={{width: "60% ",
    margin: "auto"}} data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block rounded" src="https://picsum.photos/800/400?random=1" alt="First slide"/>
    </div>
    {/* <div className="carousel-item">
      <img className="d-block w-100" src="https://picsum.photos/800/400?random=2" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://picsum.photos/800/400?random=3" alt="Third slide"/>
    </div> */}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
</div>
  <form class="d-flex mt-5" style={{width:'60%', margin:"auto"}}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </>
  )
}

export default Carousel
