import styled from 'styled-components';
import { primary } from '~/styles/colors';

export const Container = styled.div`
  display: flex;flex-direction: column;
  width: 1200px;
  background-color: #110F14;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  position: relative;
  margin-bottom: 32px; 
  
  .content{
    display: flex;
    flex-direction: column;    
    padding: 60px 90px;
    padding-left: 90px;
    
    .info{
      display: flex;
      flex-direction: row;
     
      
      .logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 140px;
        width: 140px;
        border-radius: 32px;
        border: 2px solid rgba(255,255,255,0.4);
        margin-right: 20px;
      
        img{
          height: 86px;
          width: 86px;
          object-fit: contain;
          object-position: center center;
        }
      }
      
      .technologies{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 32px 32px 32px;
        grid-gap: 10px;
        padding-top: 16px;
        margin: 0 20px;
        
        .item{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          height: 32px;
          width: 32px;
        }
      }
      
      .app-name{
        font-size: 24px;
        font-weight: 900;
        color: white;
        text-transform: uppercase;
        letter-spacing: 10px;
      }
      
      .title{
        font-size: 50px;
        line-height: 70px;
        letter-spacing: 3px;
      }
      
      p{
        margin: 24px 0;
        font-weight: 600;
        line-height: 28px;
        font-size: 14px;
        color: rgba(255,255,255,0.69);
      }      
    }   
    
    .mockup{
      width: 100%;
      border: 1px solid #616365;
      border-radius: 5px;
      margin: 32px 0;
      overflow: hidden;
      
      .toolbar{
        height: 24px;
        width: 100%;
        background-color: #313439;
        border-bottom: 1px solid #191D20;
        display: flex;
        flex-direction: row;
        padding-left: 12px;
        
        .button{
          height: 8px;
          width: 8px;
          border-radius: 50%;
          margin-right: 6px;
          margin-top: 8px;
        }
      }
    
      .mockup-content{
        height: 574px;
        width: 100%;
        background-color: #b1c8d7;  
        
        img{
          height: 100%;
          width: 100%;
          object-fit: cover;
        }   
      }
    }
    
    .buttons{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
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
