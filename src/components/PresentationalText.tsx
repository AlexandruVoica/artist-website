import React from "react";

import styles from "./PresentationalText.module.scss";

type PresentationalTextPropsType = {
  pieceData: any;
};

const PresentationalText = (props: PresentationalTextPropsType) => {
  const { pieceData } = props;
  return (
    <div className={styles.container}>
      <h2 className={styles.pieceTitle}>{pieceData.title}</h2>
      <span className={styles.seriesName}>{pieceData.seriesName}</span>
      <p className={styles.text}>{pieceData.description}</p>
    </div>
  );
};

export default PresentationalText;
