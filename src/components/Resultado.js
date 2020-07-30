import React from 'react'
import styled from 'styled-components';

const ResultadoStyled = styled.div`
  background-color: rgb(127,224,237);
  margin-top: 2rem; 
  padding: 1rem;
  p{
      color: #00838F;
      padding: 1rem;
      text-transform: uppercase;
      font-weight: bold;

  }
`;


export default function Resultado({cotizaciones}) {
    const {cotizacion}= cotizaciones
    return (
        <ResultadoStyled>
           <p>El Total es de: $ {cotizacion}</p>
        </ResultadoStyled>
    )
}
