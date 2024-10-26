import styled from 'styled-components';

export const GeddyStyledHeader = styled.header`
  background-color: #000000;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #8a5c24;

  @media only screen and (max-width: 460px) {
    min-height: 15vh;
    margin-bottom: 0.5rem;
  }
`;

export const GeddyTitle = styled.h1`
  font-size: 4.5rem;
  font-family: Bebas Neue;
  color: white;
  text-decoration: none;
  letter-spacing: rem;
  margin-top: 1rem;
  margin-bottom: -0.75rem;
  transition: 1s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(-1, 1);
    color: #8a5c24;
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);
  }

  @media only screen and (max-width: 460px) {
    font-size: 2.5rem;
    margin-bottom: 3.75rem;
    margin-top: 2px;
  }
`;

export const GeddySubtitle = styled.h2`
  font-size: 2rem;
  font-style: italic;
  font-family: Kristi;
  color: #8a5c24;
  margin-left: 20rem;
  letter-spacing: 2px;

  @media only screen and (max-width: 460px) {
    font-size: 1.25rem;
    margin-left: 4rem;
  }
`;

export const GeddyFooter = styled.footer`
  background-color: #000000;
  min-height: 12vh;
  border-top: 2px solid #8a5c24;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 460px) {
    text-align: justify;
    text-align-last: center;
    min-height: 10vh;
  }
`;

export const GeddyFooterDiv1 = styled.div`
  font-size: 1.75rem;
  font-family: Bebas Neue;
  color: white;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
  margin-top: -1rem;

  @media only screen and (max-width: 460px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    margin-top: -1rem;
  }
`;

export const GeddyFooterDiv2 = styled.div`
  font-size: 2rem;
  font-family: Pacifico;
  color: #8a5c24;
  letter-spacing: 2px;
  margin-top: -12px;
  margin-bottom: -1rem;

  @media only screen and (max-width: 460px) {
    font-size: 1rem;
  }
`;

export const GeddyStyledCard = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 2%;
  text-align: justify;
  text-align-last: center;
  :justify ;
  margin-top: -2rem;
  margin-bottom: -1rem;

  @media only screen and (max-width: 460px) {
    width: 80%;
    padding-bottom: 1rem;
  }
`;

export const GeddyTitleCard = styled.h3`
  color: white;
  font-size: 3rem;
  padding: 1%;
  font-family: Bebas Neue, sans-serif;
  letter-spacing: 5px;
  text-align: justify;
  text-align-last: center;
  :center ;

  @media only screen and (max-width: 460px) {
    font-size: 1.5rem;
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
`;

export const GeddySubtitleCard = styled.h4`
  color: white;
  font-size: 2.5rem;
  font-family: Kristi;
  color: #8a5c24;
  height: 10%;
  width: 55%;
  margin-top: -1.3rem;
  margin-left: 27rem;
  text-align: justify;
  text-align-last: center;
  :center ;
  margin-bottom: 1rem;

  @media only screen and (max-width: 460px) {
    font-size: 1.5rem;
    margin-left: 4rem;
    margin-bottom: 0.5rem;
  }
`;

export const GeddyCardInfo = styled.div`
  color: white;
  font-size: 1rem;
  padding: 1rem;
  font-family: Lexend, sans-serif;
  letter-spacing: 2px;

  @media only screen and (max-width: 460px) {
    font-size: 0.75rem;
  }
`;
