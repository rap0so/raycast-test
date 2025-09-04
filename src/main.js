import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import scene from "./setup/scene";

scene.add(
  new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: "#c20071" })
  )
);
