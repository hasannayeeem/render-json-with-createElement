import React from 'react'
import getClass from '../utils/getClasses';
import exportStyle from '../utils/styles.export';

function Input({ field, style }) {
  const selector = getClass(field.id);
  exportStyle(selector, style);
  return (
    <input
      name={field.name}
      className={selector}
      // style={{...style}}
      placeholder={field.attr.placeholder}
    />
  )
}

export default Input