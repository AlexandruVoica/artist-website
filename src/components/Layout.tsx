import React from "react";

import styles from "./Layout.module.scss";

type LayoutPropsType = {
  header: any;
  main: any;
  side: any;
  footer: any;
};

const Layout = (props: LayoutPropsType) => {
  const { header, main, side, footer } = props;
  return (
    <div className={styles.container}>
      <div className={styles.sideContainer}>{side}</div>
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>{header}</div>
        <div className={styles.mainContainer}>{main}</div>
        <div className={styles.footerContainer}>{footer}</div>
      </div>
    </div>
  );
};

export default Layout;
