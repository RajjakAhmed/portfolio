import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDownload } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Myself = () => {
  const aboutRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // GSAP Scroll Animation
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    // Speed up background video playback (Only for Desktop)
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <section
      ref={aboutRef}
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white"
    >
      {/* Background Video (Only on Desktop) */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full z-[-1]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover brightness-75"
        >
          <source src="background2.webm" type="video/webm" />
        </video>
      </div>

      {/* Live Wallpaper (Only on Mobile) */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-to-r from-purple-900 to-black animate-pulse"></div>

      {/* Glassmorphism Background */}
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg max-w-2xl border border-white/20">
        <h2 className="text-5xl font-extrabold text-purple-400 mb-6">About Me</h2>
        <p className="text-lg text-black-200 leading-relaxed">
          I am a passionate Computer Science engineering student with expertise in software 
          development, AI, and web technologies. My goal is to create interactive web applications 
          and seamlessly integrate machine learning models.
        </p>

        {/* Interactive Download CV Button */}
        <div className="mt-6">
          <a
            href="/rajjak_cv.pdf"
            download
            className="inline-flex items-center gap-3 bg-purple-600 px-6 py-3 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-purple-700 shadow-lg"
          >
            <FaDownload size={22} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Myself;

