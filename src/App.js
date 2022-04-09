import "./App.css";

import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
