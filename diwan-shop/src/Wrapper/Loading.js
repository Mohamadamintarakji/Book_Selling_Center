import styled from "styled-components";

const Wrapper = styled.main`
  body {
    background: #cad2de;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  #loading-spinner {
    width: 60px;
    height: 60px;
    position: relative;
    margin: 35%auto;
    border: 3px solid red;
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Wrapper;
