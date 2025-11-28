import * as THREE from 'three';

let scene, camera, renderer, particles;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 80;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.style.margin = 0;
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BufferGeometry();
  const particleCount = 4000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 300;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x8844ff,
    size: 1,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += 0.0005;
  particles.rotation.x += 0.0002;
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();