import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 2%;
  text-align: justify;
  text-align-last: center;
  margin-top: -4rem;

  @media only screen and (max-width: 460px) {
    width: 80%;
    padding-bottom: 1rem;
  }
`;

const StyledTitleCard = styled.h3`
  color: white;
  font-size: 3rem;
  padding: 1%;
  font-family: Bebas Neue, sans-serif;
  letter-spacing: 2px;
  margin-bottom: 1.75rem;
  margin-top: 1.75rem;
  text-align: justify;
  text-align-last: center;
  margin-bottom: 2.2rem;

  @media only screen and (max-width: 460px) {
    font-size: 1.5rem;
    margin-top: 5rem;
    margin-bottom: 3.5rem;
  }
`;

const StyledSubtitleCard = styled.h4`
  color: white;
  font-size: 2.2rem;
  font-family: Birthstone;
  color: #62ab37;
  height: 10%;
  width: 55%;
  margin-top: -3.75rem;
  margin-left: 30rem;
  text-align: justify;
  text-align-last: center;
  word-spacing: .5rem;
  @media only screen and (max-width: 460px) {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    width: 95%;
  }
`;

const StyledCardInfo = styled.div`
  color: white;
  font-size: 1rem;
  padding: 1rem;
  font-family: Lexend, sans-serif;
  letter-spacing: 2px;

  @media only screen and (max-width: 460px) {
    font-size: 0.75rem;
  }
`;

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.info = props.info;
  }
  render() {
    return (
      <StyledCard>
        <StyledTitleCard>{this.props.title}</StyledTitleCard>
        <StyledSubtitleCard>{this.props.subtitle}</StyledSubtitleCard>
        <StyledCardInfo>{this.props.info}</StyledCardInfo>
      </StyledCard>
    );
  }
}
