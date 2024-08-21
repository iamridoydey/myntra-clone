import { useDispatch, useSelector } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";

function HomeItem() {
  const items = useSelector((store) => store.items);
  const dispatch = useDispatch();

  const handleOnAdd = (id)=>{
    console.log("Item Id: " + id);
    dispatch(bagSliceAction.pushItem(id));
  }

  

  return (
    <div className="items-container">
      {items.map((item) => (
        <div key={item.id} className="item">
          <img className="item-image" src={item.image} alt="item image" />
          <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
          </div>
          <div className="company-name">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
          </div>
          <button className="btn-add-bag" onClick={() => handleOnAdd(item.id)}>
            Add to Bag
          </button>
        </div>
      ))}
    </div>
  );
}

export default HomeItem;
