import React from 'react';
import { GeddyStyledCard, GeddyTitleCard, GeddySubtitleCard, GeddyCardInfo } from './styles-geddy';
export default class GeddyCard extends React.Component {
constructor(props) {
    super(props);
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.info = props.info;
      }
  render() {
    return (
    <div>
        <GeddyStyledCard> 
            <GeddyTitleCard>{this.props.title}</GeddyTitleCard>
            <GeddySubtitleCard>{this.props.subtitle}</GeddySubtitleCard>
            <GeddyCardInfo>{this.props.info}</GeddyCardInfo>
        </GeddyStyledCard>
    </div>
    );
  }
}