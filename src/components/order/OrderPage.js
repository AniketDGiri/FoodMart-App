import { useLocation } from "react-router-dom";
import OrderSuccess from "./OrderSuccess";
import OrderFail from "./OrderFail";

const OrderPage = () => {
  const { state } = useLocation();

  return state.status === 201 ? (
    <OrderSuccess orderData={state.orderData} />
  ) : (
    <OrderFail />
  );
};

export default OrderPage;
