import "./Products.css";
import ProductList from "../ProductList/ProductList";
const Products = () => {
  return (
    <main className="container-main">
      <ul>
        <ProductList />
      </ul>
    </main>
  );
};
export default Products;
