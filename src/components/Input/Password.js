import React from 'react';

const Password = (props) => {
  const { onChange, className } = props;
  return (
    <div className="field">
      <label className={`label ${className}`}>Password</label>
      <input id="password" type="password" className="input" placeholder="Ingrese su contraseña" required onChange={onChange} />
    </div>
  );
};

export default Password;
