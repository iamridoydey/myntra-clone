import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/FetchStatusSlice";

function FetchItems() {
  const fetchItems = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchItems.isProcessing) return;
    // Create an instance of AbortController to control the fetch request.
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.fetchStartStatus())
    // Fetch items from the API, using the signal for possible aborting.
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json()) // Convert the response to JSON.
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetch())
        dispatch(fetchStatusActions.fetchEndStatus())
        // Dispatch the fetched items to the Redux store.
        dispatch(itemsActions.addInitialItems(items));
      })

    // Cleanup function to abort the fetch request if the component unmounts or effect reruns.
    return () => {
      controller.abort();
    };
  }, [fetchItems]); // The effect will rerun if fetchItems changes.

  return (
    <>
    </>
  );
}

export default FetchItems;
