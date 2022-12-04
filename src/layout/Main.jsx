import React from "react";
import Navbar from "../Pages/Home/Navbar";
import Products from "../Pages/Products/Products";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Products />
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Main;
