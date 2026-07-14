import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>

        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>

        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>

        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>
      </div>
    </StyledWrapper>
  );
};

// const StyledWrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .loader {
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     --color: #00D390;
//     --animation: 2s ease-in-out infinite;
//   }

//   .circle {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;

//     width: 20px;
//     height: 20px;

//     border: 2px solid var(--color);
//     border-radius: 50%;

//     margin: 0 10px;

//     animation: circle-keys var(--animation);
//   }

//   .dot {
//     position: absolute;

//     width: 16px;
//     height: 16px;

//     border-radius: 50%;
//     background-color: var(--color);

//     animation: dot-keys var(--animation);
//   }

//   .outline {
//     position: absolute;

//     width: 20px;
//     height: 20px;

//     border-radius: 50%;

//     animation: outline-keys var(--animation);
//   }


//   .circle:nth-child(2) {
//     animation-delay: .3s;
//   }

//   .circle:nth-child(3) {
//     animation-delay: .6s;
//   }

//   .circle:nth-child(4) {
//     animation-delay: .9s;
//   }


//   .circle:nth-child(2) .dot {
//     animation-delay: .3s;
//   }

//   .circle:nth-child(3) .dot {
//     animation-delay: .6s;
//   }

//   .circle:nth-child(4) .dot {
//     animation-delay: .9s;
//   }


//   @keyframes circle-keys {
//     0% {
//       transform: scale(1);
//       opacity: 1;
//     }

//     50% {
//       transform: scale(1.5);
//       opacity: .5;
//     }

//     100% {
//       transform: scale(1);
//       opacity: 1;
//     }
//   }


//   @keyframes dot-keys {
//     0% {
//       transform: scale(1);
//     }

//     50% {
//       transform: scale(0);
//     }

//     100% {
//       transform: scale(1);
//     }
//   }


//   @keyframes outline-keys {
//     0% {
//       transform: scale(0);
//       outline: solid 20px var(--color);
//       opacity: 1;
//     }

//     100% {
//       transform: scale(1);
//       outline: solid 0 transparent;
//       opacity: 0;
//     }
//   }
// `;

export default Loader;