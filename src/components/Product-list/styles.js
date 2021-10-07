import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 500px;
  border: 1px solid #bcd2ee;
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

export const List = styled.ul`
  list-style: none;
  text-align: center;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
