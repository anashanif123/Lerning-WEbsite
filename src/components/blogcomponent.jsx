import React from "react";
import blog from "../assets/Rectangle 32 (3).png";
import blog2 from "../assets/Rectangle 19.png";



const BlogSection = () => {
  return (
    <div className="bg-gray-100 py-8 px-4">
      {/* Blog Header */}
      <div className="container mx-auto flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6 flex-1">
          <p className="text-sm text-gray-500 mb-2">By ThemezBrains in Inspiration</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
            Read More
          </button>
        </div>
        <div className="flex-1">
          <img
            src={blog}
            alt="Blog Header"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
</div>
      
       
  );
};

export default BlogSection;
