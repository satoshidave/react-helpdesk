import React from 'react';
import './Button.css';

const Button = (props) => {
  const { value, onClick } = props;
  return (
    <span onClick={onClick} className="button template--button is-outlined is-inverted">
      {value}
    </span>
  );
};

export default Button;
