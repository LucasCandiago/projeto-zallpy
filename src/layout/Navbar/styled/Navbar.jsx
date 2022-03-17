import styled from "styled-components";

export const Nav = styled.div`
    background-color: #0CB357;
    padding: 10px;
    margin-top: 0;
    color: white;
    text-align: center;
    min-width: 450px;
    max-width: 1350px;
    margin: auto;
    margin-bottom: 0px;`;

export const List = styled.ul`
    display: flex;
    list-style: none;`;

export const Item = styled.li`
    a {
        margin-right: 1em;
        text-decoration: none;
        color: white;
        font-weight: bold;
        padding: 5px;
        padding-bottom: 10px;
        font-size: 1.1em;
    }
    
    a:hover {
        background-color: #087338;
        text-decoration: underline;
        transition: 0.5s;
    }`