function Sectionsee() {
    return(
        <div className="mb-12">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold"></h2>
                        <a href="#" className="text-blue-500">SEE ALL</a>
                    </div>
                    <div className="flex space-x-4 overflow-x-auto pb-4">
                        {Array(10).fill().map((_, index) => (
                            <div key={index} className="tag bg-gradient-to-r from-yellow-400 to-red-500 text-white px-4 py-2 rounded-lg shadow-md">
                                Category {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                            <img src="https://placehold.co/300x200" alt="Course Image" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Integer id Orc Sed Ante Tincidunt</h3>
                            <p className="text-gray-600 mb-4">Cras convallis lacus orci, tristique tincidunt magna consequat in.</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                    <span className="text-gray-300"><i className="fas fa-star"></i></span>
                                </div>
                                <span className="text-gray-800 font-semibold">$450</span>
                            </div>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">EXPLORE</button>
                        </div>
                    </div>
                </div>
    )
}
export default Sectionsee;