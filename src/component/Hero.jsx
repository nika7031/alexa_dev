import React, { useEffect } from "react";
import * as THREE from "three";
import alexaLogo from "/Users/parnikasharma/adv_project/src/assets/alexaLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("three-js-background")
      .appendChild(renderer.domElement);

    const particleCount = 300;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      const subtleGradient = 0.3 + Math.random() * 0.4;
      colors[i * 3] = 0;
      colors[i * 3 + 1] = subtleGradient;
      colors[i * 3 + 2] = 0.6 - subtleGradient;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.7,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 50;

    function animate() {
      requestAnimationFrame(animate);
      particleSystem.rotation.x += 0.001;
      particleSystem.rotation.y += 0.001;
      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      document
        .getElementById("three-js-background")
        .removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative h-screen text-white flex items-center justify-start">
      <div id="three-js-background" className="absolute inset-0 z-0"></div>
      <div
        className="absolute inset-0 z-0 left-0 h-full"
        style={{
          backgroundImage: `url(${alexaLogo})`,
          backgroundSize: "40%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          opacity: 0.5,
          zIndex: 1,
        }}
      />
      <div className="relative z-10 p-20 text-left ">
        <h1 className="text-7xl md:text-7xl sm:text-3xl font-bold mb-7">
          Alexa Developers SRM
        </h1>
        <p className="text-5xl md:text-6xl sm:text-2xl font-bold bg-clip-text text-transparent">
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #32CD32, #20B2AA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginTop: '30px',
            }}
          >
            "Voices United,
          </span>
          <br />
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #32CD32, #20B2AA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingLeft: '100px',
              marginTop: '10px',
            }}
          >
            Tech Amplified"
          </span>
        </p>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white z-10">
        <div className="flex flex-col items-center">
          <span className="animate-bounce text-center">Scroll down</span>
          <FontAwesomeIcon icon={faArrowDown} className="mt-2 text-2xl" />
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute.inset-0.z-1 {
            background-size: 80%;
            background-position: left center;
          }
          .text-7xl {
            font-size: 2.5rem;
          }
          .text-5xl {
            font-size: 1.8rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .absolute.inset-0.z-1 {
            background-size: 60%;
            background-position: center left;
          }
          .text-7xl {
            font-size: 3.5rem;
          }
          .text-5xl {
            font-size: 2.5rem;
          }
        }

        @media (min-width: 1025px) {
          .absolute.inset-0.z-1 {
            background-size: 40%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
