import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusKnotGeometry(10,3,100,16)
const material = new THREE.MeshStandardMaterial({
  color: 0xff657,
  roughness:0.4,
  metalness:0.7,
  });
const torus = new THREE.Mesh(geometry,material);
scene.add(torus)


const pointLight = new THREE.PointLight(0xffffff,2000);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff,10); // Soft white light
scene.add(ambientLight);


// Helpers

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  torus.rotation.x +=0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z +=0.005;
  
}

animate();