import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #000000;
  min-height: 12vh;
  border-top: 2px solid #62ab37;
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

const StyledFooterDiv1 = styled.div`
  font-size: 1.75rem;
  font-family: Bebas Neue;
  color: white;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;

  @media only screen and (max-width: 460px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    margin-top: -1rem;
  }
`;

const StyledFooterDiv2 = styled.div`
  font-size: 2rem;
  font-family: Pacifico;
  color: #62ab37;
  letter-spacing: 2px;
  margin-top: -12px;

  @media only screen and (max-width: 460px) {
    font-size: 1rem;
  }
`;

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StyledFooter>
        <StyledFooterDiv1>Outsider NewsLetter Property of :</StyledFooterDiv1>
        <StyledFooterDiv2>Eleanor Dragon</StyledFooterDiv2>
      </StyledFooter>
    );
  }
}
