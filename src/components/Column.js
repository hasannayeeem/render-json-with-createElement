import React from 'react'
import getClass from '../utils/getClasses';
import exportStyle from '../utils/styles.export';

function Column({children, style, element}) {
  const selector = getClass(element.id);
  exportStyle(selector, style);
  return (
    <div className={selector}>{children}</div>
  )
}

export default Column