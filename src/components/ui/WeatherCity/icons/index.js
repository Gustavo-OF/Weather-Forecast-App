import styled from "styled-components";

const DivIcon = styled.div`
    //border: 1px solid black;
    height: auto;
    width: auto;
    margin-top: 20%;
`

const IconCenter = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`
const IconLeftBottom = styled.div`
    width: 75px;
    height:75px;
    opacity:0.3;
    position: absolute;
    left: -7%;
    margin-top:1%;
`
const IconLeftUp = styled.div`
    width: 75px;
    height:75px;
    opacity:0.3;
    position: absolute;
    left: -5%;
    margin-top: -50%;
`

const IconRightBottom = styled.div`
    width: 75px;
    height:75px;
    opacity:0.3;
    float: right;
    margin-top: 4%; 
    margin-right: -6%;
`

const IconRightUp = styled.div`
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