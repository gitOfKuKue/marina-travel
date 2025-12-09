import React from "react";
import styled from "styled-components";

const SubmitBtn = () => {
  return (
    <StyledWrapper>
      <button className="button">Submit</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --font-color: #323232;
    --bg-color: #fff;
    --main-color: #323232;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
  }

  .button:active {
    box-shadow: 0px 0px var(--main-color);
    transform: translate(3px, 3px);
  }
`;

export default SubmitBtn;
