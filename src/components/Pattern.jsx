import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    background: lightblue;
    overflow: hidden;
  }

  .container::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, #ffc8dd 10%, transparent 20%),radial-gradient(circle, transparent 10%, #ffafcc 20%);
    background-size: 30px 30px; /* Adjust the size of the pattern */
    animation: moveBackground 12s linear infinite; /* Adjust the animation duration and timing function */
  }

  @keyframes moveBackground {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(20%, 20%);
    }
  }`;

export default Pattern;
