import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

function App() {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const status = fetchStatus.isProcessing;
  return (
    <>
      <Header />
      <FetchItems />
      {!status ? (
        <Spinner />
      ) : (
        <div className="mainContent">
          <Outlet />
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
