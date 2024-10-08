import React from 'react';

import image from "../assets/Rectangle 77 (2).jpg";



function CoursetDeag() {
  return (
    <div className="bg-gray-100 p-6">
                    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="flex">
                            <div className="w-2/3">
                                <img src={image} alt="People in a meeting room with sticky notes on the wall" className="w-full h-full object-cover"/>
                            </div>
                            <div className="w-1/3 p-6">
                                <img src={image} alt="People in a meeting room with sticky notes on the wall" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <div className="text-3xl font-bold text-gray-800">$49.65 <span className="line-through text-gray-500">$99.99</span> <span className="text-green-500">50% Off</span></div>
                                <div className="text-sm text-gray-500 mb-4">11 hour left at this price</div>
                                <button className="w-full bg-teal-500 text-white py-2 rounded-lg mb-4">Buy Now</button>
                                <div className="text-lg font-semibold text-gray-800 mb-2">This Course included</div>
                                <ul className="text-gray-600 mb-4">
                                    <li className="flex items-center mb-2"><i className="fas fa-check-circle text-teal-500 mr-2"></i> Money Back Guarantee</li>
                                    <li className="flex items-center mb-2"><i className="fas fa-check-circle text-teal-500 mr-2"></i> Access on all devices</li>
                                    <li className="flex items-center mb-2"><i className="fas fa-check-circle text-teal-500 mr-2"></i> Certification of completion</li>
                                    <li className="flex items-center"><i className="fas fa-check-circle text-teal-500 mr-2"></i> 24 Modules</li>
                                </ul>
                                <div className="text-lg font-semibold text-gray-800 mb-2">Training 5 or more people</div>
                                <div className="text-gray-600 mb-4">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
                                <div className="text-lg font-semibold text-gray-800 mb-2">Share this course</div>
                                <div className="flex space-x-4 text-gray-600">
                                    <i className="fab fa-facebook-square text-2xl"></i>
                                    <i className="fab fa-twitter-square text-2xl"></i>
                                    <i className="fab fa-linkedin text-2xl"></i>
                                    <i className="fab fa-pinterest-square text-2xl"></i>
                                    <i className="fab fa-envelope-square text-2xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex space-x-4 mb-6">
                                <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-lg">Overview</button>
                                <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-lg">Overview</button>
                                <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-lg">Overview</button>
                                <button className="bg-teal-500 text-white py-2 px-4 rounded-lg">Overview</button>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                <div className="text-2xl font-semibold text-gray-800 mb-2">4 out of 5</div>
                                <div className="flex items-center mb-4">
                                    <div className="text-yellow-500 text-xl mr-2"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i></div>
                                    <div className="text-gray-600">Top Rating</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <div className="w-1/5 text-gray-600">5 Stars</div>
                                        <div className="w-4/5 bg-gray-200 rounded-full h-2">
                                            <div className="bg-teal-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-1/5 text-gray-600">4 Stars</div>
                                        <div className="w-4/5 bg-gray-200 rounded-full h-2">
                                            <div className="bg-teal-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-1/5 text-gray-600">3 Stars</div>
                                        <div className="w-4/5 bg-gray-200 rounded-full h-2">
                                            <div className="bg-teal-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-1/5 text-gray-600">2 Stars</div>
                                        <div className="w-4/5 bg-gray-200 rounded-full h-2">
                                            <div className="bg-teal-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-1/5 text-gray-600">1 Stars</div>
                                        <div className="w-4/5 bg-gray-200 rounded-full h-2">
                                            <div className="bg-teal-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <div className="flex items-center mb-2">
                                        <img src={image} alt="Profile picture of Lina" className="w-10 h-10 rounded-full mr-4"/>
                                        <div>
                                            <div className="text-gray-800 font-semibold">Lina</div>
                                            <div className="text-yellow-500 text-sm"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i></div>
                                        </div>
                                        <div className="ml-auto text-gray-500 text-sm">3 Month</div>
                                    </div>
                                    <div className="text-gray-600">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <div className="flex items-center mb-2">
                                        <img src={image} alt="Profile picture of Lina" className="w-10 h-10 rounded-full mr-4"/>
                                        <div>
                                            <div className="text-gray-800 font-semibold">Lina</div>
                                            <div className="text-yellow-500 text-sm"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i></div>
                                        </div>
                                        <div className="ml-auto text-gray-500 text-sm">3 Month</div>
                                    </div>
                                    <div className="text-gray-600">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
  );
}

export default CoursetDeag;



