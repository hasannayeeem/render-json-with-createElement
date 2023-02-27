import React from 'react'
import getClass from '../utils/getClasses';
import exportStyle from '../utils/styles.export';

function Image({ attr, style, element }) {
  const selector = getClass(element.id);
  exportStyle(selector, style)
  return (
    <img
      // style={{ ...style }}
      className={selector}
      src={attr.src}
      alt={attr.alt}
    />
  )
}

export default Image