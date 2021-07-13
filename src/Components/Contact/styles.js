import { css } from "styled-components";

const styles = css`
  min-height: calc(100vh - 10vh);
  .intro {
    display: flex;
    flex-direction: column;
  }
  .intro > span {
    display: block;
    font-size: 1.5vw;
    padding: 0 10vw;
    line-height: 6vh;
  }
  .intro #title {
    text-align: center;
    font-size: 3vw;
    padding: 1vh 0;
    line-height: 15vh;
  }
  .qr-area {
    text-align: center;
  }
  .qr-area > img {
    display: inline-block;
  }
  .qr-area > span {
    display: block;
  }
  .add-line-btn {
    max-width: 35vw;
    min-height: 10vh;
    font-size: 2vw;
    line-height: 7vw;
    margin: 3vh auto;
    border-radius: 8px;
  }
`;

export default styles;