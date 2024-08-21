import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import {useSelector} from "react-redux"
// import items from "../data/items";

function Bag() {
  const items = useSelector((state)=> state.items);
  return (
    <>
      <main>
        <div className="bag-page">
          <BagItem items={items} />
          <BagSummary />
        </div>
      </main>
    </>
  );
}

export default Bag;
