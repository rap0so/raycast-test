import {
  BoxGeometry,
  CylinderGeometry,
  Mesh,
  MeshLambertMaterial,
} from "three";

export const createCylinder = (name = "") => {
  const cylinder = new Mesh(
    new CylinderGeometry(1, 1, 3),
    new MeshLambertMaterial()
  );
  cylinder.castShadow = true;
  cylinder.name = name;

  return cylinder;
};

export const createBox = (name = "") => {
  const box = new Mesh(new BoxGeometry(2, 2, 2), new MeshLambertMaterial());
  box.castShadow = true;
  box.receiveShadow = true;
  box.name = name;

  return box;
};
