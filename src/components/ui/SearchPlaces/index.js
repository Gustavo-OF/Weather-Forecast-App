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
        height: 36.15rem;
        width: 100%;
        flex-direction: column;
        position: relative;
  }
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
    width: 60%;
    height: 10%;
    margin-left: 5%;
    @media(max-width: 800px) {
        height: auto;
        width: 100%;
        flex-direction: column;
        //border: 1px solid red;
        overflow: auto;
  }
`

const ResultsDiv = styled.div`
    width: 87%;
    height: auto;
    margin-top: -15%;
    //border: 1px solid red;
    margin-left: 15%;
    @media(max-width: 800px) {
        height: 50%;
        width: 100%;
        flex-direction: column;
        margin-left: 20%
        //border: 1px solid red
  }

`
const ListCitiesUl = styled.ul`
    list-style-type: none;
    @media(max-width: 800px) {
        height: auto;
        width: auto;
        margin-top: 20%;
  }
`

const ResultsLi = styled.li`
    font-family: Raleway;
    margin-top: 15%;
    margin-left: -45%;
    height: auto;
    width: auto;
    color: white;
    :hover{
        border: 1px solid grey;
        width: 80%;
        padding: 5% 5% 5% 3%;
    }
    list-style-type: none;
    @media(max-width: 800px) {
        height: auto;
        width: 94%;
        flex-direction: column;
        //border: 1px solid red;
        overflow: auto;
        margin-top: 12%;
  }
`

export { 
    Background, 
    Input, 
    SearchDiv,
    ResultsDiv,
    ResultsLi,
    ListCitiesUl
}