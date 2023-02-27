import React from 'react'
import getClass from '../utils/getClasses';
import exportStyle from '../utils/styles.export';

function Row({children, style, element}) {
  const selector = getClass(element.id);
  exportStyle(selector, style)
  return (
    <div >{children}</div>
  )
}

export default Row