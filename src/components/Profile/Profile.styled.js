import styled from "styled-components";

export const ProfileContainer = styled.div`
width: 550px;

border-radius: 5px;
box-shadow: 5px 3px 4px rgba(0, 0, 0, 0.25), 
            -1px -1px 6px rgba(0, 0, 0, 0.25);

overflow: hidden;

div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 50px;
    background-color: #ffffff;

    img {
        margin: 70px 0px 45px 0px;
        border-radius: 50%;
    }
}

ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin: auto;
    padding: 30px 0px;

    background-color: #B2A5E2;
}

li {
    display: flex;
    flex-direction: column;
    align-items: center;
}

span {
    font-weight: 600;
    font-size: 20px;
}
`;

export const P = styled.p`
margin: 0px;

color: #000000;
font-weight: 600;
font-size: 40px;
line-height: 180%;

&~& {
    color: #A3A3A3;
    font-weight: 400;
    font-size: 20px;
}

&.stats-name {
    font-weight: 200;
    font-size: 20px;
}
`
