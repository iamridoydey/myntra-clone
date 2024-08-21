function BagSummary({ cartList }) {
  const cart = {
    totalItem: cartList.length,
    totalMRP: 0,
    totalDiscount: 0,
    finalPayment: 0,
  };

  for (let i = 0; i < cartList.length; i++) {
    let item = cartList[i];
    cart.totalMRP += item.original_price;
    cart.totalDiscount += Math.round(item.original_price * item.discount_percentage / 100);
  }

  // Final payment  += convenienceFee
  cart.finalPayment = cart.totalMRP - cart.totalDiscount + 99;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({cart.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{cart.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{cart.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{cart.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}

export default BagSummary;
