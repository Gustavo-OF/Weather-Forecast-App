import styled from "styled-components";

const DivIcon = styled.div`
    //border: 1px solid black;
    height: auto;
    width: auto;
    margin-top: 20%;
`

const IconCenter = styled.svg`
    width: 150px;
    height: 150px;
    position: relative;
    display: block;
    margin: auto;
`
const IconLeftBottom = styled.svg`
    width: 75px;
    height:75px;
    opacity:0.3;
    position: absolute;
    left: -7%;
    margin-top:1%;
`
const IconLeftUp = styled.svg`
    width: 75px;
    height:75px;
    opacity:0.3;
    position: absolute;
    left: -5%;
    margin-top: -50%;
`

const IconRightBottom = styled.svg`
    width: 75px;
    height:75px;
    opacity:0.3;
    float: right;
    margin-top: 4%; 
    margin-right: -6%;
`

const IconRightUp = styled.svg`
    width: 75px;
    height:75px;
    opacity:0.3;
    float: right;
    margin-top: -48%;
    margin-right: -20%;
    position: relative;
`
const IconLocalization = styled.svg`
    height: 20px;
    width: 18px;
`

export { 
    IconCenter, 
    IconLeftBottom,
    IconLeftUp, 
    IconRightBottom,
    IconRightUp,
    IconLocalization,
    DivIcon
}