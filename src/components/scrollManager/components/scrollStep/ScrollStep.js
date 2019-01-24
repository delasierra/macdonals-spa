import React, { Component } from 'react';

class ScrollStep extends Component {
  childrenWithStepProps;
  stepWraperBoundaries;

  constructor(props) {
    super(props);
    this.state = {
      stepWidth: null,
      stepHeight: null,
      relativePosX: null,
      relativePosY: null,
      isInViewport: null,
    };
  }

  getRelativePosX() {
    return Math.abs(this.stepWraperBoundaries.left - window.innerWidth);
  }

  getRelativePosY() {
    return Math.abs(this.stepWraperBoundaries.top - window.innerHeight);
  }

  isStepInViewport() {
    return (
      this.stepWraperBoundaries.top < window.innerHeight &&
      this.stepWraperBoundaries.bottom > 0
    );
  }

  componentWillUpdate(nextProps, nextState) {
    this.stepWraperBoundaries = this.props.refProp.current.getBoundingClientRect();

    nextState.stepWidth = this.stepWraperBoundaries.width;
    nextState.stepHeight = this.stepWraperBoundaries.height;
    nextState.relativePosX = this.getRelativePosX();
    nextState.relativePosY = this.getRelativePosY();
    nextState.isInViewport = this.isStepInViewport();

    // console.log('this.props', this.props);
    // console.log('nextProps', nextProps);
  }

  render() {
    this.childrenWithStepProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { ...this.state, ...this.props })
    );
    // console.log('this.props', this.props);
    // console.log('this.state', this.state);
    // console.log(this.childrenWithStepProps);
    {
      /*return <div ref={el => (this.stepWraper = el)}> {this.childrenWithStepProps} </div>;*/
    }
    return <div ref={this.props.refProp}> {this.childrenWithStepProps} </div>;
  }
}

export default ScrollStep;
