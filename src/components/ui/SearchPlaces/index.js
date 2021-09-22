import styled from "styled-components"

const Background = styled.div`
    width: 25.16%;
    height: 100%;
    float: left;
    background-color: #1E213A;
    color: white;
    margin-left: -0.6%;
    margin-top: -0.6%;
    overflow: hidden;
    position: absolute;
`

const Back = styled.div`
    color: #e7e7eb;
    width: 25%;
    height: 30%;
    float: right;
    margin-right: -5%;
    font-family: Raleway;
    font-weight: 100;
    margin-top: 5%;
    font-size: 35px;
`

const Input = styled.input`
    margin-top: 7%;
    height: 4.3%;
    width: 15%;
    position: fixed;
    background-color: #1E213A;
    border-style: solid;
`
const SearchDiv = styled.div`
    margin-top: 25% ;
    width: 75%;
    height: 10%;
    margin-left: 3%;
`

const SearchButton = styled.button`
    background-color: #3c47e9;
    color: #efefef;
    width: 6%;
    height: 5%;
    margin-left: 1%;
    font-family: Raleway;
    font-weight: 100;
    position: fixed;
    font-size: 20px;
    border-style: solid;
`

export { 
    Background, 
    Back, 
    Input, 
    SearchButton,
    SearchDiv
}