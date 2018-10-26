import styled from 'styled-components';


export const StyledInput = styled.input`
    outline: none;
    border: none;
    margin: 10px 10px;
    height: 40px;
    width: 180px;
    padding: 0 10px;
    font-size: 14px;
    line-height: 40px;
    border: solid 1px #dbdbdb;
    border-radius: 6px;
    color: #262626;
`;

export const StyledButton = styled.button`
    outline: none;
    height: 45px;
    width: 140px;
    border: none;
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: #3897f0;
`;

export const Container = styled.div`
    width: 100%;
    padding: 0 20px;
    max-width: 850px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
`;

export const Navigation = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 80px;
    i {
        font-size: 28px;
    }
`;

export const StyledSmurf = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  background: #fff;
  margin: 20px 0;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

export const SmurfInfo = styled.div`
  text-align: left;
`;

export const SmurfActions = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  i {
    cursor: pointer;
  };
  .fa-trash {
    color: rgba(255, 0, 0, 0.5);
  };
  .fa-edit {
    color: rgba(0, 0, 255, 0.5);
  } ;
} 
`;

export const StyledSmurfCard = styled.div`
  width: 250px;
  height: 180px;
  padding: 20px;
  background: #fff;
  margin: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
`;

export const SmurfCardInfo = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  text-align: left;
  position: absolute;
  z-index: 2;
  color: #3897f0;
  text-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
  background-color: rgba(255,255,255,1);
  /* background-color: rgba(0, 0, 0, 0.2); */
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
`;
