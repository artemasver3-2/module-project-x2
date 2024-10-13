import React from 'react';
import styled from 'styled-components'
import ShinzoCard from './shinzocard';
import './shinzo.css';
import Nav from '../app/nav';

const StyledHeader = styled.header`
background-color: #9EC0E9;
min-height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: 2px solid #011120;

@media only screen and (max-width : 460px)  {
  min-height: 15vh;
  margin-bottom: .5rem;
};
`;

const StyledTitle = styled.h1`
font-family: Bebas Neue;
font-size: 4.5rem;
color: #011120;
margin-top: 3rem;
margin-bottom: 7rem;
text-transform: uppercase;
perspective: 500px;
&:before,
:after {
    content: attr(aria-label);
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    text-shadow: 0.01em 0.01em 0.01em rgba(0, 0, 0, 0.3);
}
&:before {
    animation: floatAbove 3.5s ease-in-out infinite;
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
            clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
}
&::after {
    opacity: 0.65;
    filter: blur(0.20em);
    transform: translate(-50%, -50%) rotateX(21deg);
    animation: floatBelow 3.5s ease-in-out infinite;
    -webkit-clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
            clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
}


@keyframes floatAbove {
    50% {
        transform: translate(-50%, -60%);
        -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
                clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
    }
}

@keyframes floatBelow {
    50% {
        transform: translate(-50%, -60%) rotateX(10deg);
        -webkit-clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
                clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
    }
}


@media only screen and (max-width : 460px)  {
  font-size: 2.5rem;
  margin-bottom: 3.75rem;
  margin-top: 2px;
};
`;

const StyledSubtitle = styled.h2`
font-size: 2rem;
font-style: italic;
font-family: Kristi;
color: #011120;
margin-top: -4.5rem;
margin-left: 20rem;
letter-spacing: 2px;


@media only screen and (max-width : 460px)  {
  font-size: 1.25rem;
  margin-left: 4rem;
};
`;

const StyledFooter = styled.footer`
background-color: #9EC0E9;
min-height: 15vh;
border-top: 2px solid #011120;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (max-width : 460px)  {
  text-align: center;
  min-height: 10vh;
 };
`;

const StyledFooterSpan1 = styled.span`
font-size: 1.75rem;
font-family: Bebas Neue;
color: #011120;
letter-spacing: 2px;

@media only screen and (max-width : 460px)  {
  font-size: 1rem;
  margin-bottom: .5rem;
  margin-top: -1rem;
};
`;

const StyledFooterSpan2 = styled.span`
font-size: 2rem;
font-family: Pacifico;
color: white;
letter-spacing: 2px;
margin-top: -12px;
margin-bottom:-1rem;

@media only screen and (max-width : 460px)  {
  font-size: 1rem;
 };
`;



export default class Shinzo extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
        <div className='shinzo-page-div'>
      <StyledHeader>
        <StyledTitle aria-label="TheOutsiders"></StyledTitle>
        <StyledSubtitle>Ebixia's most wanted heros</StyledSubtitle>
        <Nav />
      </StyledHeader>

       <div className='shinzo-body'>
        <ShinzoCard 
         title="Shinzo Katetsu"
         subtitle="hey gozerh, it's me... again."
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. "
        />

        <ShinzoCard 
         title="Captain, my captain"
         subtitle="land or sea?"
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. "
        />
       </div>

       <div className='shinzo-body'>
        <ShinzoCard 
         title="Ocean Mist"
         subtitle="sea breeze in her hair."
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. "
        />
       </div>

       <StyledFooter>
            <StyledFooterSpan1>Outsider NewsLetter Property of:</StyledFooterSpan1><StyledFooterSpan2>Eleanor Dragon</StyledFooterSpan2>
       </StyledFooter>
       </div>
    );
  }
}