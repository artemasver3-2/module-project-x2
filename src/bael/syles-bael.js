import styled from 'styled-components';

 export const BaelHeader = styled.header`
  background-color: #000000;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #197278;

  @media only screen and (max-width: 460px) {
    min-height: 15vh;
    margin-bottom: 0.5rem;
  }
`;

 export const BaelTitle = styled.h1`
  color: #197278;
  text-decoration: none;
  margin-top: 1rem;
  margin-bottom: 3.5rem;
  transition: 1s ease-in-out;
  -webkit-text-stroke: 2px #d6f4f4;
  font-variation-settings: 'wght' 800, 'ital' 1;
  font-size: 4.5rem;
  text-align: center;
  color: transparent;
  font-family: 'Bebas Neue', sans-serif;
  text-shadow: 2.5px 2.5px 0px #197278, 5px 5px 0px #197278;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: rotate(4deg);
    font-variation-settings: 'wght' 100, 'ital' 0;
    text-shadow: 2px 2px 0px #197278, 5px 5px 0px #197278;
  }

  @media only screen and (max-width: 460px) {
    font-size: 2.5rem;
    margin-bottom: 3.75rem;
    margin-top: 2px;
  }
`;

export const BaelSubtitle = styled.h2`
  font-size: 2rem;
  font-style: italic;
  font-family: Kristi;
  color: white;
  margin-top: -4.5rem;
  margin-left: 20rem;
  letter-spacing: 2px;

  @media only screen and (max-width: 460px) {
    font-size: 1.25rem;
    margin-left: 4rem;
  }
`;

export const BaelFooter = styled.footer`
  background-color: #000000;
  min-height: 15vh;
  border-top: 2px solid #197278;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 460px) {
    text-align: center;
    min-height: 10vh;
  }
`;

export const BaelFooterSpan1 = styled.span`
  font-size: 1.75rem;
  font-family: Bebas Neue;
  color: white;
  letter-spacing: 2px;

  @media only screen and (max-width: 460px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    margin-top: -1rem;
  }
`;

export const BaelFooterSpan2 = styled.span`
  font-size: 2rem;
  font-family: Pacifico;
  color: #197278;
  letter-spacing: 2px;
  margin-top: -12px;
  margin-bottom: -1rem;

  @media only screen and (max-width: 460px) {
    font-size: 1rem;
  }
`;

export const StyledBaelCard = styled.div`
width: 80%;
height: 100%;
margin: 0 auto;
padding-bottom: 2%;
text-align: justify;
margin-top: -4rem;
margin-bottom: 2rem;

@media only screen and (max-width : 460px)  {
  width: 80%;
  padding-bottom: 1rem;
};
`;

export const BaelTitleCard = styled.h3`
color: white;
font-size: 3rem;
padding: 1%;
font-family: Bebas Neue, sans-serif;
letter-spacing: 5px;
margin-bottom: 1.75rem;
text-align: center;

@media only screen and (max-width : 460px)  {
  font-size: 1.5rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
};
`;

export const BaelSubtitleCard = styled.h4`
color: white;
font-size: 2.5rem;
font-family: Kristi;
color: #197278;
height: 10%;
width: 55%;
margin-top: -3.75rem;
margin-left: 27rem;
text-align: center;
margin-bottom: 1rem;

@media only screen and (max-width : 460px)  {
  font-size: 1.5rem;
  margin-left: 4rem;
  margin-bottom: .5rem;
};
`;

export const BaelCardInfo = styled.span`
color: white;
font-size: 1rem;
padding: 1rem;
font-family: Lexend, sans-serif;
letter-spacing: 2px; 

@media only screen and (max-width : 460px)  {
  font-size: .75rem;
};
`;