const categories = [
    { icon: 'fas fa-pencil-alt', title: 'Design', color: 'bg-teal-100', textColor: 'text-teal-500' },
    { icon: 'fas fa-desktop', title: 'Development', color: 'bg-purple-100', textColor: 'text-purple-500' },
    { icon: 'fas fa-database', title: 'Development', color: 'bg-blue-100', textColor: 'text-blue-500' },
    { icon: 'fas fa-briefcase', title: 'Business', color: 'bg-teal-100', textColor: 'text-teal-500' },
    { icon: 'fas fa-bullhorn', title: 'Marketing', color: 'bg-yellow-100', textColor: 'text-yellow-500' },
    { icon: 'fas fa-camera', title: 'Photography', color: 'bg-red-100', textColor: 'text-red-500' },
    { icon: 'fas fa-theater-masks', title: 'Acting', color: 'bg-gray-100', textColor: 'text-gray-500' },
    { icon: 'fas fa-briefcase', title: 'Business', color: 'bg-teal-100', textColor: 'text-teal-500' },
];

function CourseChoice() {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Choice favourite course from top category</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className={`w-12 h-12 mx-auto mb-4 ${category.color} rounded-full flex items-center justify-center`}>
                            <i className={`${category.icon} ${category.textColor} text-2xl`}></i>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">{category.title}</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseChoice;