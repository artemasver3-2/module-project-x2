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
