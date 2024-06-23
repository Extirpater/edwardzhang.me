import React from 'react';
import profilePicture from '../assets/PFP2.jpeg'; // Replace with your actual profile picture

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto pt-24">
                <div className="bg-white shadow-lg rounded-lg p-8 flex items-center max-w-4xl mx-auto">
                    <div className="flex-none mr-8">
                        <img src={profilePicture} alt="Profile" className="w-40 h-40 rounded-full" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold mb-4">Edward B. Zhang</h1>
                        <p className="text-lg mb-4">
                            CS + Math @ <span className="font-bold text-green-500">Dartmouth College</span>
                        </p>
                        <div className="flex items-start">
                            <div className="w-3/10">
                                <p className="text-lg font-bold mb-2">Research</p>

                            </div>
                            <div className="w-5/10 mt-4 pl-4" >
                                <p className="text-gray-600 mb-4 pl-2">
                                    Harvard Ophthalmology AI Lab
                                </p>
                                <p className="text-gray-600 mb-4 pl-2">
                                    Dartmouth Hitchcock Medical Center EDIT Lab
                                </p>
                                <p className="text-gray-600 mb-4 pl-2">
                                    NIH Lyme Disease Studies Unit
                                </p>

                            </div>

                            <div className="w-2/10 mt-4 ml-3" >
                                <p className="text-gray-600 mb-4 pl-2">
                                    2024-present
                                </p>
                                <p className="text-gray-600 mb-4 pl-2">
                                    2021-present
                                </p>

                                <p className="text-gray-600 mb-4 pl-2">
                                    202x-202x
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
