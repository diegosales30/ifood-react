import ItemCart from "../ItemCart/ItemCart";
import TotalPrice from "../TotalPrice/TotalPrice";
import "./Cart.css";
const Cart = ({ dataCart, handleDelete }) => {
  return (
    <div className="container-cart-principal">
      <div className="box-text-cart">
        <p>Carrinho</p>
      </div>
      <ul className="container-item-cart">
        <ItemCart dataCart={dataCart} handleDelete={handleDelete} />
      </ul>
      <div className="container-price-total">
        <TotalPrice dataCart={dataCart} />
      </div>
    </div>
  );
};
export default Cart;
