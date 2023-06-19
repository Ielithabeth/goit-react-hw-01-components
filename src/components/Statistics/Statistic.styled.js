import styled from "styled-components";

export const Section = styled.section`
width: 550px;

border-radius: 5px;
background-color: #ffffff;
overflow: hidden;

h2 {
    text-align: center;
    font-weight: 600;
    font-size: 44px;

    margin: 50px 0px;
}

ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding: 40px 0px;

    background-color: #B2A5E2;
}

li {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #ffffff;
}

span {
    font-weight: 200;
    font-size: 16px;
}

p {
    font-size: 24px;
    margin-top: 4px;
}
`