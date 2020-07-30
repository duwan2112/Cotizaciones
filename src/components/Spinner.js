import React from 'react'
import './spinner.css'
import styled from 'styled-components';

const SpinnerStyled = styled.div`

  padding: 100px ;
  text-align: center;
`;


export default function Spinner() {
    return (
        <SpinnerStyled>
        <div class="sk-chase">
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
</div></SpinnerStyled>
    )
}
