import React from "react";

import styles from "./ActionButtons.module.scss";
import { PieceDataType } from "types/domain";
import combineClass from "../utils/combineClass";

type ActionButtonsPropsType = {
  pieceData: PieceDataType;
};

type GeneralButtonPropsType = {
  className?: string;
  label: string;
  onClick: () => void;
};

const Button = (props: GeneralButtonPropsType) => {
  const { label, onClick, className } = props;
  return (
    <button
      className={combineClass(styles.button, className || "")}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const ActionButtons = (props: ActionButtonsPropsType) => {
  const { pieceData } = props;
  const { canPurchasePhysical, canPurchaseDigital } = pieceData;
  return (
    <div className={styles.container}>
      {canPurchasePhysical && (
        <Button
          label={"Purchase physical"}
          onClick={() => console.log("physical")}
        />
      )}
      {canPurchaseDigital && (
        <Button
          className={styles.purchaseDigitalButton}
          label={"Purchase as NFT"}
          onClick={() => console.log("digital")}
        />
      )}
    </div>
  );
};

export default ActionButtons;
