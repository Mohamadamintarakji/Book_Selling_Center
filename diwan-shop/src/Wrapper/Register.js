import styled from "styled-components";

const Wrapper = styled.article`
  body {
    background-color: #f9f9f9;
  }
  h3 {
    color: #d10024;
  }
  .registerform {
    background-color: white;
    width: 390px;
    padding: 30px;
    transform: translate(-50%, -50%);
    margin-left: 50%;
    margin-top: 20%;
    border-radius: 8px;
    border-top: 4px solid #d10024;
  }
  label {
    margin: 0 0 7px 5px;
  }
  .form-control {
    background-color: whitesmoke;
  }
  .registerform button {
    background-color: #d10024;
    border: none;
  }
`;
export default Wrapper;
