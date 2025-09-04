import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const getOrbitControl = (camera, canvas) => {
  const orbitControl = new OrbitControls(camera, canvas);
  orbitControl.enabled = true;
  orbitControl.enableDamping = true;
  orbitControl.listenToKeyEvents(window);
  orbitControl.keyPanSpeed = 50;

  return {
    orbitControl,
    toggleOrbitControl: () => (orbitControl.enabled = !orbitControl.enabled),
  };
};
