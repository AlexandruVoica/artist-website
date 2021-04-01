import React from "react";

import PresentationalText from "./PresentationalText";

import styles from "./Side.module.scss";

const Side = () => {
  const mockPieceData = {
    title: "Title",
    description: "abc",
    seriesName: "name of series",
    canPurchaseDigital: true,
    canPurchasePhysical: true,
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Sebastian Pop</h1>
      </div>

      <PresentationalText pieceData={mockPieceData} />
    </div>
  );
};

export default Side;
