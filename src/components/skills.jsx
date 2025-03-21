import { useEffect, useRef } from "react";
import gsap from "gsap";

const techStacks = [
  { name: "React.js", img: "/tech/react.png" },
  { name: "Three.js", img: "/tech/three.png" },
  { name: "Python", img: "/tech/python.png" },
  { name: "MongoDB", img: "/tech/mongodb.png" },
  { name: "GSAP", img: "/tech/gsap.png" },
  { name: "Flask", img: "/tech/flask.png" },
  { name: "C++", img: "/tech/Cpp.png" },
  { name: "vite", img: "/tech/vite.png" },
  { name: "Tensorflow", img: "/tech/tensorflow.png" },
];

const Skills = () => {
  const skillRefs = useRef([]);
  const containerRef = useRef();

  // Mouse move effect
  useEffect(() => {
    const container = containerRef.current; // Store the reference in a variable

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const deltaX = (clientX - centerX) / width;
      const deltaY = (clientY - centerY) / height;
      
      skillRefs.current.forEach((el) => {
        gsap.to(el, {
          rotationY: deltaX * 20,  // Rotation based on mouse movement
          rotationX: -deltaY * 20, // Reverse rotation to create depth
          ease: "power3.out",
        });
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      skillRefs.current,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <section className="relative p-10 bg-gray-900 text-white text-center" ref={containerRef}>
      <h2 className="text-5xl font-extrabold">Tech Stack 💻</h2>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
        {techStacks.map((tech, index) => (
          <div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)}
            className="p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-md transition-all duration-300 ease-in-out transform"
          >
            <img
              src={tech.img}
              alt={tech.name}
              className="w-16 h-16 object-contain"
            />
            <p className="mt-2 text-lg font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;




