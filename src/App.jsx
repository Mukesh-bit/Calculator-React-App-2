import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";

const App = () => {
  const [calVal, setCalVal] = useState("");

  const onBtnClick = (btn) => {
    if (btn === "C") {
      setCalVal("");
    } else if (btn === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayValue = calVal + btn;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <BtnContainer onBtnClick={onBtnClick} />
    </div>
  );
};

export default App;
