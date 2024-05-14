import React from 'react'
import product from '../../public/product.png'

const Banner = () => {
    return (
        <>

            <div className="row flex-lg-row-reverse align-items-center mt-5 g-5 py-5 container">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={product} className="d-block mx-lg-auto img-fluid" alt="Products logo" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h2 className="display-5  text-body-emphasis lh-1 mb-3">All daily life uses <span style={{ color: 'orange' }}>products list</span></h2>
                    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <input type="email" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Warning</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
