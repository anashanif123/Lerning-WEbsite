import LessonCard from "../components/coursetag";
import image from "../assets/Rectangle 32 (13).png"
import image2 from "../assets/Rectangle 32 (3).png"
import CourseChoice from "../components/coursechoce";
import Articles from "../components/articles";

  function CoursePage() {
    return(
        <div className="p-8">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Welcome back, ready for your next lesson?</h1>
            <a href="#" className="text-teal-500 font-medium">View history</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LessonCard
                image={image} 
                title="AWS Certified Solutions Architect" 
                author="Lina" 
                lesson="Lesson 5 of 7" 
            />
            <LessonCard 
                image={image2} 
                title="AWS Certified Solutions Architect" 
                author="Lina" 
                lesson="Lesson 5 of 7" 
            />
            <LessonCard 
                image={image2}
                title="AWS Certified Solutions Architect" 
                author="Lina" 
                lesson="Lesson 5 of 7" 
            />
        </div>
        <div className="flex justify-center mt-6">
            <button className="bg-teal-500 text-white p-2 rounded-full mx-1">
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className="bg-teal-500 text-white p-2 rounded-full mx-1">
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    <CourseChoice/>
    <Articles
    text={"Recomonded for You"}
    />
    <Articles
    text={"Get Choice OF Your Course"}/>
    <header className="bg-gray-900 text-white text-center w-full py-12">
                <h1 className="text-2xl font-bold">Online coaching lessons for remote learning.</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <button className="mt-6 bg-teal-500 text-white py-2 px-4 rounded">Start learning now</button>
            </header>
            <Articles
             className="bg-teal-500"
    text={"The Course In Personal Development"}/>
    <Articles
    text={"Student Are Viewing"}/>
    
    </div>

);
  }
  export default CoursePage;