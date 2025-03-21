import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ChatbotModel = ({ isOpen }) => {
  const { scene, animations } = useGLTF("/chatbot.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play();
        action.setLoop(THREE.LoopRepeat);
      });
    }
  }, [actions]);

  return (
    <group position={[0, isOpen ? 2.5 : -1, 0]}>
      <primitive object={scene} scale={1.2} rotation={[0, Math.PI, 0]} />
    </group>
  );
};

const ChatbotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I help you?" }]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null); // Ref for automatic scrolling

  const handleClick = () => setIsOpen((prev) => !prev);

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      let reply = "I'm not sure how to respond to that.";
      if (input.toLowerCase().includes("how are you")) reply = "I'm just a bot, but I'm doing great!";
      if (input.toLowerCase().includes("rajjak")) reply = "Who is Rajjak? 🤔";
      if (input.toLowerCase().includes("hello")) reply = "Hi there! 😊 How can I assist you?";
      if (input.toLowerCase().includes("hi")) reply = "Hey! Welcome to rajjak's portfolio! 🚀";
      if (input.toLowerCase().includes("how are you")) reply = "I'm just a bot, but I'm doing great!";

      if (input.toLowerCase().includes("your name")) reply = "I'm your AI chatbot assistant. 😃";
      if (input.toLowerCase().includes("who made you") || input.toLowerCase().includes("who created you")) 
          reply = "I was created by Rajjak Ahmed to assist visitors on his portfolio!";
      if (input.toLowerCase().includes("who is rajjak") || input.toLowerCase().includes("rajjak")) 
          reply = "Rajjak Ahmed is a passionate Computer Science Engineer specializing in AI, Web Development, and DSA.";

      if (input.toLowerCase().includes("what do you do")) 
          reply = "I help you explore Rajjak Ahmed’s portfolio. Ask me about his skills, projects, or contact details!";
      if (input.toLowerCase().includes("what can you do")) 
          reply = "I can provide information about Rajjak Ahmed’s skills, projects, and how you can connect with him.";

      if (input.toLowerCase().includes("rajjak skills")) 
          reply = "Rajjak Ahmed is skilled in React, Three.js, AI, and Backend Development.";
      if (input.toLowerCase().includes("skills")) 
        reply = "Rajjak Ahmed is skilled in React, Three.js, AI, and Backend Development.";
      if (input.toLowerCase().includes("programming languages rajjak knows")) 
          reply = "Rajjak is proficient in Python, JavaScript, C, C++, and Shell Scripting.";
      if (input.toLowerCase().includes("programming languages ")) 
          reply = "Rajjak is proficient in Python, JavaScript, C, C++, and Shell Scripting.";
      if (input.toLowerCase().includes("rajjak projects")) 
          reply = "Rajjak has built AI chatbots, 3D portfolios, deep learning models, and more!";
      if (input.toLowerCase().includes("projects")) 
        reply = "Rajjak has built AI chatbots, 3D portfolios, deep learning models, and more!";
      if (input.toLowerCase().includes("can you show rajjak's projects")) 
          reply = "Yes! Check out the 'Projects' section in his portfolio.";
      if (input.toLowerCase().includes("rajjak achievements")) 
          reply = "Rajjak has worked on AI-powered chatbots, optimized deep learning models, and developed interactive web applications.";

      if (input.toLowerCase().includes("how to contact rajjak") || input.toLowerCase().includes("contact rajjak")) 
          reply = "click on linktree then dm him";
      if (input.toLowerCase().includes("contact") || input.toLowerCase().includes("contact rajjak")) 
        reply = "click on linktree then you can dm him";
      if (input.toLowerCase().includes("can i hire rajjak")) 
          reply = "Of course!Dm Rajjak about it .";     
      if (input.toLowerCase().includes("help")) 
        reply = "common you dont need help this website is preety simple";


      setMessages([...newMessages, { sender: "bot", text: reply }]);
    }, 1000);
  };

  // Auto-scroll to latest message when messages update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12">
      {/* Chatbot UI - Positioned Behind */}
      {isOpen && (
        <div className="absolute bottom-0 right-0 w-[90vw] md:w-[400px] h-[80vh] md:h-[500px] p-4 rounded-2xl shadow-xl 
                        backdrop-blur-lg bg-white/10 border border-white/20 text-white flex flex-col z-40">
          <button className="absolute top-2 right-2 text-white text-xl" onClick={() => setIsOpen(false)}>
            ❌
          </button>
          <h2 className="text-lg font-bold p-2">Chat with my bot</h2>

          {/* Chat Window */}
          <div ref={chatContainerRef} className="flex-1 p-2 overflow-y-auto space-y-2 scroll-smooth">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 rounded-lg text-sm w-fit ${msg.sender === "user" ? "bg-blue-500 ml-auto" : "bg-purple-700"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex items-center p-2 border-t border-white/20">
            <input
              type="text"
              className="flex-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="ml-2 p-3 bg-blue-600 rounded-lg" onClick={handleSend}>➤</button>
          </div>
        </div>
      )}

      {/* 3D Chatbot Model - Moves to Top when Open */}
      <div className={`absolute transition-all duration-500 ease-in-out 
          ${isOpen ? "top-0 left-1/2 transform -translate-x-1/2 md:top-6 md:left-auto md:right-6" : "bottom-0 right-0"} 
          w-20 h-20 md:w-28 md:h-28 z-50 cursor-pointer`} onClick={handleClick}>
        <Canvas className="w-full h-full" camera={{ position: [-9, 0, -2], fov: 30 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[1, 4, 5]} intensity={1} />
          <OrbitControls enableZoom={false} enableRotate={false} />
          <ChatbotModel isOpen={isOpen} />
        </Canvas>
      </div>
    </div>
  );
};

export default ChatbotBubble;









