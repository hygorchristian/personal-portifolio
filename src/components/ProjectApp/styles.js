import styled from 'styled-components';
import { primary } from '~/styles/colors';

export const Container = styled.div`
  display: flex;flex-direction: column;
  width: 1200px;
  background-color: #110F14;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  position: relative;
  margin-bottom: 32px;
  
  .ornament{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 32px;
    border: 1px solid white;
    position: absolute;
    right: 32px;
    top: 32%;
    
    .overflow-x{
      width: 110%;
      background-color: #110F14;
      height: 84px;
      position: absolute;
      left: -1px;
      top: 7px;
    };
    
    .overflow-y{
      width: 16px;
      background-color: #110F14;
      height: 110%;
      position: absolute;
      left: 7px;
      top: -1px;
    };
    
    .dot{
      display: block;
      height: 6px;
      width: 6px;
      background-color: #d7d7d7;
      z-index: 100;
      margin: 4px 0;
    }
  }
  
  .content{
    display: flex;
    flex-direction: row;    
    padding: 60px 90px;
    padding-left: 90px;
    
    .info{
      display: flex;
      flex-direction: column;
      width: 500px;
      
      .logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 140px;
        width: 140px;
        border-radius: 32px;
        border: 1px solid rgba(255,255,255,0.4);
      
        img{
          height: 86px;
          width: 86px;
          object-fit: contain;
          object-position: center center;
        }
      }
      
      .app-name{
        font-size: 24px;
        font-weight: 900;
        color: white;
        text-transform: uppercase;
        letter-spacing: 10px;
        margin-top: 20px;
        margin-left: 8px;
      }
      
      .title{
        font-size: 50px;
        line-height: 70px;
        margin-top: 50px;
        letter-spacing: 3px;
      }
      
      .divider{
        height: 5px;
        width: 50px;
        background-color: white;
        margin: 32px 0;
      }
      
      p{
        margin: 0 0 32px 0;
        font-weight: 600;
        line-height: 28px;
        font-size: 14px;
        color: rgba(255,255,255,0.69);
      }      
    }   
    
    .image{
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 630px;
      align-self: center;
      
      img.mockup{
        height: 630px;
        object-position: center center;
        object-fit: contain;
        z-index: 100;
      }
      
      img.app-screenshot{
        height: 576px;
        position: absolute;
        left: 128px;
        top: 17px;
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
