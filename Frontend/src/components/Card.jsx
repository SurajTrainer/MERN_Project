import React from 'react';

const Card = ({ item }) => {
    return (
        <div className="card m-4" style={{width: "23rem"}}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.title}</p>
                <p className="card-text">price : {item.price}</p>
                <button type="button" className="btn btn-outline-warning" style={{marginRight:"150px"}}>Buy Now</button>
                <a href="#" className="btn btn-success">{item.category}</a>
            </div>
        </div>
    );
};

export default Card;
