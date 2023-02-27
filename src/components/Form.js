import React from 'react'
import getClass from '../utils/getClasses';
import exportStyle from '../utils/styles.export';

function Form({children, style, form}) {
    const selector = getClass(form.id);
    exportStyle(selector, style)
  return (
    <form className={selector}>{children}</form>
  )
}

export default Form