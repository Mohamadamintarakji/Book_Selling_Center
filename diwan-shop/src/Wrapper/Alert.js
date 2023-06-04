import styled from "styled-components";

const Wrapper = styled.article`
  .alert-option {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 44;
    width: 445px;
    height: 340px;
    background-color: white;
    transform: translate(-50%, -50%);
    display: block;
    box-shadow: 1px 0px 10px #b0afaf;
    padding: 30px;
  }
  .alert-option .option-box {
    width: 100%;
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Wrapper;
