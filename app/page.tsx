"use client";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col justify-between py-16 px-6 relative">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold italic text-white mb-2">
          Welcome to my Frontend journey
        </h1>
        <p className="text-xl font-bold italic text-white">
          Powered by <span className="text-yellow-300">Next.js & Tailwind CSS 🚀</span>
        </p>
      </div>

      {/* Centered Bottom Section */}
      <div
  className="absolute left-1/2 transform -translate-x-1/2 text-center"
  style={{ bottom: '200px' }} // Adjust as needed (~5cm)
>
  <div className="text-purple-300 text-2xl mb-4">Message from API:</div>
  <button
    className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-blue-200 transition"
    onClick={() => setIsModalOpen(true)}
  >
    Hover Me
  </button>
</div>

      {/* Centered Modal */}
 {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 animate-fadeIn">
    <div className="bg-purple-600 text-white rounded-lg shadow-2xl p-6 text-center w-[320px]">
      <h2 className="text-xl font-bold mb-4">How can I help you?</h2>
      <button
        className="mt-4 bg-white text-purple-700 px-4 py-2 rounded hover:bg-purple-100 font-semibold transition duration-300"
        onClick={() => setIsModalOpen(false)}
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
}