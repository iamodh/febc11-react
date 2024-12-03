import PropTypes from "prop-types";
import { memo } from "react";

const Shipping = memo(function Shipping({ fees, handlePayment }) {
  console.log("Shipping 렌더링");
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
});

Shipping.propTypes = {
  handlePayment: PropTypes.func.isRequired,
  fees: PropTypes.number.isRequired,
};

export default Shipping;
