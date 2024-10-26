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
         info="Well, hi... I guess this is supposed to be where I write a little bit about myself? I'm not good at these things. I didn't have your tradational learning expeirence.  "
        />

        <HollyCard 
         title="Teacher's pet"
         subtitle="wait... I'm the teacher?"
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. "
        />
       </div>

       <div className='holly-body'>
        <HollyCard 
         title="Little bit of"
         subtitle="darkness and chaos"
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. "
        />
       </div>

       <HollyFooter>
            <HollyFooterDiv1>Outsider NewsLetter Property of:</HollyFooterDiv1><HollyFooterDiv2>Eleanor Dragon</HollyFooterDiv2>
       </HollyFooter>
       </div>
    );
  }
}