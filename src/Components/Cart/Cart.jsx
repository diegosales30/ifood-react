import ItemCart from "../ItemCart/ItemCart";
import TotalPrice from "../TotalPrice/TotalPrice";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="container-cart-principal">
      <div className="box-text-cart">
        <p>Carrinho</p>
      </div>
      <ul className="container-item-cart">
        <ItemCart />
      </ul>
      <div className="container-price-total">
        <TotalPrice />
      </div>
    </div>
  );
};
export default Cart;
