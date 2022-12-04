import React, {useContext} from "react";
import {AddToCartContext} from "../../contexts/AddCartProvider";
import {addToDb} from "../../util/fakeDB";
import {FaStar, FaStarHalf} from "react-icons/fa";
import toast from "react-hot-toast";

const Product = ({product, setProduct}) => {
  const {handleAddToCart} = useContext(AddToCartContext);
  const {
    title,
    thumbnail,
    description,
    price,
    rating,
    stock,
    discountPercentage,
  } = product;

  const handleCart = () => {
    handleAddToCart();
    addToDb(product.id);
  };
  const handleBuy = () => {
    if (product.stock > 50) {
      toast.success(`${product.title} bought successfully.`);
    }
    setProduct(product);
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-60" src={thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center">
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStarHalf color="orange" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Price: ${price}</h2>
          <h2>Stock :{stock}</h2>
        </div>
        <span className="text-green-500">
          {discountPercentage}% discount!!!
        </span>
        <p>
          <span className="font-semibold">Description:</span> {description}
        </p>

        <div className="card-actions justify-end">
          <label
            onClick={handleBuy}
            htmlFor="buy-modal"
            className="btn btn-active btn-primary"
          >
            Buy
          </label>

          <button onClick={handleCart} className="btn btn-active btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
