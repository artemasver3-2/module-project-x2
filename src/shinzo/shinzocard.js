import React from 'react';
import { ShinzoStyledCard, ShinzoTitleCard, ShinzoSubtitleCard, ShinzoCardInfo } from './styles-shinzo';

export default class ShinzoCard extends React.Component {
constructor(props) {
    super(props);
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.info = props.info;
    }

  render() {
    return (
    <div>
        <ShinzoStyledCard> 
            <ShinzoTitleCard>{this.props.title}</ShinzoTitleCard>
            <ShinzoSubtitleCard>{this.props.subtitle}</ShinzoSubtitleCard>
            <ShinzoCardInfo>{this.props.info}</ShinzoCardInfo>
        </ShinzoStyledCard>
    </div>
    );
  }
}