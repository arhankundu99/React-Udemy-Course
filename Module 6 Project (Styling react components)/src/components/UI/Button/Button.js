import React from 'react';
import styled from 'styled-components';
import './Button.css';

const Button = (props) => {
  return <button className = 'button'>{props.children}</button>
}

export default Button;
