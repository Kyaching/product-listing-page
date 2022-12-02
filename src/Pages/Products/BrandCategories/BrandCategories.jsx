// import React from 'react';

// const BrandCategories = () => {
//     const [products, setProducts] = useState([]);
//     const [filter, setFilter] = useState("");
//     console.log(filter);

//     const category = products.filter(product => product.category === filter);
//     const brand = products.map(product => product.category === filter);
//     const menuItems = [...new Set(products.map(product => product.brand))];
//     const categoryItems = [...new Set(products.map(product => product.category))];
//     console.log(menuItems);
//     useEffect(() => {
//       fetch(`https://dummyjson.com/products?limit=100`)
//         .then(res => res.json())
//         .then(data => {
//           setProducts(data.products);
//           // console.log(data.products);
//         });
//     }, []);
//     return (
//         <div>

//         </div>
//     );
// };

// export default BrandCategories;
