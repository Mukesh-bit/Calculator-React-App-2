import React from "react";
import styles from "./BtnContainer.module.css";

const BtnContainer = ({ onBtnClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "/",
    ".",
    "0",
    "=",
  ];

  return (
    <div className={styles.btnContainer}>
      {buttonNames.map((btn) => {
        return (
          <button
            onClick={() => onBtnClick(btn)}
            key={btn}
            className={styles.btn}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
