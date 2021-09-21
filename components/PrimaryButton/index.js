import React, { Children } from 'react';
import styled from 'styled-components';
import { device } from '../../styles';

const PrimaryButton = props => {

  return (
    <>
      <Button
        {...props}
      >{props.children}
      </Button>
    </>
  )
}

export default PrimaryButton

const Button = styled.button`
  text-decoration:none;
  border:none;
  background:${({ bgColor }) => bgColor};
  width:fit-content;
  height:fit-content;
  padding: 0.8rem 1rem;
  border-radius:50px;
  color:${({ fontColor }) => fontColor};
  font-size:0.7rem;
  font-weight:bold;
  transition: .1s;
  cursor: pointer;
  margin-right:1rem;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
  @media ${device.mobileL}{
    padding: 1rem 2rem;
    font-size:1rem;
  }
`