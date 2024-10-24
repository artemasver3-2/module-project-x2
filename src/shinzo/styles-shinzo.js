import styled from 'styled-components';

export const ShinzoHeader = styled.header`
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #011120;
  background-color: #9ec0e9;

  @media only screen and (max-width: 460px) {
    min-height: 15vh;
    margin-bottom: 0.5rem;
  }
`;

export const ShinzoTitle = styled.h1`
  position: relative;
  font-family: Bebas Neue, Arial, sans-serif;
  font-size: 4.5rem;
  color: #011120;
  letter-spacing: .85rem;
  text-transform: uppercase;
  margin-bottom: 4rem;
  margin-top: 3.75rem;
  perspective: 700px;

  &::before,
  &::after {
    content: attr(aria-label);
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    text-shadow: 0.01em 0.01em 0.01em rgba(0, 0, 0, 0.3);
  }

  &::before {
    animation: floatAbove 3.5s ease-in-out infinite;
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
  }

  &::after {
    opacity: 0.65;
    filter: blur(0.01em);
    transform: translate(-50%, -50%) rotateX(31deg);
    animation: floatBelow 3.5s ease-in-out infinite;
    -webkit-clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
  }

  @keyframes floatAbove {
    50% {
      transform: translate(-50%, -60%);
      -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 0% 75%);
      clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
    }
  }

  @keyframes floatBelow {
    50% {
      transform: translate(-50%, -60%) rotateX(10deg);
      -webkit-clip-path: polygon(0% 75%, 100% 75%, 100% 100%, 0% 100%);
      clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
    }
  }

  @media only screen and (max-width: 460px) {
    font-size: 2.5rem;
    margin-bottom: 3.75rem;
    margin-top: 2px;
  }
`;

export const ShinzoSubtitle = styled.h2`
  font-size: 2rem;
  font-style: italic;
  font-family: Kristi;
  font-weight: 300;
  color: #0b5394;
  margin-top: -2.5rem;
  margin-left: 20rem;
  letter-spacing: 2px;

  @media only screen and (max-width: 460px) {
    font-size: 1.25rem;
    margin-left: 4rem;
  }
`;

export const ShinzoFooter = styled.footer`
  background-color: #9ec0e9;
  min-height: 12vh;
  border-top: 2px solid #011120;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 460px) {
    text-align: center;
    min-height: 10vh;
  }
`;

export const ShinzoFooterDiv1 = styled.div`
  font-size: 1.75rem;
  font-family: Bebas Neue;
  color: #011120;
  letter-spacing: 2px; 
  margin-bottom: 0.75rem;
  margin-top: -1rem;

  @media only screen and (max-width: 460px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    margin-top: -1rem;
  }
`;

export const ShinzoFooterDiv2 = styled.div`
  font-size: 2rem;
  font-family: Pacifico;
  color: white;
  letter-spacing: 2px;
  margin-top: -12px;
  margin-bottom: -1rem;

  @media only screen and (max-width: 460px) {
    font-size: 1rem;
  }
`;

export const ShinzoStyledCard = styled.div`
width: 80%;
height: 100%;
margin: 0 auto;
padding-bottom: 2%;
text-align: justify;
margin-top: -4rem;
margin-bottom: -1rem;

@media only screen and (max-width : 460px)  {
  width: 80%;
  padding-bottom: 1rem;
};
`;

export const ShinzoTitleCard = styled.h3`
color: #011120;
font-size: 3rem;
padding: 1%;
font-family: Bebas Neue, sans-serif;
letter-spacing: 10px;
margin-bottom: 1.75rem;
margin-top: 2rem;
text-align: center;

@media only screen and (max-width : 460px)  {
  font-size: 1.5rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
};
`;

export const ShinzoSubtitleCard = styled.h4`
font-size: 2.5rem;
font-family: Kristi;
color: #0b5394;
height: 10%;
width: 55%;
margin-top: -3.25rem;
margin-left: 28rem;
text-align: center;

@media only screen and (max-width : 460px)  {
  font-size: 1.5rem;
  margin-left: 4rem;
  margin-bottom: .5rem;
};
`;

export const ShinzoCardInfo = styled.div`
color: black;
font-size: 1rem;
padding: 1rem;
font-family: Lexend, sans-serif;
letter-spacing: 2px; 

@media only screen and (max-width : 460px)  {
  font-size: .75rem;
};
`;