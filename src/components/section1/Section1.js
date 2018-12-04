import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Section1 extends Component {
  // Lifeclycle hooks
  componentDidMount() {
    console.log('[Section1] props', this.props);
    this.createAnimationTl(this.elementRefs);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.relativePosY < nextProps.stepHeight) {
      let windowScroll = nextProps.relativePosY / nextProps.stepHeight;
      this.introAnimTl.progress(windowScroll);
    }
  }

  // Methods
  createCubes() {
    let elementList = [];
    this.elementRefs = [];
    this.elementsData = [{ id: 'cube1', ref: this.cube1 }, 2, 3, 4, 5]; //TODO: move to a independent file/service

    elementList = this.elementsData.map((cube, i) => {
      this.elementRefs[i] = React.createRef();
      return <div ref={this.elementRefs[i]} key={cube.toString()} className="cube" />;
    });

    return elementList;
  }

  createAnimationTl(elementRefs) {
    this.introAnimTl = new TimelineLite({ paused: true });
    this.introAnimTl.duration(100);

    for (var i = 0; i < elementRefs.length; i++) {
      this.introAnimTl.from(elementRefs[i].current, 5, { y: 200 * i }, 'intro');
      this.introAnimTl.to(elementRefs[i].current, 5, { borderRadius: '50%' }, 'intro');
      this.introAnimTl.from(
        elementRefs[i].current,
        5,
        { backgroundColor: '#ffffff' },
        'intro'
      );
    }
  }

  getCubes() {
    if (!this.elementList) {
      this.elementList = this.createCubes();
    }
    return this.elementList;
  }

  animate() {
    this.introAnimTl.play();
  }

  render() {
    return (
      <div ref={this.props.refProp} className="row section1">
        {this.getCubes()}
      </div>
    );
  }
}

export default Section1;
