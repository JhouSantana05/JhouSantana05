/**
 * JS Web & Business - Interactive 3D WebGL Canvas (Three.js)
 * Modern 3D Holographic Core with responsive interaction & particle network
 */

(function () {
  const container = document.getElementById("hero-3d-container");
  if (!container) return;

  // Verificar se o Three.js está carregado
  if (typeof THREE === "undefined") {
    console.warn("Three.js não carregado. Exibindo fallback 3D em CSS.");
    return;
  }

  let scene, camera, renderer;
  let sphereMesh, outerRing, innerRing, particlesMesh, corePoints;
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  let windowHalfX = container.clientWidth / 2;
  let windowHalfY = container.clientHeight / 2;
  let isVisible = true;

  function init() {
    // 1. Scene
    scene = new THREE.Scene();

    // 2. Camera
    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
    camera.position.z = 8.5;

    // 3. Renderer com suporte a retina e fundo transparente
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Objetos 3D Futuristas

    // Grupo Mestre para rotação conjunta
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // A. Esfera Icosaedro Geodésica (Wireframe Brilhante)
    const sphereGeo = new THREE.IcosahedronGeometry(2.4, 3);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4, // Cyan neon
      wireframe: true,
      wireframeLinewidth: 1.5,
      transparent: true,
      opacity: 0.55,
      roughness: 0.2,
      metalness: 0.8
    });
    sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    mainGroup.add(sphereMesh);

    // B. Núcleo de Partículas Estilizado
    const coreCount = 450;
    const coreGeo = new THREE.BufferGeometry();
    const corePositions = new Float32Array(coreCount * 3);
    const coreColors = new Float32Array(coreCount * 3);

    const cyanColor = new THREE.Color(0x06b6d4);
    const violetColor = new THREE.Color(0x8b5cf6);
    const emeraldColor = new THREE.Color(0x10b981);

    for (let i = 0; i < coreCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.1;
      const sinPhi = Math.sin(phi);

      corePositions[i * 3] = r * sinPhi * Math.cos(theta);
      corePositions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      corePositions[i * 3 + 2] = r * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? violetColor : (i % 2 === 0 ? cyanColor : emeraldColor);
      coreColors[i * 3] = mixedColor.r;
      coreColors[i * 3 + 1] = mixedColor.g;
      coreColors[i * 3 + 2] = mixedColor.b;
    }

    coreGeo.setAttribute("position", new THREE.BufferAttribute(corePositions, 3));
    coreGeo.setAttribute("color", new THREE.BufferAttribute(coreColors, 3));

    const coreMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    corePoints = new THREE.Points(coreGeo, coreMat);
    mainGroup.add(corePoints);

    // C. Anel Orbital Externo 1
    const ringGeo1 = new THREE.TorusGeometry(3.3, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6, // Violeta
      transparent: true,
      opacity: 0.6
    });
    outerRing = new THREE.Mesh(ringGeo1, ringMat1);
    outerRing.rotation.x = Math.PI / 3;
    outerRing.rotation.y = Math.PI / 6;
    mainGroup.add(outerRing);

    // D. Anel Orbital 2 (Contrário)
    const ringGeo2 = new THREE.TorusGeometry(3.6, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.4
    });
    innerRing = new THREE.Mesh(ringGeo2, ringMat2);
    innerRing.rotation.x = -Math.PI / 4;
    innerRing.rotation.y = Math.PI / 3;
    mainGroup.add(innerRing);

    // E. Campo de Partículas de Fundo (Constelação Espacial)
    const particlesCount = 700;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i + 2] = (Math.random() - 0.5) * 16;
    }

    particlesGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // 5. Iluminação Elegante
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 3, 20);
    pointLight1.position.set(4, 5, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 3, 20);
    pointLight2.position.set(-4, -4, 3);
    scene.add(pointLight2);

    // 6. Event Listeners
    window.addEventListener("resize", onWindowResize);
    window.addEventListener("mousemove", onMouseMove);

    // Touch Support para Mobile
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    // Otimização: Pausar quando fora de tela
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.1 });
      observer.observe(container);
    }

    document.addEventListener("visibilitychange", () => {
      isVisible = !document.hidden;
    });

    animate();
  }

  function onWindowResize() {
    if (!container) return;
    windowHalfX = container.clientWidth / 2;
    windowHalfY = container.clientHeight / 2;

    camera.aspect = container.clientWidth / container.clientHeight;
    // Em telas mobile, afastar a câmera levemente para manter visual perfeito
    if (window.innerWidth < 768) {
      camera.position.z = 10;
    } else {
      camera.position.z = 8.5;
    }
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }

  function onMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.0012;
    mouseY = (event.clientY - windowHalfY) * 0.0012;
  }

  function onTouchMove(event) {
    if (event.touches.length > 0) {
      mouseX = (event.touches[0].clientX - windowHalfX) * 0.0015;
      mouseY = (event.touches[0].clientY - windowHalfY) * 0.0015;
    }
  }

  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    if (!isVisible) return;

    const elapsedTime = clock.getElapsedTime();

    // Suavização suave com LERP para movimento do mouse
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    // Rotação suave da esfera e partículas
    if (sphereMesh) {
      sphereMesh.rotation.y = elapsedTime * 0.18 + targetX * 1.5;
      sphereMesh.rotation.x = Math.sin(elapsedTime * 0.25) * 0.2 + targetY * 1.2;
    }

    if (corePoints) {
      corePoints.rotation.y = -elapsedTime * 0.25 + targetX;
      corePoints.rotation.z = Math.cos(elapsedTime * 0.3) * 0.2;
    }

    if (outerRing) {
      outerRing.rotation.z = elapsedTime * 0.2;
      outerRing.rotation.x += 0.003;
    }

    if (innerRing) {
      innerRing.rotation.z = -elapsedTime * 0.25;
      innerRing.rotation.y += 0.004;
    }

    if (particlesMesh) {
      particlesMesh.rotation.y = elapsedTime * 0.04;
      particlesMesh.rotation.x = -elapsedTime * 0.02;
    }

    // Leve flutuação vertical em levitação
    camera.position.y = Math.sin(elapsedTime * 0.8) * 0.15;

    renderer.render(scene, camera);
  }

  // Inicializar quando o DOM estiver pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
