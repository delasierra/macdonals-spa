import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SCROLL_DIRECTION } from './static';
import { throttle } from 'lodash';

// TODO: include ScrollSet into this class
class scrollManager extends Component {
  childrenWithScrollProps;

  constructor(props) {
    super(props);
    this.state = {
      posX: 0,
      posY: 0,
      dirX: null,
      dirY: null,
    };
  }

  // getters/setters
  getScrollWraper() {
    return this.props.scrollWraper.current;
  }

  getScrollAbsolutePosX() {
    return this.getScrollWraper().scrollLeft;
  }

  getScrollAbsolutePosY() {
    return this.getScrollWraper().scrollTop;
  }

  getScrollDirectionX() {
    return this.getScrollAbsolutePosX() > this.state.x
      ? SCROLL_DIRECTION.RIGHT
      : SCROLL_DIRECTION.LEFT;
  }

  getScrollDirectionY() {
    return this.getScrollAbsolutePosY() > this.state.y
      ? SCROLL_DIRECTION.DOWM
      : SCROLL_DIRECTION.UP;
  }

  // Lifecycle hooks
  componentDidMount() {
    this.getScrollWraper().addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    this.getScrollWraper().addEventListener('scroll', this.scrollHandler);
  }

  // handlers
  scrollHandler = throttle(
    () => {
      this.setState({
        posX: this.getScrollAbsolutePosX(),
        posY: this.getScrollAbsolutePosY(),
        dirX: this.getScrollDirectionX(),
        dirY: this.getScrollDirectionY(),
      });
      // console.log('SCROLL', this.state);
    },
    this.props.wait // "wait" make a gap before the next time the function is called
  );

  render() {
    this.childrenWithScrollProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { ...this.state });
    });

    return (
      <div ref={this.props.scrollWraper} className="scroll-wraper">
        {this.childrenWithScrollProps}
      </div>
    );
  }
}

scrollManager.defaultProps = {
  wait: 0,
};

scrollManager.propTypes = {
  wait: PropTypes.number,
};

export default scrollManager;
