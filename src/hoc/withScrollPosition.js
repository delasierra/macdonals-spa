import React, { Component } from 'react';
import { throttle } from 'lodash';

// TODO: For more information check https://medium.com/@toastui/a-deep-dive-into-the-react-hoc-2-3e8ed18b848b
// TODO: create proper listeners for scrolling https://css-tricks.com/debouncing-throttling-explained-examples/
// TODO: Follow examples from http://scrollmagic.io/examples/
// TODO: to construct this HOC class check /hoc/scrollMagicInspiration.js

//   SCROLL_DIRECTION_FORWARD = 'FORWARD',
//   SCROLL_DIRECTION_REVERSE = 'REVERSE',
//   SCROLL_DIRECTION_PAUSED = 'PAUSED',
//   DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

// function withWindowScroll(WrappedComponent) {
function withScrollPosition(WrappedComponent, { wait = 0, scrollWraper = null } = {}) {
  return class extends Component {
    state = {
      x: 0,
      y: 0,
    };

    // TODO: create debounce / throttle to avoid overload in scroll events
    // TODO: add functionality to send scroll values only when the object is in viewport (changing state of the object only when necessary)

    scrollHandler = throttle(
      () => {
        this.setState({
          x: window.pageXOffset,
          y: window.pageYOffset,
        });
        console.log('scrollHandler', this.state);
      },
      // wait make a gap before the next time the function is called
      wait
    );

    componentDidMount() {
      // console.log('[withWindowScroll] componentDidMount');
      // console.log('[withWindowScroll] WrappedComponent props', WrappedComponent.props);
      // if (this.props.scrollWraper) {
      //   this.props.scrollWraper.addEventListener('scroll', this.scrollHandler);
      // } else {
      window.addEventListener('scroll', this.scrollHandler);
      // }

      // console.log(this.child.getTest);
      // WrappedComponent.getScrollWraper.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
      // console.log('[withWindowScroll] componentWillUnmount');
      window.removeEventListener('scroll', this.scrollHandler);
    }

    render() {
      // const { x, y } = this.state;
      // const passingProps = mapProps({ x, y });

      return <WrappedComponent {...this.props} x={this.state.x} y={this.state.y} />;

      // return {
      //   /*<WrappedComponent {...this.props} x={this.state.x} y={this.state.y} />*/
      // };
    }
  };
}

export default withScrollPosition;
