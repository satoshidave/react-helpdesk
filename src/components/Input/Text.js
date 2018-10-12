import React from 'react';

const Text = (props) => {
  const hasLabel = props.label !== undefined || false;
  return (
    <div className="field">
      {
        hasLabel ? <label className={`label ${props.className}`}>{props.label}</label>:''
      }
      <div className="control">
        <input type="text" className="input" placeholder={`${props.placeholder}`} onChange={props.onChange} required />
      </div>
    </div>
  )
}

export default Text;