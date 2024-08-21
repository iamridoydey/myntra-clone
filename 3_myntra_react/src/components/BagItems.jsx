import BagItem from "./BagItem";

function BagItems({ cart }) {
  return (
    <div className="bagItems">
      {cart.map((item, index) => (
        <BagItem key={index} item={item} />
      ))}
    </div>
  );
}

export default BagItems;
