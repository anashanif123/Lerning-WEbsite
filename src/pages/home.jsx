import backgroundimage from "../assets/image 12.png";
import background2image from "../assets/Rectangle 19.png";
import background3image from "../assets/Rectangle 21.png";
// import background4image from "../assets/confident-teacher-explaining-lesson-pupils 2.jpg";
// import background5image from "../assets/image 7.png";
// import background6image from "../assets/image 8.png";
// import background7image from "../assets/Ellipse 126.png";
// import background8image from "../assets/image 10 (1).png";
// import background9image from "../assets/portrait-teacher-giving-online-class 1 (1).jpg";
import ClassroomInterface from "../components/ClassroomInterface";
import TextSection from "../components/textSection";
import OurSucces from "../components/ourSucces";
import ToolsForTeachers from "../components/tools";
import Sectionsee from "../components/sectionsee";
import ExploreCourses from "../components/explorecourse";

function Home() {
  return (
    <>
      <div
        className="bg-cyan-400 font-sans relative"
        style={{
          height: "800px",
          borderBottomLeftRadius: "70% 25%",
          borderBottomRightRadius: "70% 25%",
          overflow: "hidden",
        }}
      >
        <div className="container mx-auto py-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-orange-500 mb-4">
                Studying <span className="text-white">Online is now</span>
              </h2>
              <h3 className="text-3xl font-bold text-white mb-6">
                much easier
              </h3>
              <p className="text-lg text-white mb-8">
                TOTC is an interesting platform that will teach you in a more
                interactive way
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <button className="bg-white text-black px-8 py-3 rounded-md font-medium">
                  Join for free
                </button>
                <svg
                  className="w-10 h-10 text-white fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM5.7 10.7l5.3-5.3 5.3 5.3H10l-5.3 5.3-5.3-5.3H5.7z" />
                </svg>
              </div>
            </div>
            <div className="md:w-1/2">
              {/* Shaped image with the same curve as the div */}
              <img
                style={{
                  height: "750px",
                  borderBottomLeftRadius: "70% 25%", // Matching the div shape
                  borderBottomRightRadius: "70% 25%",
                  objectFit: "cover",
                }}
                src={backgroundimage}
                alt="Girl Studying"
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        {/* First Absolute Positioned Div */}
        <div
          className="absolute bg-white p-4 rounded-lg shadow-lg"
          style={{
            top: "50%",
            right: "20%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div
          className="absolute bg-white p-4 rounded-lg shadow-lg"
          style={{
            top: "20%",
            right: "10%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        ></div>

        {/* Second Absolute Positioned Bubble Div */}
        <div
          className="absolute bg-white p-4 rounded-lg shadow-lg"
          style={{
            // width: "150px",
            // height: "150px",
            // borderRadius: "50%",
            top: "38%",
            right: "40%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div
          className="absolute bg-white p-4 rounded-lg shadow-lg"
          style={{
            top: "70%",
            right: "40%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
      </div>
      <OurSucces />
      <TextSection />
      <section className="bg-white text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">What is TOTC?</h2>
          <p className="mt-4">
            TOTC is a platform that allows educators to create and deliver
            online courses. Our mission is to make education accessible to
            everyone, everywhere.
          </p>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img
                src={background2image}
                alt="Instructor teaching online"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">For Instructors</h3>
              <p className="mt-2">
                Create and deliver engaging online courses to students around
                the world.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img
                src={background3image}
                alt="Student studying online"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">For Students</h3>
              <p className="mt-2">
                Learn at your own pace, from anywhere, at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center py-10">
        <h2 className="text-2xl font-bold text-center text-blue-900">
          Our <span className="text-teal-500">Features</span>
        </h2>
        <p className="text-center text-gray-600 mt-2">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
        <ClassroomInterface />
        <ToolsForTeachers/>
     
        <ExploreCourses/>
      </div>
    </>
  );
}

export default Home;
