import React from 'react';
import ShinzoCard from './shinzocard';
import './shinzo.css';
import Nav from '../app/nav';
import { ShinzoHeader, ShinzoSubtitle, ShinzoFooter, ShinzoFooterDiv1, ShinzoFooterDiv2 } from './styles-shinzo';

export default class Shinzo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="shinzo-page-div">
        <ShinzoHeader>
        <section>
          <div class="content">
            <h1>The&nbsp;Outsiders</h1>
            <h1>The&nbsp;Outsiders</h1>
           </div>
        </section>
          <ShinzoSubtitle>Ebixia's most wanted heros</ShinzoSubtitle>
          <Nav />
        </ShinzoHeader>

        <div className="shinzo-body">
          <ShinzoCard
            title="Shinzo Katetsu"
            subtitle="hey gozerh, it's me... again."
            info={<>Wait I say stuff and you write it down?... Oh you’re doing it right now, well... don’t put that in.... 
            
            Hi I’m Shinzo Katetsu. I’m a member of the Outsider's, and also the team's doctor. I hail from New Ordis; one of the founding families to be exact. I was the third member to join and I’ve never looked backwards. This team is like a family to me and has caused me to grow into the person I am today. I am a doctor and I keep the team healthy and standing. I see to so many wounds and patch each and every one of them every single time. Is that everything I could talk about our work with— 
              </>}  
          />

          <ShinzoCard
            title="Captain, my captain"
            subtitle="land or sea?"
            info={<>Oh, right, outside of the Outsider's
              
              So, I’m the captain of the Black Trident, a ship that mostly does transports for merchants, and  sometimes we sell goods. We have an ever growing crew that anyone may join if the fancy strikes you. My crew is dear to me and treats everyone equally. No one person is above the other on that ship, save for the captain, but only in terms of who is in command. Irregardless of your background or nobility, everyone who joins is equal.
             </>}  
          />
        </div>

        <div className="shinzo-body">
          <ShinzoCard
            title="Ocean Mist"
            subtitle="sea breeze flowing in her hair."
            info={<>I’m an elf of Gozreh, I take my practise of the Duel God of the Sea, Wind, Earth, and Surf very seriously. I teach my crew to at the very least respect these beliefs as they are on my ship. I’ve learned firsthand what happens to those who don’t respect the sea, and I only hope to keep my crew safe as would anyone on the sea. Through Gozreh's power, I learned to harness skills of a warrior and that of and magic user. I have learned to heal with or without his magic and will continue to do so. I am and will continue to work towards being a herald of their power and used it to protect all I can in Ebixia.
            </>}  
          />
        </div>

        <ShinzoFooter>
          <ShinzoFooterDiv1>
            Outsider NewsLetter Property of :
          </ShinzoFooterDiv1>
          <ShinzoFooterDiv2>Eleanor Dragon</ShinzoFooterDiv2>
        </ShinzoFooter>
      </div>
    );
  }
}
