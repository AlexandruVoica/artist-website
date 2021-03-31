import React from "react";

import "./Layout.scss";

type LayoutPropsType = {
  header: any;
  main: any;
  side: any;
  footer: any;
};

const Layout = (props: LayoutPropsType) => {
  const { header, main, side, footer } = props;
  return (
    <div className={"container"}>
      <div className={"side-container"}>{side}</div>
      <div className={"content-container"}>
        <div className={"header-container"}>{header}</div>
        <div className={"main-container"}>{main}</div>
        <div className={"footer-container"}>{footer}</div>
      </div>
    </div>
  );
};

export default Layout;
