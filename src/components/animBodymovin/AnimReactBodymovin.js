import React, { Component } from "react";
import ReactBodymovin from "react-bodymovin";
// import animation from "./AnimReactBodymovin.json";
import animation from "./body_movin.json";
// import animation from "./b_bodymovin.json";
// import animation from 'https://www.micelistudios.com/rare.json';

class AnimReactBodymovin extends Component {
  bodymovinOptions = {
    loop: false,
    autoplay: true,
    prerender: true,
    animationData: animation
  };

  // anim = ReactBodymoving.loadAnimation(this.animData);
  render() {
    return (
      <div className="container">
        <ReactBodymovin options={this.bodymovinOptions} />
      </div>
    );
  }
}

// const AnimReactBodymovin = () => {
//   const bodymovinOptions = {
//     loop: false,
//     autoplay: true,
//     prerender: true,
//     animationData: animation
//   };
//
//   return (
//     <div className="container">
//       <ReactBodymovin options={bodymovinOptions} />
//     </div>
//   );
// };

export default AnimReactBodymovin;

//GSAP

//center animation
// TweenMax.set("#container", {
//   position: "absolute",
//   left: "50%",
//   top: "50%",
//   xPercent: -50,
//   yPercent: -50
// });

// //controls
// $("#color").click(function() {
//   TweenMax.to("#rareColor path", 1, { fill: "#ffffff", stroke: "#ffffff" });
// });
//
// $("#colorOrig").click(function() {
//   TweenMax.to("#rareColor path", 1, { fill: "#dc3c56", stroke: "#dc3c56" });
// });
//
// $("#minusY").click(function() {
//   TweenMax.to("#container", 1, { y: "+=100", ease: Circ.easeOut });
// });
//
// $("#plusY").click(function() {
//   TweenMax.to("#container", 1, { y: "-=100", ease: Circ.easeOut });
// });
//
// $("#replay").click(function() {
//   anim.goToAndStop(0);
//   anim.play();
// });
//
// $("#pause").click(function() {
//   anim.pause();
// });
//
// $("#play").click(function() {
//   anim.play();
// });
//
// var animData = {
//   container: document.getElementById("container"),
//   renderer: "svg",
//   loop: false,
//   autoplay: true,
//   path: "https://www.micelistudios.com/rare.json"
// };
// var anim = bodymovin.loadAnimation(animData);

/*anim.setSpeed(1.4);*/

// export default AnimReactBodymovin;
