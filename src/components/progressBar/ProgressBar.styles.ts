import { styled } from "styled-components";

interface progressBarProps {
  filled: number;
}

export const ProgressBarContainer = styled.div<progressBarProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 12rem;
  justify-content: center;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 87.5rem;
  width: 96%;

  .pixelCornersWrapper {
    clip-path: polygon(0px calc(100% - 20px),
    4px calc(100% - 20px),
    4px calc(100% - 12px),
    8px calc(100% - 12px),
    8px calc(100% - 8px),
    12px calc(100% - 8px),
    12px calc(100% - 4px),
    20px calc(100% - 4px),
    20px 100%,
    calc(100% - 20px) 100%,
    calc(100% - 20px) calc(100% - 4px),
    calc(100% - 12px) calc(100% - 4px),
    calc(100% - 12px) calc(100% - 8px),
    calc(100% - 8px) calc(100% - 8px),
    calc(100% - 8px) calc(100% - 12px),
    calc(100% - 4px) calc(100% - 12px),
    calc(100% - 4px) calc(100% - 20px),
    100% calc(100% - 20px),
    100% 20px,
    calc(100% - 4px) 20px,
    calc(100% - 4px) 12px,
    calc(100% - 8px) 12px,
    calc(100% - 8px) 8px,
    calc(100% - 12px) 8px,
    calc(100% - 12px) 4px,
    calc(100% - 20px) 4px,
    calc(100% - 20px) 0px,
    20px 0px,
    20px 4px,
    12px 4px,
    12px 8px,
    8px 8px,
    8px 12px,
    4px 12px,
    4px 20px,
    0px 20px);
    position: relative;
  }

  .pixelCornersWrapper {
    width: fit-content;
    height: fit-content;
  }

  .pixelCornersWrapper::after {
    content: "";
    position: absolute;
    clip-path: polygon(0px calc(100% - 20px),
    4px calc(100% - 20px),
    4px calc(100% - 12px),
    8px calc(100% - 12px),
    8px calc(100% - 8px),
    12px calc(100% - 8px),
    12px calc(100% - 4px),
    20px calc(100% - 4px),
    20px 100%,
    calc(100% - 20px) 100%,
    calc(100% - 20px) calc(100% - 4px),
    calc(100% - 12px) calc(100% - 4px),
    calc(100% - 12px) calc(100% - 8px),
    calc(100% - 8px) calc(100% - 8px),
    calc(100% - 8px) calc(100% - 12px),
    calc(100% - 4px) calc(100% - 12px),
    calc(100% - 4px) calc(100% - 20px),
    100% calc(100% - 20px),
    100% 20px,
    calc(100% - 4px) 20px,
    calc(100% - 4px) 12px,
    calc(100% - 8px) 12px,
    calc(100% - 8px) 8px,
    calc(100% - 12px) 8px,
    calc(100% - 12px) 4px,
    calc(100% - 20px) 4px,
    calc(100% - 20px) 0px,
    20px 0px,
    20px 4px,
    12px 4px,
    12px 8px,
    8px 8px,
    8px 12px,
    4px 12px,
    4px 20px,
    0px 20px,
    0px 50%,
    8px 50%,
    8px 24px,
    12px 24px,
    12px 16px,
    16px 16px,
    16px 12px,
    24px 12px,
    24px 8px,
    calc(100% - 24px) 8px,
    calc(100% - 24px) 12px,
    calc(100% - 16px) 12px,
    calc(100% - 16px) 16px,
    calc(100% - 12px) 16px,
    calc(100% - 12px) 24px,
    calc(100% - 8px) 24px,
    calc(100% - 8px) calc(100% - 24px),
    calc(100% - 12px) calc(100% - 24px),
    calc(100% - 12px) calc(100% - 16px),
    calc(100% - 16px) calc(100% - 16px),
    calc(100% - 16px) calc(100% - 12px),
    calc(100% - 24px) calc(100% - 12px),
    calc(100% - 24px) calc(100% - 8px),
    24px calc(100% - 8px),
    24px calc(100% - 12px),
    16px calc(100% - 12px),
    16px calc(100% - 16px),
    12px calc(100% - 16px),
    12px calc(100% - 24px),
    8px calc(100% - 24px),
    8px 50%,
    0px 50%);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #e4012f;
    display: block;
    pointer-events: none;
  }

  .progressBar {
    background-color: rgba(226, 226, 226, .6);
    border-radius: .5rem;
    height: 2.5rem;
    overflow: hidden;
    position: relative;
    width: 17.5rem;
  }

  .loadingBar {
    background-color: red;
    height: 100%;
    transition: width 0.3s;
    width: ${({filled}) => `${filled}%`};
  }

  .progressPercent {
    font-weight: 600;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #eee;
    text-shadow: -1px 0 #555, 0 1px #555, 1px 0 #555, 0 -1px #555;
  }
`