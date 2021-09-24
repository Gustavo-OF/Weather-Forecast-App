import styled from "styled-components"

const SearchButton = styled.button`
    background-color: #3c47e9;
    width: 6%;
    height: 5%;
    margin-top: -0.4%;
    margin-left: 1%;
    font-family: Raleway;
    font-weight: 100;
    position: fixed;
    font-size: 18px;
    border: none;
    color: #efefef;
    @media(max-width: 800px) {
        height: 10%;
        padding-top:2%;
        width: 19%;
        flex-direction: column;
        position: relative;
        margin-left: 4%;
  }
`
const Back = styled.div`
    color: #e7e7eb;
    width: 25%;
    float: right;
    margin-right: -7%;
    font-family: Raleway;
    font-weight: 100;
    margin-top: 5%;
    font-size: 30px;
`

export {
    SearchButton,
    Back
}