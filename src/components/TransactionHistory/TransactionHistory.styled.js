import styled from "styled-components";

export const Table = styled.table`
width: 850px;

background-color: #ffffff;
border-radius: 10px;
border-collapse: collapse;

overflow: hidden;

th {
    color: #ffffff;
}


tr {
    height: 60px;

    &:nth-child(even) {
        background-color: #f3f3f3;
    }
}

td, th {
    text-align: center;
    border: 1px solid #E4E4E4;
}

thead {
    background-color: #978DBF;
    border: 0px;
}
`