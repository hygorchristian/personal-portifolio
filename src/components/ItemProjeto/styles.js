import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 24px;
  background-color: #1a1920;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .4);
  
  &:hover{
    transform: scale(1.1);
    box-shadow: 0 2px 30px rgba(0, 0, 0, .8);
  }
  
  .image{
    height: 100px;
    width: 100px;
    border-radius: 12px;
    border: 1px solid #686868;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    img{
      height: 60px;
      width: 60px;
      object-fit: contain;
    }
  }
  
  .info{
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 200px;
    
    h2{
      font-size: 30px;
    }
    
    p{
      font-size: 18px;
      color: #bdbdbd;
      margin-top: 10px;
    }
  }
  
  .divider{
    height: 100px;
    width: 1px;
    background-color: #4a4a4a;
    margin: 0 30px;
  }
  
  .tech{
    display: grid;
    grid-template-rows: 40px 40px;
    grid-gap: 20px;
    grid-auto-flow: column;
    
    .item-tech{
      height: 40px;
      width: 40px;
      
      img{
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;
