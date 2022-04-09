import "./ProductList.css";
import { BsCartPlusFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
const ProductList = () => {
  return (
    <>
      <li className="container-iten">
        <div className="container-iten-list">
          <figure>
            <img
              className="img-vitrine"
              src="https://i.imgur.com/Vng6VzV.png"
              alt="lanche"
            />
          </figure>
          <div className="box-name-category">
            <p>Hamburguer</p>
            <p>Categoria</p>
          </div>
        </div>

        <div className="box-btn-price">
          <button>
            <BsCartPlusFill />
          </button>
          <p>R$14</p>
        </div>
      </li>

      <li className="container-iten">
        <div className="container-iten-list">
          <figure>
            <img
              className="img-vitrine"
              src="https://i.imgur.com/Vng6VzV.png"
              alt="lanche"
            />
          </figure>
          <div className="box-name-category">
            <p>Hamburguer</p>
            <p>Categoria</p>
          </div>
        </div>

        <div className="box-btn-price">
          <button>
            <BsCartPlusFill />
          </button>
          <p>R$14</p>
        </div>
      </li>
      <li className="container-iten">
        <div className="container-iten-list">
          <figure>
            <img
              className="img-vitrine"
              src="https://i.imgur.com/Vng6VzV.png"
              alt="lanche"
            />
          </figure>
          <div className="box-name-category">
            <p>Hamburguer</p>
            <p>Categoria</p>
          </div>
        </div>

        <div className="box-btn-price">
          <button>
            <BsCartPlusFill />
          </button>
          <p>R$14</p>
        </div>
      </li>
      <li className="container-iten">
        <div className="container-iten-list">
          <figure>
            <img
              className="img-vitrine"
              src="https://i.imgur.com/Vng6VzV.png"
              alt="lanche"
            />
          </figure>
          <div className="box-name-category">
            <p>Hamburguer</p>
            <p>Categoria</p>
          </div>
        </div>

        <div className="box-btn-price">
          <button>
            <BsCartPlusFill />
          </button>
          <p>R$14</p>
        </div>
      </li>
      <li className="container-iten">
        <div className="container-iten-list">
          <figure>
            <img
              className="img-vitrine"
              src="https://i.imgur.com/Vng6VzV.png"
              alt="lanche"
            />
          </figure>
          <div className="box-name-category">
            <p>Hamburguer</p>
            <p>Categoria</p>
          </div>
        </div>

        <div className="box-btn-price">
          <button>
            <BsCartPlusFill />
          </button>
          <p>R$14</p>
        </div>
      </li>
      <li className="container-iten">
        <div className="container-iten-list">
          <figure>
            <img
              className="img-vitrine"
              src="https://i.imgur.com/Vng6VzV.png"
              alt="lanche"
            />
          </figure>
          <div className="box-name-category">
            <p>Hamburguer</p>
            <p>Categoria</p>
          </div>
        </div>

        <div className="box-btn-price">
          <button>
            <BsCartPlusFill />
          </button>
          <p>R$14</p>
        </div>
      </li>
    </>
  );
};
export default ProductList;
