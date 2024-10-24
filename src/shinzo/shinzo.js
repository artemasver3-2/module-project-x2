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
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. "
          />

          <ShinzoCard
            title="Captain, my captain"
            subtitle="land or sea?"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. "
          />
        </div>

        <div className="shinzo-body">
          <ShinzoCard
            title="Ocean Mist"
            subtitle="sea breeze flowing in her hair."
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. "
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
