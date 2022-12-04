export const addToDb = id => {
  let productCart = {};

  //get the add to cart from local storage
  const storedCart = localStorage.getItem("product-cart");
  if (storedCart) {
    productCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = productCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    productCart[id] = newQuantity;
  } else {
    productCart[id] = 1;
  }
  localStorage.setItem("product-cart", JSON.stringify(productCart));
};
