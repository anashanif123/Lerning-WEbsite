 
 import image from "../assets/image 12.png"
 
 function BlogHeader() {
    return (
        <div>
            <header className="bg-gray-900 text-white text-center w-full py-12">
                <h1 className="text-2xl font-bold">Online coaching lessons for remote learning.</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <button className="mt-6 bg-teal-500 text-white py-2 px-4 rounded">Start learning now</button>
            </header>
            <section className="text-center py-12">
                <h2 className="text-xl font-bold">Online coaching lessons for remote learning</h2>
                <div className="mt-6 max-w-4xl mx-auto">
                    <div className="border-b py-4">
                        <div className="flex justify-between items-center">
                            <p>Lorem ipsum dolor sit amet</p>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="border-b py-4">
                        <div className="flex justify-between items-center">
                            <p>Consectetur adipiscing elit, sed do</p>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="border-b py-4">
                        <div className="flex justify-between items-center">
                            <p>Elitamet tempus lorem ipsum</p>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="border-b py-4">
                        <div className="flex justify-between items-center">
                            <p>Lorem ipsum dolor sit amet</p>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        <div className="mt-4 text-left">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-blue-100 py-12">
    <h2 className="text-center text-xl font-bold mb-8">What our students have to say</h2>
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <i className="fas fa-chevron-left cursor-pointer hidden md:inline-block"></i>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src={image} alt="Student 1" className="mx-auto rounded-full w-10 mb-4" />
                <h3 className="font-bold">Dulkin Simons</h3>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src={image} alt="Student 2" className="mx-auto rounded-full w-10 mb-4" />
                <h3 className="font-bold">Dulkin Simons</h3>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src={image} alt="Student 3" className="mx-auto rounded-full w-10 mb-4" />
                <h3 className="font-bold">Dulkin Simons</h3>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-md text-center">
                <img src={image} alt="Student 4" className="mx-auto rounded-full w-10 mb-4" />
                <h3 className="font-bold">Dulkin Simons</h3>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <i className="fas fa-chevron-right cursor-pointer hidden md:inline-block"></i>
    </div>
</section>

        </div>
    );
}
export default BlogHeader;