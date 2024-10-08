import React from "react";
import blog from "../assets/Rectangle 32 (3).png";
import blog2 from "../assets/Rectangle 32 (13).png";

import Rectangle2 from "../assets/Rectangle 33 (9).png";

const ReadingBlogList = () => {
  const blogCategories = [
    { name: "UI/UX", image: blog },
    { name: "React", image: blog2 },
    { name: "Web Design", image: Rectangle2 },
    { name: "JavaScript", image: blog },
  ];

  return (
    <div className="bg-gray-100 py-8  ">
      <h3 className="text-xl font-semibold text-gray-900 ">Reading Blog List</h3>
      <div className="container mx-auto w-full flex  justify-evenly">
        {/* Section Header */}

        {/* Blog Category List */}
        <div className="flex space-x-4 items-center  overflow-x-auto pb-4">
          {blogCategories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-lg shadow-lg w-48 h-56 flex flex-col items-center justify-center hover:shadow-xl transform transition-shadow duration-300 cursor-pointer relative"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="bg-white p-2 text-lg font-bold text-gray-900">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingBlogList;