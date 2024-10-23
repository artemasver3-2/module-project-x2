import React from 'react';
import { StyledBaelCard, BaelTitleCard, BaelSubtitleCard, BaelCardInfo } from './syles-bael';

export default class BaelCard extends React.Component {
constructor(props) {
    super(props);
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.info = props.info;
      }
  render() {
    return (
    <div>
        <StyledBaelCard> 
            <BaelTitleCard>{this.props.title}</BaelTitleCard>
            <BaelSubtitleCard>{this.props.subtitle}</BaelSubtitleCard>
            <BaelCardInfo>{this.props.info}</BaelCardInfo>
        </StyledBaelCard>
    </div>
    );
  }
}