import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // try {
    //   const res = await axios.post(
    //     "http://localhost:8080/api/chat",
    //     { prompt: input,
    //       email: localStorage.getItem("email")
    //      },
    //     { headers: { "Content-Type": "application/json" } ,
    //   "Authorization": "Bearer " + localStorage.getItem("token")
    // },
    //   );
try {
  const res = await axios.post(
    "http://localhost:8080/api/chat",
    {
      prompt: input,
      email: localStorage.getItem("email"),
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
      const botMessage = { text: res.data, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response", error);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Error retrieving response", sender: "bot" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex  justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 h-[200px]">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 text-center text-xl font-semibold">
          🤖 Virtual Doctor
        </div>

        {/* Chat Body */}
        <div
          className=" flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
          style={{ height: "450px" }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-md p-3 rounded-2xl text-sm md:text-base shadow transition-transform duration-200 ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none hover:scale-105"
                    : "bg-gray-200 text-gray-900 rounded-bl-none hover:scale-105"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
              </div>
              <span className="text-sm italic">Bot is typing...</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Footer / Input */}
        <div className="p-4 border-t bg-white flex items-center space-x-3">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-transform duration-200 hover:scale-105"
          >
            Send 💬
          </button>
        </div>
      </div>
    </div>
  );
}










