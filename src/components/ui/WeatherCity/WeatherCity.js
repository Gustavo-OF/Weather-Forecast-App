import styled from "styled-components"

const Background = styled.div`
    width: 25%;
    height: 60.4em;
    float: left;
    background-color: #1E213A;
    color: white;
    margin-left: -0.3%;
    margin-top: -0.3%;
`

const DivCloud = styled.div`
    border: 1px solid black;
    height: auto;
    width: auto;
    margin-top: 30%;
`

const CloudCenter = styled.svg`
    width: 150px;
    height: 150px;
    position: relative;
    display: block;
    margin: auto;
`
const CloudLeftBottom = styled.svg`
    width: 75px;
    height:75px;
    opacity:0.3;
    position: relative;
    top: 93px;
    margin: 0 0 0 -40px;
`

const H1 = styled.h1`
    font-family: sans-serif;
    text-align: center;
    font-weight: 50;
`


export { 
    Background, 
    CloudCenter, 
    H1, 
    DivCloud,
    CloudLeftBottom 
}