

export default function LessonCard  ({ image, title, author, lesson })  {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt="Lesson thumbnail" className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <div className="flex items-center mt-2">
                    <img src="https://placehold.co/32" alt="Author avatar" className="w-8 h-8 rounded-full"/>
                    <span className="ml-2 text-gray-600">{author}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <span className="ml-4 text-gray-600 text-sm">{lesson}</span>
                </div>
            </div>
        </div>
    );
};



    