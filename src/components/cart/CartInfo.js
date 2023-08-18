import { useSelector } from "react-redux/es/hooks/useSelector";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";

const CartInfo = () => {
  //useNavigate Hook incase the user is not authenticated

  //fetching cartItems data from cart context
  const cartItemsInfo = useSelector((state) => {
    return state.cartStore;
  });

  return cartItemsInfo.totalCartItems === 0 ? <CartEmpty /> : <CartList />;
};

export default CartInfo;
