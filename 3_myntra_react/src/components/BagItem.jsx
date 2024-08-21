import { useDispatch } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";

function BagItem({ item }) {
  const dispatch = useDispatch();

  const removeOnClick = (id)=> {
    dispatch(bagSliceAction.removeItem(id))
  }
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} />
      </div>
      <div className="item-right-part">
        <div className="right-part-container">
          <h2 className="company">${item.company}</h2>
          <h3 className="item-name">${item.item_name}</h3>
          <div className="price-container">
            <span className="current-price">Rs ${item.current_price}</span>
            <span className="original-price">Rs ${item.original_price}</span>
            <span className="discount-percentage">
              (${item.discount_percentage}% OFF)
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">
              ${item.return_period} days
            </span>{" "}
            return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">${item.delivery_date}</span>
          </div>
        </div>
        <div
          className="remove-button"
          onClick={() => removeOnClick(item.id)}
        >
          <span className="remove">X</span>
        </div>
      </div>
    </div>
  );
}


export default BagItem;