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

    @media(max-width: 800px) {
        height: auto;
        width: 100%;
        flex-direction: column;
        position: relative;
  }
`

const DivInformations = styled.div`
    //border: 1px solid red;
    height: 15%;
    width: 100%;
    position: absolute;
    bottom: 0;
    @media(max-width: 800px) {
        height: 100% auto;
        width: 100%;
        flex-direction: column;
        position: relative;
  }
`

const DivSearch = styled.div`
    //border: 1px solid red;
    width: 100%;
    height: 50px;
    margin-top: 2%;
    padding-left: 5%;
    padding-right: 5%;
`

export { 
    Background,
    DivInformations,
    DivSearch,
}