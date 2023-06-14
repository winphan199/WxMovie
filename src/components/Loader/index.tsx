import styled from 'styled-components';

const CSSLoader = styled.div.attrs((props) => ({
  className: props.className,
}))`
  & {
    width: 50px;
    height: 50px;
    display: grid;
    border: 4px solid #0000;
    border-radius: 50%;
    border-color: rgba(0, 0, 0, 0.5) #0000;
    animation: s6 1s infinite linear;
    &::before,
    &::after {
      content: '';
      grid-area: 1/1;
      margin: 2px;
      border: inherit;
      border-radius: 50%;
    }
    &::before {
      border-color: #766df4 #0000;
      animation: inherit;
      animation-duration: 0.5s;
      animation-direction: reverse;
    }
    &::after {
      margin: 8px;
    }

    @keyframes s6 {
      100% {
        transform: rotate(1turn);
      }
    }
  }
`;

function Loader() {
  return <CSSLoader />;
}

export default Loader;
