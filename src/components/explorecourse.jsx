import React from "react";

const ExploreCourses = () => {
  const categories = [
    {
      title: "Lorem Ipsum",
      tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
      course: {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnla1WSDoy4QRSjuxmom56wd9d0dp4Z0i5PbwyqHZk4K_AjviQ", // Replace with your image source
        title: "Integer id Orc Sed Ante Trincidunt",
        description: "Course overview goes here.",
        rating: 4.5,
        price: "$450",
      },
    },
    {
      title: "Quisque a Consequat",
      tags: ["Tag6", "Tag7", "Tag8", "Tag9", "Tag10"],
      course: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnla1WSDoy4QRSjuxmom56wd9d0dp4Z0i5PbwyqHZk4K_AjviQ",
        title: "Sed Nunc Ante Trincidunt",
        description: "Another course description.",
        rating: 4.8,
        price: "$450",
      },
    },
    {
      title: "Aenean Facilisis",
      tags: ["Tag11", "Tag12", "Tag13", "Tag14", "Tag15"],
      course: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnla1WSDoy4QRSjuxmom56wd9d0dp4Z0i5PbwyqHZk4K_AjviQ",
        title: "Tristique Lectus In Mollis",
        description: "Description for the third course.",
        rating: 5.0,
        price: "$450",
      },
    },
  ];

  return (
    <div className="p-8 bg-gray-100 w-full ">
      <h2 className="text-2xl font-bold mb-4">Explore Course</h2>
      <p className="text-gray-600 mb-6">Ut sed eros finibus, placerat orci id, dapibus.</p>
      {categories.map((category, index) => (
        <div className="mb-10  " key={index}>  
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold ">{category.title}</h3>
            <a href="/see-all" className="text-blue-500 hover:underline">See All</a>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {category.tags.map((tag, idx) => (
              <span key={idx} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full rotate-45 text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center  bg-white p-4 rounded-lg shadow-md">
            <img src={category.course.image} alt={category.course.title} className="w-20 h-20 rounded-lg mr-4" />
            <div>
              <h4 className="text-lg font-semibold ">{category.course.title}</h4>
              <p className="text-gray-600">{category.course.description}</p>
              <div className="flex items-center text-yellow-500">⭐ {category.course.rating}</div>
              <div className="font-bold text-gray-800">{category.course.price}</div>
              <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
                Explore
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreCourses;
