import React from 'react';
import { HollyStyledCard, HollyTitleCard, HollySubtitleCard, HollyCardInfo } from './styles-holly';
export default class HollyCard extends React.Component {
constructor(props) {
    super(props);
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.info = props.info;
      }
  render() {
    return (
    <div>
        <HollyStyledCard> 
            <HollyTitleCard>{this.props.title}</HollyTitleCard>
            <HollySubtitleCard>{this.props.subtitle}</HollySubtitleCard>
            <HollyCardInfo>{this.props.info}</HollyCardInfo>
        </HollyStyledCard>
    </div>
    );
  }
}