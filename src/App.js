import "./App.css";
import axios from "axios";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //preciso chamar esse css

import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [dataCart, setDataCart] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const response = await axios
        .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
        .catch((error) => console.log("erro atual: " + error));
      setData(response.data);
    }
    getProduct();
  }, []);

  const handleClickBuy = (item) => {
    if (!dataCart.includes(item)) {
      data.filter((current) => {
        if (current.id === item.id) {
          setDataCart([...dataCart, item]);
        }
      });
    } else {
      console.log("ja existe");
      toast.error("Produto ja adicionado");
    }
  };

  const filterItens = (input) => {
    const dadosFiltrados = data.filter(
      (current) =>
        current.name.toLowerCase() === input.toLowerCase() ||
        current.category.toLowerCase() === input.toLowerCase()
    );
    setFiltered(dadosFiltrados);
  };

  const handleDelete = (item) => {
    const deleted = dataCart.filter((current) => current.id !== item.id);

    setDataCart(deleted);
  };

  return (
    <div className="App">
      <Header filterItens={filterItens} />
      <ToastContainer draggable={false} autoClose={3000} />
      <Products
        data={data}
        handleClickBuy={handleClickBuy}
        filtered={filtered}
      />

      <Cart dataCart={dataCart} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
