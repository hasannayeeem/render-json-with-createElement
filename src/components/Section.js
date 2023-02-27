import React from 'react'
import getClass from '../utils/getClasses';
import exportStyle from '../utils/styles.export';

function Section({children, style, element}) {
  const selector = getClass(element.id);
  exportStyle(selector, style)
  return (
    <section className={selector}>{children}</section>
  )
}

export default Section