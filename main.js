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
camera.rotation.x = 0.5;

// render == draw
renderer.render(scene, camera);

// 4. Geometry - the {x,y,z} points that make up the shape of an object
const geometry = new THREE.TorusGeometry(6, 0.05, 16, 100);

// 5. Material - the wrapping paper for an object, determines how the object looks
const material = new THREE.MeshStandardMaterial({ color: 0xffacff });

// 6. Mesh - geometry + material 고리 추가
const torus = new THREE.Mesh(geometry, material);

const circleArray = [
  { size: 10, color: 0xf0eee9 },
  { size: 10.1, color: 0xded4b7 },
  { size: 10.2, color: 0xded4b7 },
  { size: 10.3, color: 0xded4b7 },
  { size: 10.4, color: 0xded4b7 },
  { size: 10.5, color: 0xded4b7 },
  { size: 10.6, color: 0xded4b7 },
  { size: 10.7, color: 0xded4b7 },
  { size: 10.8, color: 0xded4b7 },
  { size: 10.9, color: 0xded4b7 },
  { size: 11.0, color: 0xded4b7 },
  { size: 11.5, color: 0xa58d77 },
  { size: 11.6, color: 0xa58d77 },
  { size: 11.7, color: 0xa58d77 },
  { size: 11.8, color: 0xa58d77 },
  { size: 11.9, color: 0xa58d77 },
  { size: 12.0, color: 0xa58d77 },
  { size: 12.1, color: 0xa58d77 },
  { size: 12.2, color: 0xa58d77 },
  { size: 12.3, color: 0xa58d77 },
  { size: 12.4, color: 0xa58d77 },
];

function addCircle() {
  for (let i = 0; i < circleArray.length; i++) {
    const circleGeometry = new THREE.TorusGeometry(
      circleArray[i].size,
      0.05,
      14,
      100
    );
    const circleMaterial = new THREE.MeshStandardMaterial({
      color: circleArray[i].color,
    });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);

    circle.position.set(50, 0, 0);
    circle.rotateX(1.5);
    scene.add(circle);
  }
}

addCircle();

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
    .map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}

function addStar2() {
  const geometry = new THREE.SphereGeometry(0.15, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(300));

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

// 지구 동그란 행성 추가하기
const earthTexture = new THREE.TextureLoader().load("earth.jpg");
//
// const normarlTexture = new THREE.TextureLoader().load("normal.jpg");

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(2, 32, 32),
  new THREE.MeshBasicMaterial({
    map: earthTexture,
    // normalMap: normarlTexture,
    position: { x: 1000, y: 1000, z: 0 },
  })
);

scene.add(earth);

// 화성 동그란 행성 추가하기
const marsTexture = new THREE.TextureLoader().load("mars.jpg");

// const marsNormalTexture = new THREE.TextureLoader().load("normal.jpg");

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(1.0, 32, 32),
  new THREE.MeshBasicMaterial({
    map: marsTexture,
    // normalMap: marsNormalTexture,
    position: { x: 1000, y: 1000, z: 0 },
  })
);
mars.position.set(8, 0, 0);

scene.add(mars);
// 금성
const goldstarTexture = new THREE.TextureLoader().load("goldstar.jpg");

const goldstar = new THREE.Mesh(
  new THREE.SphereGeometry(1.8, 32, 32),
  new THREE.MeshBasicMaterial({
    map: goldstarTexture,
    // normalMap: septuneNormalTexture,
    position: { x: 1000, y: 1000, z: 0 },
  })
);
goldstar.position.set(-8, 0, 0);

scene.add(goldstar);
// 수성
const waterstarTexture = new THREE.TextureLoader().load("waterstar.jpg");

const waterstar = new THREE.Mesh(
  new THREE.SphereGeometry(0.8, 32, 32),
  new THREE.MeshBasicMaterial({
    map: waterstarTexture,
    // normalMap: septuneNormalTexture,
    position: { x: 1000, y: 1000, z: 0 },
  })
);
waterstar.position.set(-16, 0, 0);

scene.add(waterstar);

// 태양
const sunTexture = new THREE.TextureLoader().load("sun.jpg");

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(40, 32, 32),
  new THREE.MeshBasicMaterial({
    map: sunTexture,
    // normalMap: septuneNormalTexture,
    position: { x: 1000, y: 1000, z: 0 },
  })
);
sun.position.set(-70, 0, 0);

scene.add(sun);

// 목성
const woodTexture = new THREE.TextureLoader().load("wood.jpg");

const wood = new THREE.Mesh(
  new THREE.SphereGeometry(5.0, 32, 32),
  new THREE.MeshBasicMaterial({
    map: woodTexture,
    // normalMap: septuneNormalTexture,
    position: { x: 1000, y: 1000, z: 0 },
  })
);
wood.position.set(20, 0, 0);

scene.add(wood);

// 토성
const sandTexture = new THREE.TextureLoader().load("sand.jpg");

const sand = new THREE.Mesh(
  new THREE.SphereGeometry(8.8, 32, 32),
  new THREE.MeshBasicMaterial({
    map: sandTexture,
    // normalMap: septuneNormalTexture,
    position: { x: 1000, y: 1000, z: 0 },
  })
);
sand.position.set(50, 0, 0);

scene.add(sand);

//천왕성
const thunderTexture = new THREE.TextureLoader().load("thunder.jpg");

const thunder = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshBasicMaterial({
    map: thunderTexture,
    // normalMap: septuneNormalTexture,
    position: { x: 1000, y: 1000, z: 0 },
  })
);
thunder.position.set(80, 0, 0);

scene.add(thunder);

//해왕성
const kingstarTexture = new THREE.TextureLoader().load("kingstar.jpg");

const kingstar = new THREE.Mesh(
  new THREE.SphereGeometry(5.8, 32, 32),
  new THREE.MeshBasicMaterial({
    map: kingstarTexture,
    // normalMap: septuneNormalTexture,
    position: { x: 1000, y: 1000, z: 0 },
  })
);
kingstar.position.set(100, 0, 0);

scene.add(kingstar);

// position 추가하기

// moon

function animate() {
  requestAnimationFrame(animate);

  // torus rotate
  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01;

  // circle rotate
  // circle.rotation.x += 0.001;
  // circle.rotation.y += 0.0005;
  // circle.rotation.z += 0.001;

  // earth rotate
  // earth.rotation.x = 500 * Math.sin(Date.now() / 1000);
  // earth.rotation.y = 365 * Date.now() * 0.0001;
  // earth.rotation.z = 500 * Math.cos(Date.now() / 1000);
  earth.rotation.x += 0.001;
  earth.rotation.y += 0.001;
  earth.rotation.z += 0.005;

  // mars rotate
  mars.rotation.x -= 0.001;
  mars.rotation.y -= 0.001;
  mars.rotation.z -= 0.005;

  // goldstar rotate
  goldstar.rotation.x += 0.001;
  goldstar.rotation.y += 0.001;
  goldstar.rotation.z += 0.005;

  // waterstar rotate
  waterstar.rotation.x += 0.001;
  waterstar.rotation.y += 0.001;
  waterstar.rotation.z += 0.005;

  // sun rotate
  sun.rotation.x += 0.0005;
  sun.rotation.y += 0.0005;
  sun.rotation.z += 0.0003;

  // wood rotate
  wood.rotation.x += 0.0001;
  wood.rotation.y += 0.0;
  wood.rotation.z += 0.0005;

  // sand rotate
  sand.rotation.x -= 0.0001;
  sand.rotation.y -= 0.0001;
  sand.rotation.z -= 0.0005;

  // thunder rotate
  thunder.rotation.x += 0.001;
  thunder.rotation.y += 0.001;
  thunder.rotation.z += 0.005;

  // kingstar rotate
  kingstar.rotation.x += 0.001;
  kingstar.rotation.y += 0.001;
  kingstar.rotation.z += 0.005;

  // 컨트롤 기능 업데이트
  controls.update();

  renderer.render(scene, camera);
}

animate();
