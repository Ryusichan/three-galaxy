import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// important 1. Scene, 2. Camera, 3. Renderer

// 1. Scene === container
const scene = new THREE.Scene();

// 2. Camera 75 = 각도, Aspect Ratio, view Frustum
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 3. Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// render == draw
renderer.render(scene, camera);

// 4. Geometry - the {x,y,z} points that make up the shape of an object
const geometry = new THREE.TorusGeometry(6, 0.05, 16, 100);

// 5. Material - the wrapping paper for an object, determines how the object looks
const material = new THREE.MeshStandardMaterial({ color: 0xffacff });

// 6. Mesh - geometry + material
const torus = new THREE.Mesh(geometry, material);
const circle = new THREE.Mesh(
  new THREE.TorusGeometry(5.8, 0.05, 14, 100),
  new THREE.MeshStandardMaterial({ color: 0x9292d8 })
);

scene.add(torus);
scene.add(circle);

// 7. Light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);

// 전체적으로 빛을 첨가
scene.add(pointLight, ambientLight);

// 그리드 라인 첨가
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

//컨트롤 기능 추가
const controls = new OrbitControls(camera, renderer.domElement);

// 배경요소로 star 추가하기
function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(50));

  star.position.set(x, y, z);
  scene.add(star);
}

function addStar2() {
  const geometry = new THREE.SphereGeometry(0.15, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xf8d7c9 });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(400).fill().forEach(addStar);

Array(400).fill().forEach(addStar2);

// 배경 이미지 추가
// const spaceTexture = new THREE.TextureLoader().load("space.jpg");
// scene.background = spaceTexture;
// 배경에 그라데이션 추가
scene.background = new THREE.Color(0x000000);

// Texture mapping 추가하기
// 네모박스
// const jeffTexture = new THREE.TextureLoader().load("jeff.jpg");

// const jeff = new THREE.Mesh(
//   new THREE.BoxGeometry(20, 20, 20),
//   new THREE.MeshBasicMaterial({ map: jeffTexture })
// );

// scene.add(jeff);

// Moon 동그란 행성 추가하기
const moonTexture = new THREE.TextureLoader().load("moon.jpg");
//
const normarlTexture = new THREE.TextureLoader().load("normal.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshBasicMaterial({
    map: moonTexture,
    normalMap: normarlTexture,
    position: { x: 1000, y: 1000, z: 0 },
  })
);

scene.add(moon);

// Mars 동그란 행성 추가하기
const marsTexture = new THREE.TextureLoader().load("moon.jpg");

const marsNormalTexture = new THREE.TextureLoader().load("normal.jpg");

function addMars() {
  const mars = new THREE.Mesh(
    new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshBasicMaterial({
      map: marsTexture,
      normalMap: marsNormalTexture,
      position: { x: 1000, y: 1000, z: 0 },
    })
  );
  mars.position.set(25, -5, 0);

  scene.add(mars);
}

addMars();

// scene.add(mars);

// position 추가하기

// moon

function animate() {
  requestAnimationFrame(animate);

  // torus rotate
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  // circle rotate
  circle.rotation.x += 0.02;
  circle.rotation.y += 0.004;
  circle.rotation.z += 0.02;

  // moon rotate
  moon.rotation.x += 0.005;
  moon.rotation.y += 0.002;
  moon.rotation.z += 0.015;

  // 컨트롤 기능 업데이트
  controls.update();

  renderer.render(scene, camera);
}

animate();
