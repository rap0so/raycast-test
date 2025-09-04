import { WebGLRenderer, PCFSoftShadowMap } from "three";
import camera, { cameraConfig } from "./camera";
import { getOrbitControl } from "./orbitControl";
import canvas from "./canvas";
import pixelRatio from "./getPixelRatio";
import scene from "./scene";

getOrbitControl(camera, canvas);

const renderer = new WebGLRenderer({
  canvas,
});

renderer.setPixelRatio(pixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;

renderer.setSize(cameraConfig.width, cameraConfig.height);

const updateRenderer = (callback) => {
  window.requestAnimationFrame(() => updateRenderer(callback));

  callback?.();

  renderer.render(scene, camera);
};

export { updateRenderer };

export default renderer;
