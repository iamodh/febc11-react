import { useCallback, useEffect, useMemo, useState } from "react";
import Product from "./Product";
import Shipping from "./Shipping";
import { SyncLoader } from "react-spinners";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const basicShippingFees = 3000;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const axios = useAxiosInstance();

  const fetchData = async (_id) => {
    setIsLoading(true);

    try {
      const res = await axios.get(`/products123/${_id}?`, {
        params: { delay: 2000 },
      });
      setData(res.data.item);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(4);
  }, []);

  const [quantity, setQuantity] = useState("1");
  const [shippingFees, setShippingFees] = useState(basicShippingFees);

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setShippingFees(basicShippingFees * Math.ceil(newQuantity / 5));
    setQuantity(newQuantity);
  };

  const handlePayment = useCallback(() => {
    alert(`배송비 ${shippingFees}원이 추가됩니다. 상품을 결제하시겠습니까?`);
  }, [shippingFees]);

  console.log("App 렌더링");

  return (
    <>
      <h1>01 Nike 상품 상세</h1>
      {isLoading && <SyncLoader />}
      {data && (
        <div>
          <Product product={data} />

          <h2>수량 선택</h2>
          <div>
            가격: {data.price.toLocaleString()}원
            <br />
            수량:{" "}
            <input
              type="number"
              min="1"
              max={data.quantity - data.buyQuantity}
              value={quantity}
              onChange={handleQuantityChange}
            />
            (배송비는 5개당 {basicShippingFees.toLocaleString()}원씩
            추가됩니다.)
            <br />
            상품 금액: {(data.price * quantity).toLocaleString()}원
          </div>
          <Shipping fees={shippingFees} handlePayment={handlePayment} />
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
