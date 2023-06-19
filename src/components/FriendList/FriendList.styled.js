import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

width: 550px;
`

export const Item = styled.li`
display: flex;
align-items: center;
gap: 20px;

width: 500px;
padding: 25px;

background-color: #ffffff;
border-radius: 5px;
box-shadow: 5px 3px 4px rgba(0, 0, 0, 0.05), 
            -1px -1px 6px rgba(0, 0, 0, 0.05);

font-size: 24px;

span {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
}
`