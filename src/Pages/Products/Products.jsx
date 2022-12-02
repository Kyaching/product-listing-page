import React, {useEffect, useState} from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const category = products.filter(
    product => product.category === filter || product.brand === filter
  );
  const brand = products.map(product => product.category === filter);
  const menuItems = [...new Set(products.map(product => product.brand))];
  const categoryItems = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      });
  }, []);
  return (
    <section className="py-6 grid grid-cols-4">
      <div>
        <select
          onChange={e => {
            setFilter(e.target.value);
          }}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Category
          </option>
          {categoryItems?.map(product => (
            <option key={product.id}>{product}</option>
          ))}
        </select>

        <select
          onChange={e => {
            setFilter(e.target.value);
          }}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Brand
          </option>
          {menuItems.map(product => (
            <option key={product.id}>{product}</option>
          ))}
        </select>
      </div>
      <div className="col-span-3">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold uppercase">
            {filter} Categories
          </h2>
          <div className="flex w-96">
            <label className="label label-text">Sort by: </label>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Default
              </option>
              <option value="">low to high (Price)</option>
              <option value="">high to low (Price)</option>
              <option value="">rating</option>
              <option value="">discount</option>
            </select>
          </div>
        </div>
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid  gap-2 lg:grid-cols-3">
            {category.map(product => (
              <Product key={category.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
