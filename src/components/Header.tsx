import React from "react";
import { useDispatch, useSelector } from "store";
import { showMenu } from "store/actions";
import styles from "./Header.module.scss";

const Header = () => {
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {ui.menu.isVisible ? "menu visible" : "menu HIDDEN"}
      <button onClick={() => dispatch(showMenu)}>show menu</button>
    </div>
  );
};

export default Header;
