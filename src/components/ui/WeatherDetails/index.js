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
    @media(max-width: 800px) {
        height: 100%;
        width: 100%;
        flex-direction: column;
        position: relative;
        margin-right: 0.5%;
  }
`
const NextDaysDiv = styled.div`
    //border: 1px solid red;
    height: 200px;
    width: 70%;
    margin-top: 5%;
    margin-left: 10%;
    display: flex;
    @media(max-width: 800px) {
        height: 100%;
        width: 80%;
        flex-direction: column;
        //border: 1px solid red;
        overflow: auto;
        display: inline-block;
  }
`

const NextDays = styled.div`
    width: 25%;
    height: 85%;
    margin: 0 2% 0 2%;
    float: right;
    position: relative;   
    background-color: #1E213A;
    @media(max-width: 800px) {
        height: 100%;
        width: 45%;
        flex-direction: row;
        margin: 2% 2% 2% 3%;
        //border: 1px solid red;
        overflow: auto;
        display: inline-block;
  }
`

const DivSpaceHighlights = styled.div`
    //border: 1px solid red;
    height: 60%;
    position: fixed;
    bottom: 0;
    width: 51%;
    margin-left: 8.5%;
        @media(max-width: 800px) {
        height: 100%;
        width: 80%;
        flex-direction: column;
        //border: 1px solid red;
        position: relative;
  }
`

const DivHighlightsLeft = styled.div`
    //border: 1px solid black;
    width: 40%;
    height: 38%;
    margin-top: 1%;
    margin-right: 5%;
    float: left;
    background-color: #1E213A;
    @media(max-width: 800px) {
        height: 100%;
        width: 100%;
        flex-direction: column;
        //border: 1px solid red;
        position: relative;
  }
`
const DivHighlightsRight = styled.div`
    //border: 1px solid black;
    width: 40%;
    height: 38%;
    margin-top: 1%;
    float: right;
    background-color: #1E213A;
            @media(max-width: 800px) {
        height: 100%;
        width: 100%;
        flex-direction: column;
        //border: 1px solid red;
        position: relative;
  }
`
const IconImg = styled.div`
    width: 50%;
    height:3%;
    margin-left: 25%;
`

export { 
    Background,
    NextDaysDiv, 
    NextDays,
    DivSpaceHighlights,
    DivHighlightsLeft,
    DivHighlightsRight,
    IconImg
}