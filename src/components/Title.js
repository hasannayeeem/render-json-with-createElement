import React from "react";
import getClass from "../utils/getClasses";
import exportStyle from "../utils/styles.export";

function Title({ children, style, element }) {
  const Heading = element.titleType;
  const selector = getClass(element.id);
  exportStyle(selector, style);
  return (
    <Heading
      className={selector}
      // style={{ ...style }}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

export default Title;
