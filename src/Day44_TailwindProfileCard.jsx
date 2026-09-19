// Assignment: Project 8 (React Tailwind CSS - Day 44) - Task 1: Profile Card (Tailwind CSS)
import { useState } from "react";

function TailwindProfileCard() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200">
      {/* Profile Image */}
      <img
        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-indigo-500"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
        alt="Profile"
      />

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-800 mt-4">Sarah Johnson</h3>

      {/* Job Title */}
      <p className="text-sm font-medium text-indigo-600">Senior UI/UX Designer</p>

      {/* Short Description */}
      <p className="text-gray-600 text-sm mt-3">
        Passionate about crafting intuitive user experiences, modern designs, and accessible digital products.
      </p>

      {/* Dynamic Button with content change */}
      <button
        onClick={() => setIsFollowing(!isFollowing)}
        className={`mt-5 w-full font-semibold py-2 px-4 rounded-xl transition duration-200 ${
          isFollowing
            ? "bg-gray-800 hover:bg-gray-900 text-white"
            : "bg-indigo-600 hover:bg-indigo-700 text-white"
        }`}
      >
        {isFollowing ? "Following ✓" : "Follow"}
      </button>
    </div>
  );
}

export default TailwindProfileCard;
