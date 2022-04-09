import "./ItemCart.css";
import { FaTrash } from "react-icons/fa";

const ItemCart = () => {
  return (
    <>
      <li className="container-iten-cart">
        <div className="container-iten-list-cart">
          <figure>
            <img
              className="img-vitrine-cart"
              src="https://i.imgur.com/Vng6VzV.png"
              alt="lanche"
            />
          </figure>
          <div className="box-name-category-cart">
            <p>Hamburguer</p>
            <p>Categoria</p>
          </div>
        </div>

        <div className="box-btn-price-cart">
          <button>
            <FaTrash />
          </button>
          <p>R$14</p>
        </div>
      </li>
      <li className="container-iten-cart">
        <div className="container-iten-list-cart">
          <figure>
            <img
              className="img-vitrine-cart"
              src="https://i.imgur.com/Vng6VzV.png"
              alt="lanche"
            />
          </figure>
          <div className="box-name-category-cart">
            <p>Hamburguer</p>
            <p>Categoria</p>
          </div>
        </div>

        <div className="box-btn-price-cart">
          <button>
            <FaTrash />
          </button>
          <p>R$14</p>
        </div>
      </li>
      <li className="container-iten-cart">
        <div className="container-iten-list-cart">
          <figure>
            <img
              className="img-vitrine-cart"
              src="https://i.imgur.com/Vng6VzV.png"
              alt="lanche"
            />
          </figure>
          <div className="box-name-category-cart">
            <p>Hamburguer</p>
            <p>Categoria</p>
          </div>
        </div>

        <div className="box-btn-price-cart">
          <button>
            <FaTrash />
          </button>
          <p>R$14</p>
        </div>
      </li>
      <li className="container-iten-cart">
        <div className="container-iten-list-cart">
          <figure>
            <img
              className="img-vitrine-cart"
              src="https://i.imgur.com/Vng6VzV.png"
              alt="lanche"
            />
          </figure>
          <div className="box-name-category-cart">
            <p>Hamburguer</p>
            <p>Categoria</p>
          </div>
        </div>

        <div className="box-btn-price-cart">
          <button>
            <FaTrash />
          </button>
          <p>R$14</p>
        </div>
      </li>
    </>
  );
};

export default ItemCart;
