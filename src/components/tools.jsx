import backgroundimage from "../assets/image 12.png";


import React from 'react';


function ToolsForTeachers() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        {/* Left Side: Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold leading-snug">
            <span className="text-teal-500">Tools</span> For Teachers <br />
            And Learners
          </h2>
          <p className="mt-4 text-gray-600">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative">
            <img
              src={backgroundimage}
              alt="Teacher holding books"
              className="w-80 h-auto rounded-lg"
            />
            {/* Floating icons or shapes can be placed here */}
            <div className="absolute top-0 left-0 w-10 h-10 bg-yellow-300 rounded-full" />
            <div className="absolute bottom-4 right-0 w-8 h-8 bg-purple-400 rounded-full" />
            <div className="absolute top-10 right-12 w-8 h-8 bg-blue-300 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolsForTeachers;
