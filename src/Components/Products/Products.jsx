import "./Products.css";
import ProductList from "../ProductList/ProductList";
const Products = ({ data, handleClickBuy, filtered }) => {
  return (
    <main className="container-main">
      <ul>
        <ProductList
          data={data}
          handleClickBuy={handleClickBuy}
          filtered={filtered}
        />
      </ul>
    </main>
  );
};
export default Products;
