import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const projectRefs = useRef([]);

  // Clear previous refs on render
  projectRefs.current = [];

  // GSAP animation: fade in and slide up each project card when scrolling into view
  useEffect(() => {
    gsap.fromTo(
      projectRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  const projects = [
    {
      title: "Stock Prediction Chatbot",
      description:
        "A predictive tool that uses historical stock data and machine learning models to forecast future stock trends.",
      details:
        "Built with Python, LSTM networks, and interactive UI components. The chatbot aggregates market data to provide real-time predictions and insights for investors.",
      github: "https://github.com/yourusername/stock-prediction-chatbot",
    },
    {
      title: "Sentiment Analysis for Product Review",
      description:
        "A sentiment analysis tool that evaluates product reviews to determine customer satisfaction.",
      details:
        "Developed using Python and NLP libraries like NLTK and spaCy. This project extracts sentiment from reviews, providing actionable insights for businesses to improve their products.",
      github: "https://github.com/yourusername/sentiment-analysis-product-review",
    },
    {
      title: "Face Detection App",
      description:
        "A real-time face detection app using OpenCV and deep learning, capable of quickly detecting and tracking faces in video streams.",
      details:
        "Developed with Python, OpenCV, and TensorFlow. This robust application can easily be integrated into larger systems for enhanced security or analytics.",
      github: "https://github.com/yourusername/face-detection-app",
    },
  ];

  return (
    <section ref={containerRef} className="p-10 bg-gradient-to-r from-gray-800 to-gray-900">
      <h2 className="text-4xl font-bold text-purple-400 text-center">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="bg-gray-800 p-6 rounded-lg shadow-2xl transform transition-all hover:scale-105 hover:shadow-purple-500/50"
          >
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <div className="mt-4 text-gray-200 text-sm">
              {project.details}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-purple-600 px-5 py-2 rounded-lg text-lg font-semibold text-white hover:bg-purple-700 transition-colors"
            >
              GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


  