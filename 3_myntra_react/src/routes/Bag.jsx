import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
import BlankBagMsg from "../components/BlankBagMsg";

function Bag() {
  const cartList = useSelector((state) => state.cart);
  const items = useSelector((store) => store.items);

  const filterElement = () => {
    return items.filter((item) => cartList.includes(item.id));
  };

  const cart = filterElement();

  return (
    <>
      {cart.length === 0 ? (
        <BlankBagMsg />
      ) : (
        <div className="bag-page">
          <BagItems cart={cart} />
          <BagSummary cartList={cart}/>
        </div>
      )}
    </>
  );
}

export default Bag;
