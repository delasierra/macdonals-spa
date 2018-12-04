import React, { Component } from 'react';
import * as THREE from 'three';
// import GLTFLoader from 'three-gltf-loader';
import { GLTFLoader } from 'three-full';
import ChubbyGirlModel from './threeModels/chubbyGirl.gltf';
// import TestModel from './threeModels/Duck.gltf';

class ThreejsModel extends Component {
  componentDidMount() {
    let texture = new THREE.TextureLoader().load('textures/water.jpg');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);

    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    //ADD SCENE
    this.scene = new THREE.Scene();

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 4;

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#ffffff');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //ADD MODEL
    const loader = new GLTFLoader();
    loader.load(
      ChubbyGirlModel,
      // TestModel,
      function(gltf) {
        console.log('loading GLTF', gltf);
        this.scene.add(gltf.scene);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
    // this.cube = new THREE.Mesh(geometry, material);
    // this.scene.add(this.cube);
    // this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        className="three-model"
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default ThreejsModel;
