import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import AdminSelection from './components/AdminSelection'
import Cotizacion from './components/Cotizacion'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
const  AppStyled= styled.div`
  background: white;
  width: 80%;
  position: relative;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 30px;
  h1{
    margin: 0;
    background: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
    font-family: 'Slabo 27px', serif;
    font-size: 2rem;
  }
  @media (max-width: 728px){
    width: 100%;
  }
`;



function App() {
  const [cotizacion, setCotizacion] = useState( { 
    cotizacion : 0,
    datos : {
      marca: '',
      year: '',
      plan: ''
    }}
   
   )


  const [loading , setLoading] = useState(false) 
  const Cotizando = (value,datos) => {
    setLoading(true)
    setTimeout(() => {
       setCotizacion({
       cotizacion: value,
       datos 


    })
    setLoading(false)
    }, 2000);
    
   
  }
  return (
    <AppStyled className="App"> 
         <h1>Cotizador de Seguros</h1>
         <AdminSelection Cotizando={Cotizando}/>
         {loading ? <Spinner/> : null} 
         {cotizacion.cotizacion > 0 && !loading ? <> <Cotizacion cotizaciones={cotizacion}/> <Resultado cotizaciones={cotizacion}/>   </> : null   }
         
    </AppStyled>
  );
}

export default App;