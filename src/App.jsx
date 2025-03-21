import Myself from "./components/Myself";
import Skills from "./components/skills";
import Projects from "./components/project";
import ProfileImage from "./components/profile";
import Navbar from "./components/navbar";
import Chatbot from "./components/chatbotbubble";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <ProfileImage/>
      <Myself />
      <Skills />
      <Projects />
      <Navbar/>
      <Chatbot/>
      <footer className="bg-gray-900 p-6 text-center">
        <p className="text-gray-400">
          © 2025 Rajjak Ahmed | Computer Science Engineer
        </p>
      </footer>
    </div>
  );
}

export default App;



