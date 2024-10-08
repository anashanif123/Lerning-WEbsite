import blog from "../assets/Rectangle 32 (3).png";

function Apppormotion() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center  py-10">
            <div className="bg-gray-900 text-white py-4 px-8 rounded-lg  w-3/4 mb-10 flex justify-center items-center space-x-4">
                <span className="text-lg font-semibold">APP is available for free</span>
                <button className="bg-teal-500 text-white py-2 px-4 rounded-lg">Android APP</button>
                <button className="bg-teal-500 text-white py-2 px-4 rounded-lg">iOS APP</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <img src={blog} alt="Laptop with online meeting" className="rounded-t-lg mb-4"/>
                    <h2 className="text-xl font-semibold mb-2">Become a Teacher</h2>
                    <p className="text-gray-600 mb-4">Cursus, turpis nec lacinia egestas, nisi sapien egestas libero, non tincidunt eros magna nec nisi. Integrates exclusively...</p>
                    <button className="bg-teal-500 text-white py-2 px-4 rounded-lg">Apply as Teacher</button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <img src={blog} alt="Laptop with online meeting" className="rounded-t-lg mb-4"/>
                    <h2 className="text-xl font-semibold mb-2">Become a Counselor</h2>
                    <p className="text-gray-600 mb-4">Cursus, turpis nec lacinia egestas, nisi sapien egestas libero, non tincidunt eros magna nec nisi. Integrates exclusively...</p>
                    <button className="bg-teal-500 text-white py-2 px-4 rounded-lg">Apply as Counselor</button>
                </div>
            </div>
        </div>
    );
}

export default Apppormotion;