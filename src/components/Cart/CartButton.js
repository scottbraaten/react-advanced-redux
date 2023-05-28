import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartTtl = useSelector((state) => state.cart.totalQty);

  const handleCartToggle = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button
      className={classes.button}
      onClick={handleCartToggle}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartTtl}</span>
    </button>
  );
};

export default CartButton;
