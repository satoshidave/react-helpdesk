import React from 'react';

const Password = (props) => {
  return (
    <div className="field">
      <label className={`label ${props.className}`}>Password</label>
      <input type="password" className="input" placeholder="Ingrese su contraseña" required onChange={props.onChange} />
    </div>
  )
}

export default Password;