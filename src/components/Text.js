import React from 'react'
import getClass from '../utils/getClasses';
import exportStyle from '../utils/styles.export';

function Text({children, element, style}) {
  const selector = getClass(element.id);
  exportStyle(selector, style)
  return (
    <p
      // style={{ ...style }}
      className={selector}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

export default Text