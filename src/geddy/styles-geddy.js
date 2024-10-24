import styled from 'styled-components';

export const GeddyStyledHeader = styled.header`
background-color: #000000;
min-height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: 2px solid #8a5c24;

@media only screen and (max-width : 460px)  {
  min-height: 15vh;
  margin-bottom: .5rem;
};
`;

export const GeddyTitle = styled.h1`
font-size: 4.5rem;
font-family: Bebas Neue;
color: #8a5c24;
text-decoration: none;
letter-spacing: rem;
margin-top: 1rem;
animation: glitch 1s linear infinite;


@keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}

&:before,
&:after{
  content: attr(title);
  position: absolute;
  left: 0;
}

div:before{
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

  @keyframes glitchTop{
    2%,64%{
      transform: translate(2px,-2px);
    }
    4%,60%{
      transform: translate(-2px,2px);
    }
    62%{
      transform: translate(13px,-1px) skew(-13deg); 
    }
  }

&:after{
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    
  @keyframes glitchBotom{
    2%,64%{
      transform: translate(-2px,0);
    }
    4%,60%{
      transform: translate(-2px,0);
    }
    62%{
      transform: translate(-22px,5px) skew(21deg); 
    }
  }
}

@media only screen and (max-width : 460px)  {
  font-size: 2.5rem;
  margin-bottom: 3.75rem;
  margin-top: 2px;
};
`;

export const GeddySubtitle = styled.h2`
font-size: 2rem;
font-style: italic;
font-family: Kristi;
color: white;
margin-top: 4rem;
margin-left: 20rem;
letter-spacing: 2px;

@media only screen and (max-width : 460px)  {
  font-size: 1.25rem;
  margin-left: 4rem;
};
`;

export const GeddyFooter = styled.footer`
background-color: #000000;
min-height: 15vh;
border-top: 2px solid #8a5c24;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (max-width : 460px)  {
  text-align: center;
  min-height: 10vh;
 };
`;

export const GeddyFooterSpan1 = styled.span`
font-size: 1.75rem;
font-family: Bebas Neue;
color: white;
letter-spacing: 2px;

@media only screen and (max-width : 460px)  {
  font-size: 1rem;
  margin-bottom: .5rem;
  margin-top: -1rem;
};
`;

export const GeddyFooterSpan2 = styled.span`
font-size: 2rem;
font-family: Pacifico;
color: #8a5c24;
letter-spacing: 2px;
margin-top: -12px;
margin-bottom:-1rem;

@media only screen and (max-width : 460px)  {
  font-size: 1rem;
 };
`;

export const GeddyStyledCard = styled.div`
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

export const GeddyTitleCard = styled.h3`
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

export const GeddySubtitleCard = styled.h4`
color: white;
font-size: 2.5rem;
font-family: Kristi;
color: #8a5c24;
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

export const GeddyCardInfo = styled.span`
color: white;
font-size: 1rem;
padding: 1rem;
font-family: Lexend, sans-serif;
letter-spacing: 2px; 

@media only screen and (max-width : 460px)  {
  font-size: .75rem;
};
`;

