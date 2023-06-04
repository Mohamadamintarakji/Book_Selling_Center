import Wrapper from "../Wrapper/Loading";

const Loading = ({ center }) => {
  return (
    <Wrapper>
      <div id="spinner-container">
        <div id="loading-spinner"></div>
      </div>
    </Wrapper>
  );
};

export default Loading;
