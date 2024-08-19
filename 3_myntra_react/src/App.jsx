import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeItem from "./components/HomeItem";
import items from "./data/items";

function App() {
  return (
    <>
    <Header/>
    <HomeItem items={items}/>
    <Footer/>
    </>
  );
}

export default App;
