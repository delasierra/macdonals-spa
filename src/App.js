import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { TweenLite, Elastic, Power4 } from 'gsap';

import ScrollManager from './components/scrollManager/ScrollManager';
import ScrollStep from './components/scrollManager/components/scrollStep/ScrollStep';
import ScrollNavigation from './components/scrollManager/components/scrollNavigation/ScrollNavigation';

import Section1 from './components/section1/Section1';
import ThreejsBasicAnim from './components/threejsAnim/threejsBasicAnim/ThreejsBasicAnim';
import ThreejsModel from './components/threejsAnim/threejsModel/ThreejsModel';
import Home from './scenes/home/Home';

import withScrollPosition from './hoc/withScrollPosition';

import './styles/index.css';

import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
const plugins = [ScrollToPlugin];

class App extends Component {
  constructor(props) {
    super(props);

    this.scrollWraper = React.createRef();
    this.home = React.createRef();
    this.threeAnim = React.createRef();
    this.threeModel = React.createRef();
    this.section1 = React.createRef();

    this.sections = {
      home: this.home,
      section1: this.section1,
      threeAnim: this.threeAnim,
      threeModel: this.threeModel,
    };
  }

  scrollToElement = elementRef => {
    console.log(elementRef);
    let easing;
    if (elementRef === this.home) {
      easing = Power4.easeOut;
    } else {
      easing = Elastic.easeOut.config(1, 0.3);
    }

    TweenLite.to(this.scrollWraper.current, 4, {
      scrollTo: { y: elementRef.current },
      ease: easing,
    });
  };

  getScrollWraper = () => {
    return this.scrollWraper;
  };

  render() {
    return (
      <div className="app">
        <ScrollNavigation callback={this.scrollToElement} sections={this.sections} />
        <ScrollManager scrollWraper={this.scrollWraper}>
          <ScrollStep refProp={this.home}>
            <Home />
          </ScrollStep>

          <ScrollStep refProp={this.threeAnim}>
            <ThreejsBasicAnim />
          </ScrollStep>

          <ScrollStep refProp={this.section1}>
            <Section1 />
          </ScrollStep>

          <ScrollStep refProp={this.threeModel}>
            <ThreejsModel />
          </ScrollStep>
        </ScrollManager>
      </div>
    );
  }
}

export default withScrollPosition(App);
