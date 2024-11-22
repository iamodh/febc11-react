import PropTypes from "prop-types";

Shipping.propTypes = {
  handlePayment: PropTypes.func.isRequired,
  fees: PropTypes.number.isRequired,
};

export default function Shipping({ fees, handlePayment }) {
  return (
    <>
      <h2>배송비</h2>
      <div>
        배송비: {fees.toLocaleString()}원
        <br />
      </div>
      <br />
      <button onClick={handlePayment} type="button">
        결제
      </button>
    </>
  );
}
