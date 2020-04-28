import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }
  
  html, body, #root{
    height: 100%;
    min-width: 800px;
  }
  
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', serif;
    background: #0B0A0D;
    color: #ffffff;
    user-select: none;
  }  
  
  button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none; 
  }  
  
  .archivo{
    font-family: 'Archivo Black', sans-serif;
  }
  
  .helvetica-condensed{
    font-family: "Londrina Solid";
  }
  
  .MuiTooltip-tooltipPlacementBottom{
    font-size: 14px !important;
  }
`;
