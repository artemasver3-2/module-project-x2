import React from 'react';
import { AlexStyledCard, AlexTitleCard, AlexSubtitleCard, AlexCardInfo } from './styled-alex'

export default class AlexCard extends React.Component {
constructor(props) {
    super(props);
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.info = props.info;
      }
  render() {
    return (
    <div>
        <AlexStyledCard> 
            <AlexTitleCard>{this.props.title}</AlexTitleCard>
            <AlexSubtitleCard>{this.props.subtitle}</AlexSubtitleCard>
            <AlexCardInfo>{this.props.info}</AlexCardInfo>
        </AlexStyledCard>
    </div>
    );
  }
}