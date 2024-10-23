import React from 'react';
import { FainneStyledCard, FainneTitleCard, FainneSubtitleCard, FainneCardInfo } from './styles-fainne';

export default class FainneCard extends React.Component {
constructor(props) {
    super(props);
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.info = props.info;
      }
  render() {
    return (
    <div className='fainne-uron'>
        <FainneStyledCard> 
            <FainneTitleCard>{this.props.title}</FainneTitleCard>
            <FainneSubtitleCard>{this.props.subtitle}</FainneSubtitleCard>
            <FainneCardInfo>{this.props.info}</FainneCardInfo>
        </FainneStyledCard>
    </div>
    );
  }
}