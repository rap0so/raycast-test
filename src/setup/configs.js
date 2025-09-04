import { TextureLoader } from "three";
import camera, { cameraConfig } from "./camera";
import scene from "./scene";
import minimumValueBetweenDevicePixelRationAndTwo from "./getPixelRatio";
import renderer, { updateRenderer } from "./renderer";

window.addEventListener("resize", () => {
  cameraConfig.width = window.innerWidth;
  cameraConfig.height = window.innerHeight;

  camera.aspect = cameraConfig.width / cameraConfig.height;
  camera.updateProjectionMatrix();

  renderer.setPixelRatio(minimumValueBetweenDevicePixelRationAndTwo);
  renderer.setSize(cameraConfig.width, cameraConfig.height);
});

updateRenderer();

const textureLoader = new TextureLoader();

export { camera, scene, renderer, textureLoader, updateRenderer };
