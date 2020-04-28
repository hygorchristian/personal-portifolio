import styled from 'styled-components';
import { primary } from '~/styles/colors';

export const Container = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 250px;
  border-radius: 4px;
  background-color: ${primary['700']};
  cursor: pointer;
  
  &:hover{
    transform: scale(1.02);
    background-color: ${primary['600']};
  }
  
  &:active{
    transform: scale(1);
    opacity: 0.8;
  }
  
  .icon{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 70px;
  }
  
  .text{
    display: flex;
    flex-direction: column;
    flex: 1;
    
    span{
      font-size: 12px;     
      letter-spacing: 1.11px; 
    }
    
    .large{
      font-size: 24px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.5px; 
    }
  }
`;
