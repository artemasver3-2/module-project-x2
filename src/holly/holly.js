import React from 'react';
import HollyCard from './hollycard';
import './holly.css';
import Nav from '../app/nav';
import { HollyHeader, HollyTitle, HollySubtitle, HollyFooter, HollyFooterDiv1, HollyFooterDiv2 } from './styles-holly';

export default class Holly extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
        <div className='holly-page-div'>
      <HollyHeader>
        <HollyTitle>The Outsiders</HollyTitle>
        <HollySubtitle>Ebixia's most wanted heros</HollySubtitle>
        <Nav />
      </HollyHeader>

       <div className='holly-body'>
        <HollyCard 
         title="Hollyanna Knox"
         subtitle="duchess... among other things."
         info={<>Well, hi... I guess this is supposed to be where I talk a little bit about myself? I'm not good at these things. I didn't have your traditional learning experience, which I hear is where you learn to properly introduce yourself. I didn’t really have your traditional upbringing, to be fair. I was born in a small village outside of Banetrail, went to school there actually, which would be appoint of pride if there weren’t kind of di– I’ve been told I can’t say that here. Either way, let’s just say, even if I hold the title of Duchess and hero these days, I have a simple set of roots, slightly rotted, but they are spread through Rock’s Hollow and Banetrail enough that I can call both of them <text className='italics'>mine</text> in a way. I did have a home in both places, but I gave my childhood home away recently. I’m babbling, sorry… I don’t think we should talk much about my childhood, but I do think I am supposed to be introducing myself, so, these days I live mostly in [redacted] with the other Outsider’s. It’s a nice little spot, lots of [redacted], and [redacted]. I enjoy my time there as well as the time I spend in Banetrail at my place there. Banetrail has been so welcoming and they seem to be <text className='italics'>proud</text> of me, which is not something I can say I’ve had a lot in my life, so I’m happy to be Hollyanna Knox, hero of the land, Banetrail’s own Duchess/Academic. Teaching is not something I would have ever seen myself as capable of growing up, but I thin we’ve all come a long way, separately and as a team.
          </>}  
        />

        <HollyCard 
         title="Teacher's pet"
         subtitle="wait... I'm the teacher?"
         info={<>I will say, being a teacher has been a wonderful experience, though stressful at times, it brings me a sense of joy and purpose that is like, but wholly different from what I find being an Outsider. I have one kid, a little troublemaker with a lot of talent, that reminds me a lot of myself, so of course, he’s the one I butt heads with the most, but he’s secretly one of my favorites, though don’t tell Irethis that, Veria would probably laugh but Irethis might get that one look she gets when I say the wrong thing. There’s a few kids in my class that remind me of myself in some way as a kid, the silent one with drive and unmatched talent, the one full of adoration for her heroes, all of them definitely have a special place in my heart in some way, even the kids who struggle, honestly, probably more so the ones that struggle at times. I am self taught in just about every skill I have. It’s life changing to see the look of joy on their faces when they finally cast a spell after hitting the floor for an hour. <text className='italics'>No, I am not dropping children onto their heads on the floor.</text> They were trying to learn Feather Fall, so I let them jump from their desks for an hour. Listen, kids are malleable, they’ll be <text className='italics'>fine</text>. Besides, if I let them, these kids would jump off the building. I mean, literally more than half of them tried. So… really I think I’m doing their parent’s, and the Academy, a favor here by sticking to the desks. 
          </>}  
        />
       </div>

       <div className='holly-body'>
        <HollyCard 
         title="Little bit of"
         subtitle="darkness and chaos"
         info={<>
          Things haven’t always been easy for me, even being a hero and a teacher aren’t things I would call <text className='italics'>easy</text>. Actually, the opposite, to be fair and wholly honest. It’s <text className='italics'>hard</text>, and I mess up, <text className='italics'>all the time</text>. I will say though, I am learning to learn from those mistakes, or at least, I am really trying to be a better person, friend, and hero to everyone around me every day. Not that I can say I think I am doing a very good job but, I am doing a job at least, three of them if you count that one. I have a bit of a sordid past, even more so if you consider my less than ideal childhood, but I try to remember that my past does not define who I am today, who I want to be tomorrow, and who I hope to be in the future. It’s not easy doing the things we do, it’s not easy being a person in <text className='italics'>general</text> but when you add power, money, magic, and the horrors of the world into the mix, it gets even more complicated and the lines get so <text className='italics'>blurry</text> you can’t distinguish who drew them in the first place and then by then, does it even matter? Sorry… It’s been a... <text className='italics'>rough</text> few months… honestly. Still, things are looking up, I hope. 
          
          </>}  
        />
       </div>

       <HollyFooter>
            <HollyFooterDiv1>Outsider NewsLetter Property of:</HollyFooterDiv1><HollyFooterDiv2>Eleanor Dragon</HollyFooterDiv2>
       </HollyFooter>
       </div>
    );
  }
}