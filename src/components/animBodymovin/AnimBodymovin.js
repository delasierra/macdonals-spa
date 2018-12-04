import React, { Component } from 'react';
import bodymovin from 'bodymovin';
import animationData from './b_bodymovin.json';
// import "./App.css";

class AnimBodyMovin extends Component {
  //properties
  animationIsAttached = false;

  //lifecycle
  componentDidMount() {
    this.attachAnimation();
  }

  render() {
    return (
      <div className="container">
        <div
          ref={animationDiv => {
            this.animationContainer = animationDiv;
          }}
        />
      </div>
    );
  }

  //animations
  attachAnimation = () => {
    if (this.animationContainer !== undefined && !this.animationIsAttached) {
      const animationProperties = {
        container: this.animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      };

      bodymovin.loadAnimation(animationProperties);
      bodymovin.play();
    }
  };
}

export default AnimBodyMovin;
