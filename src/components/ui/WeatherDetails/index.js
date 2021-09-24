import styled from "styled-components"

const Background = styled.div`
    background-color: #100e1d;
    float: right;
    width: 75.4%;
    margin-left: 24%;
    margin-top: -0.6%;  
    height: 100%;
    position: absolute;
    overflow: hidden;
`
const NextDaysDiv = styled.div`
    //border: 1px solid red;
    height: 200px;
    width: 70%;
    margin-top: 5%;
    margin-left: 10%;
    display: flex;
`

const NextDays = styled.div`
    width: 25%;
    height: 85%;
    margin: 0 2% 0 2%;
    float: right;
    position: relative;   
    background-color: #1E213A;
`

const DivSpaceHighlights = styled.div`
    //border: 1px solid red;
    height: 60%;
    position: fixed;
    bottom: 0;
    width: 51%;
    margin-left: 8.5%;
`

const DivHighlightsLeft = styled.div`
    //border: 1px solid black;
    width: 40%;
    height: 38%;
    margin-top: 1%;
    margin-right: 5%;
    float: left;
    background-color: #1E213A;
`
const DivHighlightsRight = styled.div`
    //border: 1px solid black;
    width: 40%;
    height: 38%;
    margin-top: 1%;
    float: right;
    background-color: #1E213A;
`
const IconImg = styled.div`
    width: 50%;
    height:3%;
    margin-left: 25%;
`
const ChangeMeasureDiv = styled.div`
    //border: 1px solid red;
    height: 5%;
    width: 12%;
    float: right;
    margin-right: 21.5%;
    margin-top: 1%;
`

const CelsiusDiv = styled.p`
    
`

const FarDiv = styled.p`
`

export { 
    Background,
    NextDaysDiv, 
    NextDays,
    DivSpaceHighlights,
    DivHighlightsLeft,
    DivHighlightsRight,
    IconImg,
    ChangeMeasureDiv,
    CelsiusDiv,
    FarDiv
}