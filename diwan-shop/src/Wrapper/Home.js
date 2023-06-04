import styled from "styled-components";

const Wrapper = styled.article`
  body {
    font-family: serif;
    background-color: white;
  }
  .product-style {
    border-radius: 4px;
    margin-bottom: 50px;
  }
  .card-style {
    width: 100%;
    /* height: 330px; */
    border: none;
  }
  .card-body {
    height: 275px;
    padding: 0;
    border: 1px solid #e5e4e4;
  }
  .card-footer {
    background-color: white;
    display: flex;
    padding: 10px 0 10px 0;
    justify-content: space-between;
  }
  .card-title {
    height: auto;
    background-color: white;
    margin: 0;
  }
  .card-text {
    padding: 5px 10px;
    margin: 0;
  }
  .add-button {
    background-color: #ffffff;
    border: none;
    color: #10afb4;
    font-size: 16px;
    border-radius: 4px;
    padding: 7px;
    font-weight: bolder;
  }
`;

export default Wrapper;
