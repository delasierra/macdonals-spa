import React, { Component } from 'react';
import IntroGraphic from './introGraphic/IntroGraphic';
import AnimBodymovin from '../../components/animBodymovin/AnimBodymovin';

class Home extends Component {
  render() {
    return (
      <section ref={this.props.refProp} className="scene-home">
        <div className="wrapper">
          <div className="logo">logo</div>
        </div>
        <div className="wrapper">
          <AnimBodymovin />
        </div>
        <IntroGraphic />
      </section>
    );
  }
}

export default Home;
