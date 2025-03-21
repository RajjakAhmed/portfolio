import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProfileSection = () => {
  const sectionRef = useRef(null);
  const imageDesktopRef = useRef(null);
  const imageMobileRef = useRef(null);
  const chatDesktopRef = useRef(null);
  const chatMobileRef = useRef(null);

  useEffect(() => {
    // Animate profile image (Desktop)
    gsap.fromTo(
      imageDesktopRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out", delay: 0.2 }
    );

    // Animate profile image (Mobile)
    gsap.fromTo(
      imageMobileRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.2 }
    );

    // Animate chat bubble (Desktop)
    gsap.fromTo(
      chatDesktopRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out", delay: 0.4 }
    );

    // Animate chat bubble (Mobile)
    gsap.fromTo(
      chatMobileRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.4 }
    );

    // Optional scroll-trigger effect to fade out section on scroll
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      scale: 0.8,
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex items-center justify-center h-screen overflow-hidden px-4"
    >
      {/* Background Video for Desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full z-[-1]">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover brightness-75"
        >
          <source src="background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Image for Mobile */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full z-[-1]">
        <img
          src="mb-back.PNG"
          alt="Mobile Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        
        {/* Mobile Chat Bubble (Now Above the Image) */}
        <div
          ref={chatMobileRef}
          className="md:hidden absolute top-[40%] left-1/2 transform -translate-x-1/2 p-5 bg-white bg-opacity-95 rounded-xl shadow-lg w-10/12 text-center"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Hi, I'm Rajjak Ahmed!
          </h2>
          <p className="text-base text-gray-700">
            I love building interactive web apps and exploring new tech!
          </p>
        </div>

        {/* Mobile Profile Image */}
        <img
          ref={imageMobileRef}
          src="rajjak.png"
          alt="Profile"
          className="absolute md:hidden w-40 sm:w-48 
            top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* Desktop Profile Image */}
        <img
          ref={imageDesktopRef}
          src="rajjak.png"
          alt="Profile"
          className="hidden md:block absolute w-72 lg:w-80 object-contain 
            top-[25%] left-[10%] translate-x-[10px] translate-y-[-5px]"
        />

        {/* Desktop Chat Bubble */}
        <div
          ref={chatDesktopRef}
          className="hidden md:block relative max-w-md p-6 bg-white bg-opacity-90 rounded-2xl shadow-xl border border-gray-200"
        >
          {/* Chat bubble arrow (only for desktop) */}
          <div className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 border-t-10 border-t-transparent border-b-10 border-b-transparent border-r-20 border-r-white"></div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Hi, I'm Rajjak Ahmed!
          </h2>
          <p className="text-lg text-gray-700">
            I'm a Computer Science Engineer passionate about software development, AI, and web technologies. I love building interactive applications and exploring new tech innovations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;









