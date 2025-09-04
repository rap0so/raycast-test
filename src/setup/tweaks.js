import GUI from "lil-gui";
const axis = ["x", "y", "z"];

const tweaks = new GUI();

export const addPosition = (mesh) => addAxis(mesh, "position");
export const addRotation = (mesh) => addAxis(mesh, "rotation");
export const addScale = (mesh) => addAxis(mesh, "scale");

const addAxis = (mesh, prop) => {
  if (!mesh[prop]) {
    throw new Error(`${prop} does't exist in mesh ${mesh}`);
  }

  const meshName = mesh?.geometry?.type ?? "Mesh";
  const meshId = mesh?.geometry?.id ?? Date.now().toString();

  const meshFolder = tweaks.addFolder(`${meshName} ${meshId}`);

  for (let index = 0; index < axis.length; index++) {
    const currentAxis = axis[index];
    meshFolder.add(mesh[prop], currentAxis, -100, 100, 0.25);
  }
};

export default tweaks;
