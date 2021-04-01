import React from "react";

import PresentationalText from "./PresentationalText";

import styles from "./Side.module.scss";
import ActionButtons from "./ActionButtons";

const Side = () => {
  const mockPieceData = {
    title: "Title",
    seriesName: "name of series",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue a odio tempus sagittis in ut justo. Sed aliquet felis eu erat convallis sodales. Aliquam erat volutpat. Curabitur egestas et purus a euismod. Fusce non est vel orci sodales tempor. Nunc eget pellentesque nisi, vehicula commodo sem.",
    canPurchaseDigital: true,
    canPurchasePhysical: true,
  };
  const shouldShowActionButtons = true;
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Sebastian Pop</h1>
      </div>

      <PresentationalText pieceData={mockPieceData} />
      {shouldShowActionButtons && <ActionButtons pieceData={mockPieceData} />}
    </div>
  );
};

export default Side;
