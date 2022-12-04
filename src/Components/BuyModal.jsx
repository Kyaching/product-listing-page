import React from "react";

const BuyModal = () => {
  return (
    <div>
      <input type="checkbox" id="buy-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="buy-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <p className="py-4 font-semibold">Hurry! only a few items left.</p>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;
