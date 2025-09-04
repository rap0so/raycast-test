import { PerspectiveCamera } from "three";
import scene from "./scene";

export const cameraConfig = {
  fieldOfView: 75,
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new PerspectiveCamera(
  cameraConfig.fieldOfView,
  cameraConfig.width / cameraConfig.height,
  0.1,
  100
);

camera.position.set(5, 2, 5);

scene.add(camera);

export default camera;
