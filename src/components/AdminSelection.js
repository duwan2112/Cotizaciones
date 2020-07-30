import React,{useState} from "react";
import styled from "styled-components";
import {obtenerDiferenciaYear,calcularMarca,calcularPlan} from '../components/helper'
const SelectionStyled = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  form{
      margin: 0 auto;
      width: 80%;

  }
  div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 25px;
  }
  button{
      margin-top: 20px;
      background-color: #00838f;
      font-size: 16px;
      width: 100%; 
      padding: 1rem;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color .3s;
      &:hover{
            background-color: #26C6DA
      }
      &:focus{
          outline: none;
      }
  }
  label{
    width: 25%;
  }
  select{
      width: 75%;
      padding: 1rem;
      border: 1px solid #e1e1e1;
      -webkit-appearance: none;
      &:focus{
          outline: none;
      }
  }
  span{
      width: 75%;
  }
  input{
      margin: 0 0.8rem;
  }
  .error{
      background-color: rgba(0,0,0.5);
      color: white;
      padding: 1rem; 

      text-align: center;
  }
  .radiobutton{
    display: flex;
   
  }
  @media (max-width: 728px)
  {

    form{
      width: 100%;
    }  
    
    .radiobutton{
        flex-direction: column;
       .radio{
         display: flex;
         justify-content: left;
         align-items: left;
       }
    }
  }
`;

export default function AdminSelection({Cotizando}) {
  const [form,setForm] = useState({
    marca: '',
    year: '',
    plan: ''

  })
const [error, setError] = useState(false)

  const handleButton = e => { 
   e.preventDefault()
  if(e.target.marca.value && e.target.year.value &&  e.target.plan.value){
    setForm({ marca: e.target.marca.value,  year: e.target.year.value, plan: e.target.plan.value })
   const datos=  { marca: e.target.marca.value,  year: e.target.year.value, plan: e.target.plan.value }
   let  resultado = 2000
   const diferencia = obtenerDiferenciaYear(e.target.year.value)  
    resultado -= ((diferencia*3)*resultado) / 100
   resultado = calcularMarca(e.target.marca.value) * resultado
   resultado = parseFloat(calcularPlan(e.target.plan.value) * resultado).toFixed(2)
   Cotizando(resultado, datos)

 
   setError(false)
   return
  }
   setError(true)
  
  }

   
  return (
    <SelectionStyled>
      {error ?  <p className="error"> TIENES UN ERROR EN EL FORMULARIO </p> : null }
      <form onSubmit={handleButton}>
        <div>
          <label>Marca</label>
          <select name="marca" >
            <option value="">-- Seleccion --</option>
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiatico</option>
          </select>
        </div>
        <div>
          <label>Año</label>
          <select name="year">
            <option value="">-- Seleccione --</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </select>
        </div>

         <div> 
         <label>Plan</label>
          <span className="radiobutton">
             <div className="radio"><input type="radio" name="plan" value="basico"/>Basico</div> 
           <div className="radio"><input type="radio" name="plan" value="complejo"/>Complejo</div>
          
           
           </span> 
           </div>
         <button type="submit"> Cotizar</button>
      </form>
    </SelectionStyled>
  );
}
