import styled from 'styled-components'

 export const UsersTable = styled.table`
    border-collapse: collapse;
    width: 1350px;`;

export const Caption = styled.caption`
    font-size: 1.2em;
    font-weight: bolder;
    padding: 20px;`;

export const Td = styled.td`
    border: 1px solid black;
    padding: 10px;
    text-align: center;`;

export const Th = styled.th`
    border: 1px solid black;
    padding: 10px;`;

export const Tr = styled.tr`
    &:nth-child(even) {
        background-color: rgb(228, 228, 228);
    }`;

export const Admitido = styled.td`
    background-color: rgba(48, 218, 48, 0.74);
    border: 1px solid black;
    text-align: center;`;

export const AguardandoDoc = styled.td`
    background-color: rgba(255, 255, 0, 0.52);
    border: 1px solid black;
    text-align: center;`;

export const Desligado = styled.td`
    background-color: rgba(255, 0, 0, 0.609);
    border: 1px solid black;
    text-align: center;`;

export const Team = styled.p`
    padding: 0px;
    margin: 0px 10px;
    text-indent: 0px;
    font-size: 1em;`;

export const Client = styled.p`
    padding: 0px;
    margin: 0px 10px;
    text-indent: 0px;
    font-size: 1em;`;
