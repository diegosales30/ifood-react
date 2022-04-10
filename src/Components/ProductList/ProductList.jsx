import "./ProductList.css";
import { BsCartPlusFill } from "react-icons/bs";

const ProductList = ({ data, handleClickBuy, filtered }) => {
  return (
    <>
      {filtered.length === 0
        ? data.map((current) => (
            <li key={current.id} className="container-iten">
              <div className="container-iten-list">
                <figure>
                  <img
                    className="img-vitrine"
                    src={current.img}
                    alt={current.name}
                  />
                </figure>
                <div className="box-name-category">
                  <p>{current.name}</p>
                  <p>{current.category}</p>
                </div>
              </div>

              <div className="box-btn-price">
                <button onClick={() => handleClickBuy(current)}>
                  <BsCartPlusFill />
                </button>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(current.price)}
                </p>
              </div>
            </li>
          ))
        : filtered.map((current) => (
            <li key={current.id} className="container-iten">
              <div className="container-iten-list">
                <figure>
                  <img
                    className="img-vitrine"
                    src={current.img}
                    alt={current.name}
                  />
                </figure>
                <div className="box-name-category">
                  <p>{current.name}</p>
                  <p>{current.category}</p>
                </div>
              </div>

              <div className="box-btn-price">
                <button onClick={() => handleClickBuy(current)}>
                  <BsCartPlusFill />
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
export default ProductList;
