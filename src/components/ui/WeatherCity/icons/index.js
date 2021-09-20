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
    left: -3%;
    margin-top:1%;
`
const IconLeftUp = styled.svg`
    width: 75px;
    height:75px;
    opacity:0.3;
    position: absolute;
    left: -1%;
    margin-top: -12%;
`

const IconRightBottom = styled.svg`
    width: 75px;
    height:75px;
    opacity:0.3;
    float: right;
    margin-right:-10%;
    margin-top: 4%; 
`

const IconRightUp = styled.svg`
    width: 75px;
    height:75px;
    opacity:0.3;
    float: right;
    margin-top: -48%;
    margin-right: -17%;
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