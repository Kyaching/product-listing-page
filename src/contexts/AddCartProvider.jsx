import React, {createContext, useState} from "react";

export const AddToCartContext = createContext();
const AddCartProvider = ({children}) => {
  const [quantity, setQuantity] = useState(0);
  const handleAddToCart = () => {
    setQuantity(quantity + 1);
    localStorage.setItem("quantity", quantity);
  };

  const cartInfo = {handleAddToCart, quantity};
  return (
    <AddToCartContext.Provider value={cartInfo}>
      {children}
    </AddToCartContext.Provider>
  );
};

export default AddCartProvider;
