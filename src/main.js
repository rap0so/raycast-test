import {
  AmbientLight,
  Color,
  DirectionalLight,
  DoubleSide,
  Group,
  Mesh,
  MeshLambertMaterial,
  PlaneGeometry,
  Raycaster,
  Vector2,
} from "three";
import scene from "./setup/scene";
import camera from "./setup/camera";
import renderer from "./setup/renderer";
import { createBox, createCylinder } from "./createMeshes";

camera.lookAt(0, 0, 0);
camera.position.set(0, 6, 26);

const floorGeometry = new PlaneGeometry(25, 20);

const directionalLight = new DirectionalLight("#fff", 2);
const ambientLight = new AmbientLight("#fff", 0.1);
directionalLight.position.set(2, 5, 10);
directionalLight.castShadow = true;
scene.add(ambientLight, directionalLight);

// floor
const floor = new Mesh(
  floorGeometry,
  new MeshLambertMaterial({ color: "#6b6b6b", side: DoubleSide })
);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

// boxes
const box = createBox("box");
box.position.set(4, 1, 0);

const secondBox = createBox("secondBox");
secondBox.position.set(7, 1, 0);

const thirdBox = createBox("thirdBox");
thirdBox.position.set(5.5, 3, 0);

const boxGroup = new Group();
boxGroup.add(box, secondBox, thirdBox);
scene.add(boxGroup);

// cylinders
const cylinder = createCylinder("cylinder");
cylinder.position.set(-5, 1.5, 0);

const secondCylinder = createCylinder("secondCylinder");
secondCylinder.position.set(-2.25, 1.5, 0);

const thirdCylinder = createCylinder("thirdCylinder");
thirdCylinder.position.set(-3.5, 4.5, 0);

scene.add(cylinder, secondCylinder, thirdCylinder);

// raycaster
const raycaster = new Raycaster();
renderer.domElement.addEventListener("mousedown", (event) => {
  // * 2 - 1 ----> to make it between -1 and 1
  const rect = renderer.domElement.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  const coords = new Vector2(x, y);
  raycaster.setFromCamera(coords, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);
  if (!intersects.length) {
    return;
  }

  const selectedObject = intersects[0].object;
  selectedObject.material.color = getRandomColor();
});

const getRandomColor = () =>
  new Color(Math.random(), Math.random(), Math.random());
