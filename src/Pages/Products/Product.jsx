import React from "react";

const Product = ({product}) => {
  const {
    title,
    thumbnail,
    description,
    price,
    rating,
    stock,
    discountPercentage,
  } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-80" src={thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h2>Rating: {rating}</h2>
        <p>Stock :{stock}</p>
        <p>Description: {description}</p>
        <h2>
          <span>Price: {price}</span>{" "}
          <span>{discountPercentage}% discount!!!</span>
        </h2>
        <div className="card-actions justify-end">
          <button className="btn btn-active btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
