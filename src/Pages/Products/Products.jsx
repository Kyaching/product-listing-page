import React, {useEffect, useState} from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  console.log(filter);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        console.log(data.products);
      });
  }, []);
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mx-auto">
        <div className="flex items-center w-1/2">
          <label className="label">
            <span className="text-xl">Filter by: </span>
          </label>
          <select
            onChange={e => {
              setFilter(e.target.value);
            }}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="category">category</option>
            <option value="brand">brand</option>
          </select>
        </div>
        <div className="flex items-center w-1/2">
          <label className="label">
            <span className="text-xl">Sort by: </span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option>rating</option>
            <option>discount</option>
            <option>price</option>
          </select>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-semibold uppercase">
          All Products :{products.length}
        </h2>
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <Product />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
