import React from 'react';

const Text = (props) => {
  const {
    label, className, placeholder, onChange, inputClassName,
  } = props;
  const hasLabel = label !== undefined || false;
  return (
    <div className="field">
      {
        hasLabel ? <label className={`label ${className}`}>{label}</label> : ''
      }
      <div className="control">
        <input type="text" className={`input ${inputClassName}`} placeholder={`${placeholder}`} onChange={onChange} required />
      </div>
    </div>
  );
};

export default Text;
