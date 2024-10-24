import React from 'react';
import AlexCard from './alexcard';
import './alex.css';
import Nav from '../app/nav';
import {
  AlexHeader,
  AlexSubtitle,
  AlexFooter,
  AlexFooterDiv1,
  AlexFooterDiv2,
} from './styled-alex';

export default class AlexDrake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="alex-page-div">
        <AlexHeader>
          <section className="wrapper">
            <div className="top">The Outsiders</div>
            <div className="bottom" aria-hidden="true">
              The Outsiders
            </div>
          </section>
          <AlexSubtitle>Ebixia's most wanted heros</AlexSubtitle>
          <Nav />
        </AlexHeader>
        <div className="alex-body">
          <AlexCard
            title="Inside The Mind Of"
            subtitle="Alex [REDACTED] Drake?"
            info="My name is Alex Drake. I’m not sure what to write about myself exactly. I was born and raised in New Ordis. I lived there for most of my life until I began traveling with my team. My immediate family is my mother, father, and little sister. My father is actually Captain Bruce Drake of the New Ordisian government. He’s my hero, but I think this is supposed to be about me. Where I came from. I’m proficient with every kind of bladed weapon you can find on the continent of Ordisia. It sounds like a boast (and is) but it’s also true. It’s what makes me a competent fighter. I learned a lot of my non-combat skills from a man I would later learn was the flawed duplicate of the legendary wizard Aathem. That made me cold and calculating. My parents always taught me that, more than anything in the world, I should look out for people. For everyone. People I know and love, strangers, and even people I may not like. Everyone needs someone to look after them and, if I have the strength to do so, I have a responsibility to be that someone.That makes me a good leader. No pressure, right?"
          />

          <AlexCard
            title="The Leader Himself"
            subtitle="a man with the will to try"
            info="The Outsiders began as nothing more than myself and co-founder Geddy Splintwalker trying to survive. Due to the machinations of my former employer, we became targets of a wizard council that planned to unleash a black dragon on the world. In our efforts to stop them, we met Shinzo Katetsu, Fainne Uron, and Hollyanna Knox. Some people may be aware that we weren’t successful in that endeavor. A black dragon was indeed unleashed from beneath New Orids. However, we were able to stop it. That fight made us realize that it’s ok to try and fail as long as you never stop trying. We haven’t stopped trying since. Empress Tenju and Bael Volet joined us later. We stopped the tyrant Shenlong Yuya and the psychotic plot to extinguish the sun. Those are just our global exploits, I don’t want to talk about the other things. And there are other things, trust me. There is nothing too small for us or insignificant to us. Whoever you are, wherever you live, we will help you if you need it."
          />
        </div>

        <div className="alex-body">
          <AlexCard
            title="Broody Boy"
            subtitle="why so serious?"
            info="That’s an accurate summary of where I’ve been and where we are now. I like to think The Outsiders will continue our path. We’re building trust and moving from out of the shadows. It always strikes me that so many of the world’s monarchies and governments know us by name and face, but so few people do. It’s why I sanctioned this project of Eleanor’s. I want people to know us. To believe in us. There may only be seven of us, but we’re determined to make this work. The future is one that will be kept safe not by might and magic, but by empathy and kindness. People like us who are willing to lay our lives on the line if it means the rest of you don’t have to. Still no pressure. "
          />
        </div>

        <AlexFooter>
          <AlexFooterDiv1>Outsider NewsLetter Property of :</AlexFooterDiv1>
          <AlexFooterDiv2>Eleanor Dragon</AlexFooterDiv2>
        </AlexFooter>
      </div>
    );
  }
}
