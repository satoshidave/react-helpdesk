import React from 'react';

const Password = (props) => {
  const { onChange, className, inputClassName } = props;
  return (
    <div className="field">
      <label className={`label ${className}`}>Password</label>
      <input id="password" type="password" className={`input ${inputClassName}`} placeholder="Ingrese su contraseña" required onChange={onChange} />
    </div>
  );
};

export default Password;
