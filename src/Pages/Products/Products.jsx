import React, {useEffect, useState} from "react";
import BuyModal from "../../Components/BuyModal";
import Product from "./Product";

const Products = () => {
  let [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState(null);
  const [sortProduct, setSortProduct] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then(res => res.json())
      .then(data => {
        setAllProducts(data.products);
      });
  }, []);

  const getFilterList = () => {
    if ((!filter && !sortProduct) || (!filter && sortProduct === "all")) {
      return allProducts;
    }
    if (filter === "all" && (!sortProduct || sortProduct === "all")) {
      return allProducts;
    }
    if (!filter && sortProduct) {
      if (sortProduct === "ascending") {
        return allProducts.sort((a, b) => a.price - b.price);
      }
      if (sortProduct === "descending") {
        return allProducts.sort((a, b) => b.price - a.price);
      }
      if (sortProduct === "rating") {
        console.log(sortProduct);
        return allProducts.sort((a, b) => b.rating - a.rating);
      }
      if (sortProduct === "discount") {
        return allProducts.sort(
          (a, b) => b.discountPercentage - a.discountPercentage
        );
      }
    }
    if (filter && (!sortProduct || sortProduct === "all")) {
      return allProducts.filter(
        product => product.category === filter || product.brand === filter
      );
    }
    if (filter && sortProduct) {
      if (sortProduct === "ascending") {
        const results = allProducts.filter(
          product => product.category === filter || product.brand === filter
        );
        return results.sort((a, b) => a.price - b.price);
      }
      if (sortProduct === "descending") {
        const results = allProducts.filter(
          product => product.category === filter || product.brand === filter
        );
        return results.sort((a, b) => b.price - a.price);
      }
      if (sortProduct === "rating") {
        const results = allProducts.filter(
          product => product.category === filter || product.brand === filter
        );
        return results.sort((a, b) => b.rating - a.rating);
      }
      if (sortProduct === "discount") {
        const results = allProducts.filter(
          product => product.category === filter || product.brand === filter
        );
        return results.sort(
          (a, b) => b.discountPercentage - a.discountPercentage
        );
      }
    }
  };

  let filterProducts = getFilterList();

  const menuItems = [...new Set(allProducts.map(product => product.brand))];
  const categoryItems = [
    ...new Set(allProducts.map(product => product.category)),
  ];

  return (
    <section className="py-6 grid lg:grid-cols-4">
      <div className="m-4">
        <div className="flex items-center">
          <label className="label-text mr-2">Filter by category:</label>
          <select
            onChange={e => {
              setFilter(e.target.value);
            }}
            className="select select-bordered max-w-xs"
          >
            <option value="all">All Category</option>
            {categoryItems?.map((product, i) => (
              <option key={i}>{product}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center mt-4">
          <label className="label-text mr-2">Filter by Brand:</label>
          <select
            onChange={e => {
              setFilter(e.target.value);
            }}
            className="select select-bordered w-[174px]"
          >
            <option value="all">All Brand</option>
            {menuItems.map(product => (
              <option key={product.id}>{product}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <h2 className="text-2xl font-semibold uppercase">
            {filter ? filter : "All"} Products
          </h2>
          <div className="flex w-96">
            <label className="label label-text">Sort by: </label>
            <select
              onChange={e => {
                setSortProduct(e.target.value);
              }}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="all">Default</option>
              <option value="ascending">low to high (Price)</option>
              <option value="descending">high to low (Price)</option>
              <option value="rating">rating</option>
              <option value="discount">discount</option>
            </select>
          </div>
        </div>
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid  gap-4 lg:grid-cols-3">
            {filterProducts?.map(product => (
              <Product
                key={product.id}
                product={product}
                setProduct={setProduct}
              />
            ))}
          </div>
        </div>
      </div>
      {product?.stock < 50 && <BuyModal />}
    </section>
  );
};

export default Products;
