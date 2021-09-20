import styled from "styled-components"

const Background = styled.div`
    background-color: #100e1d;
    float: right;
    width: 75.4%;
    margin-left: 24%;
    margin-top: -0.6%;  
    height: 41.09em;
    position: absolute;
    overflow: hidden;
`

const NextDaysDiv = styled.div`
    width: 100px;
    height: 140px;
    top: 13%;
    padding-top:5px;
    margin-right: 8%;
    float: right;
    position: relative;   
    background-color: #1E213A;
`

const DivSpaceHighlights = styled.div`
    //border: 1px solid black;
    width: 200px;
    height: 60%;
    position: fixed;
    bottom: 0;
    width: 61%;
    margin-left: 8.5%;
`

const DivHighlights = styled.div`
    border: 1px solid black;
    width: 260px;
    height: 140px;
    margin-top: 25px;
    margin-left: 100px;
    float: left;
    background-color: #1E213A;
`

export { 
    Background, 
    NextDaysDiv,
    DivSpaceHighlights,
    DivHighlights
}