import styled from 'styled-components';
import { primary } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  width: 100%;
  
  .content{
    width: 1200px;
    display: flex;
    flex-direction: column;
  
    h1{
      font-size: 40px;
      letter-spacing: 6px;
      text-transform: uppercase;
      color: #1eb2e6;
    }
    
    .items{
     
      display: flex;
      flex-direction: column;
      margin-top: 40px;
    }
  }
`;
