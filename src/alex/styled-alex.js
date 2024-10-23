import styled from 'styled-components';

export const AlexHeader = styled.header`
  background-color: #000000;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #00492e;

  @media only screen and (max-width: 460px) {
    min-height: 15vh;
    margin-bottom: 0.5rem;
  }
`;

export const AlexSubtitle = styled.h2`
  font-size: 2rem;
  font-style: italic;
  font-family: Kristi;
  color: white;
  margin-top: -1.5rem;
  margin-bottom: 1.75;
  margin-left: 20rem;
  letter-spacing: 2px;

  @media only screen and (max-width: 460px) {
    font-size: 1.25rem;
    margin-left: 4rem;
  }
`;

export const AlexFooter = styled.footer`
  background-color: #000000;
  min-height: 15vh;
  border-top: 2px solid #00492e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 460px) {
    text-align: center;
    min-height: 10vh;
  }
`;

export const AlexFooterSpan1 = styled.span`
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

export const AlexFooterSpan2 = styled.span`
  font-size: 2rem;
  font-family: Pacifico;
  color: #00492e;
  letter-spacing: 2px;
  margin-top: -12px;
  margin-bottom: -1rem;

  @media only screen and (max-width: 460px) {
    font-size: 1rem;
  }
`;

export const AlexStyledCard = styled.div`
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

export const AlexTitleCard = styled.h3`
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

export const AlexSubtitleCard = styled.h4`
color: white;
font-size: 2.5rem;
font-family: Kristi;
color: #00492e;
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

export const AlexCardInfo = styled.span`
color: white;
font-size: 1rem;
padding: 1rem;
font-family: Lexend, sans-serif;
letter-spacing: 2px; 

@media only screen and (max-width : 460px)  {
  font-size: .75rem;
};
`;