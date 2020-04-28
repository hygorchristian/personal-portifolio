import styled from 'styled-components';
import { primary } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  background-color: #110F14;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  margin-bottom: 32px; 
  
  .items{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 32px;
    grid-gap: 32px;
    width: 100%;   
    position: relative;
    
    .item{
      width: 100%;
      
      h4{
        font-size: 12px;
        color: grey;
        margin-bottom: 8px;
      }
      
      .image-container{
        width: 100%;
        height: 590px;  
        background-color: #221e28;   
        border-radius: 10px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, .5); 
        overflow: hidden;
        
        img{
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }   
  }    
  
  .footer{
    height: 90px;
    border-top: 1px solid #414042;
    position: relative;
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    width: 100%;
    
    h2.title{
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 5px;
      line-height: 90px;
    }
    
    .count{
      position: absolute;
      right: 40px;
      top: 30%;
      font-family: Fira Code;
    }
    
    .indicator{
      position: absolute;
      height: 8px;
      width: 100%;
      bottom: 0;
      left: 0;
      background-color: #2e2b33;
      display: flex;
      flex-direction: row;
      align-self: center;
      justify-content: center;
      
      .fill{
        height: 100%;
        width: 80%;
        background-color: ${primary['600']};
      }
    }
    
    .symbol{
      position: absolute;
      top: -20px;
      left: 35px;
      width: 50px;
      background-color: #110F14;
      display: flex;
      flex-direction: row;
      align-self: center;
      justify-content: center;
      
      img{
        height: 100%;
        object-position: center center;
        object-fit: contain;
      }
    }
  }
  
`;
