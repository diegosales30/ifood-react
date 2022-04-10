import "./ItemCart.css";
import { FaTrash } from "react-icons/fa";

const ItemCart = ({ dataCart, handleDelete }) => {
  return (
    <>
      {dataCart &&
        dataCart.map((current) => (
          <li key={current.id} className="container-iten-cart">
            <div className="container-iten-list-cart">
              <figure>
                <img
                  className="img-vitrine-cart"
                  src={current.img}
                  alt={current.name}
                />
              </figure>
              <div className="box-name-category-cart">
                <p>{current.name}</p>
                <p>{current.category}</p>
              </div>
            </div>

            <div className="box-btn-price-cart">
              <button onClick={() => handleDelete(current)}>
                <FaTrash />
              </button>
              <p>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(current.price)}
              </p>
            </div>
          </li>
        ))}
    </>
  );
};

export default ItemCart;
