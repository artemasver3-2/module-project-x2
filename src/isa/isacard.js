import React from 'react';
import { IsaStyledCard, IsaTitleCard, IsaSubtitleCard, IsaCardInfo } from './styles-isa';
export default class IsaCard extends React.Component {
constructor(props) {
    super(props);
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.info = props.info;
      }
  render() {
    return (
    <div>
        <IsaStyledCard> 
            <IsaTitleCard>{this.props.title}</IsaTitleCard>
            <IsaSubtitleCard>{this.props.subtitle}</IsaSubtitleCard>
            <IsaCardInfo>{this.props.info}</IsaCardInfo>
        </IsaStyledCard>
    </div>
    );
  }
}