import React from "react";
import getClass from "../utils/getClasses";
import exportStyle from "../utils/styles.export";

function Button({ children, style, element }) {
  const selector = getClass(element.id);
  exportStyle(selector, style);
  return (
    <button className={selector} >
      {children}
    </button>
  );
}

export default Button;
