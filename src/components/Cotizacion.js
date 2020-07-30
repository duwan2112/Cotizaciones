import React from 'react'
import styled from 'styled-components';
import {primerMayuscula} from './helper'
const CotizacionStyled = styled.div`
padding: 1rem;
background-color: #00838F;

width: 77%;
margin: 0 auto;
margin-top: 30px;
.information{
    width: 50%;
    margin: 0 auto;
    color: #FFF;

}
h2{
    color: #FFF
}
.information p{
    margin: 3px;
    font-weight: bold;
}
`;


export default function Cotizacion({cotizaciones}) {
    const {datos} = cotizaciones
    return (
        <CotizacionStyled>
             <h2> Resumen  de Cotizacion </h2>
             <div className="information">
             <p> Marca: {primerMayuscula(datos.marca)}</p>
             <p> Año de Auto: {primerMayuscula(datos.year)}</p>
             <p> Plan: {primerMayuscula(datos.plan)}</p>
             </div>
        </CotizacionStyled>
    )
}
