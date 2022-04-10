const TotalPrice = ({ dataCart }) => {
  const totalPrice = dataCart.reduce((a, b) => a + b.price, 0);
  return (
    <>
      <p>Total</p>
      <span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(totalPrice)}
      </span>
    </>
  );
};
export default TotalPrice;
