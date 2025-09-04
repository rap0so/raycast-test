# 3D Template with Three.js, Motion.js, and Lil-GUI

![Screenshot 2025-01-06 at 21 47 58](https://github.com/user-attachments/assets/b93e0e7a-1622-49b9-bbd2-80b654550aa8)

A lightweight and modular 3D project template using **Three.js**, **Motion.js**, and **Lil-GUI**. This template is designed for fast setup and scalability, making it ideal for prototyping and small-scale 3D applications.

---

## 🌟 Features

- **Three.js** for rendering 3D scenes.
- **Motion.js** for smooth animations.
- **Lil-GUI** for real-time debugging and parameter control.
- Modular file structure for better maintainability.

---

## 📂 Project Structure

The core setup files are located in the `/src/setup` directory

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rap0so/3d-template.git
cd 3d-template
```

### 2. Install Dependencies

```bash
yarn
```

### 3. Run the Development Server

```bash
yarn dev
```

This will start a development server and open the project in your default browser.

---

## 🛠️ Usage

### 1. Add Objects:

Add your 3D objects to the scene.js file. For example:

```bash
import * as THREE from 'three';
import scene from './setup/scene';

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
```

### 2. Animate with Motion.js:

Use Motion.js for smooth animations. Example:

```bash
// Hybrid
import { animate } from "motion"

animate(cube.rotation, { x: Math.PI * 2 }, { duration: 2, repeat: Infinity });
```

### 3. Add GUI Controls:

Add parameters to the Lil-GUI in gui.js. Example:

```bash
import tweaks, { addPosition, addRotation } from "./setup/tweaks";

const floor = new Mesh(
  new PlaneGeometry(7, 7),
  new MeshStandardMaterial({ color: "#858585"  })
);

tweaks.add(floor, 'visible')
addPosition(floor);
addRotation(floor);
```

## 📦 Dependencies

- [Three.js](https://threejs.org/docs/index.html#manual/) - 3D Rendering Library
- [Motion.js](https://motion.dev/docs) - Animation Library
- [Lil-GUI](https://github.com/georgealways/lil-gui) - Lightweight GUI for debugging

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.
