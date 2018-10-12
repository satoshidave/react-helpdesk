import React from 'react'
import './Button.css';

const Button = (props) => {
  return (
    <span onClick={props.onClick} className="button template--button is-outlined is-inverted">
      {props.value}
    </span>
  )
}

export default Button;