import React, { Component } from 'react';

import {
  Col,
  Div,
  Image,
  Row,
} from 'atomize';

import soundPersonalizationProfiles from '../data/soundPersonalizationProfiles';


class SoundPersonalizationImages extends Component {
  state = {
    activeProfileIndex: 2,
    halftime: true,
  }

  componentDidMount () {
    const HALFTIME_INTERVAL = 1500; // in milliseconds
    
    this.cycleProfileInterval = setInterval(
      () => this.setState(prevState => ({
        halftime: !prevState.halftime,
        activeProfileIndex: (
          (prevState.halftime)
            ? (prevState.activeProfileIndex + 1) % 3
            : prevState.activeProfileIndex
        ),
      })),
      HALFTIME_INTERVAL,
    );
    
  }

  componentWilUnmount () {
    clearInterval(this.cycleProfileInterval);
  }

  getImageStyle = (index) => {
    const { activeProfileIndex } = this.state;

    let translateX = `translateX(-${(activeProfileIndex % 3) * 100}%)`;
    let visibility = (activeProfileIndex === index) ? '' : 'hidden';
    let zIndex = activeProfileIndex + index;
    let transition = 'opacity 1000ms ease 0s';
    let opacity = (activeProfileIndex === index) ? 1 : 0;

    if (this.state.halftime) {
      if (index === activeProfileIndex) {
        visibility = '';
        opacity = 0;
      }
      else if (index === (activeProfileIndex + 1) % 3) {
        translateX = `translateX(-${((activeProfileIndex + 1) % 3) * 100}%)`;
        visibility = '';
        zIndex += 3;
        // transition = 'opacity 1000ms ease 0s';
        opacity = 1;
      }
    }

    return {
      transform: translateX,
      opacity,
      transition,
      zIndex,
      visibility,
    }
  }

  render () {
    return (
      <Row w='100%' align="center">
        <Col size={6}>
          <Div d="flex">
            {
              soundPersonalizationProfiles.map((profile, index) => (
                <Image
                  key={index}
                  style={this.getImageStyle(index)}
                  src={profile.personImage}
                />
              ))
            }
          </Div>
        </Col>
        <Col size={6}>
          <Div d="flex">
            {
              soundPersonalizationProfiles.map((profile, index) => (
                <Image
                  key={index}
                  style={this.getImageStyle(index)}
                  src={profile.soundProfileImage}
                />
              ))
            }
          </Div>
        </Col>
      </Row>
    );
  }
}

export default SoundPersonalizationImages;