import { css } from "@emotion/core";

const styles = css`
  margin: 2rem auto;

  a {
    color: dodgerblue;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: deepskyblue;
      text-decoration: underline;
    }
  }

  span {
    font-family: "Raleway", sans-serif;
    font-weight: 600;
  }

  .user-container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .user-img {
    max-width: 200px;
    width: 100%;

    @media (max-width: 834px) {
      max-width: unset;
      text-align: center;
    }

    img {
      border-radius: 50%;
      box-shadow: 2px 2px 5px #666666;
      width: 200px;
    }
  }

  .user-info {
    margin-left: 1rem;
    width: 70%;

    @media (max-width: 834px) {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      width: 80%;
    }
  }
`;

export default styles;
