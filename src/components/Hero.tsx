
import React from 'react';

const Hero = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/989219f3-755b-414d-92a3-7db3f07a5049.png" 
              alt="Yogesh Chandrasekharuni" 
              className="w-48 h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Yogesh Chandrasekharuni</h1>
            <p className="text-lg text-gray-700 mb-6">Your Friendly Neighborhood AI Engineer</p>
            <div className="text-gray-600 space-y-2">
              <p><strong>Email:</strong> yogeshchandrasekharuni@gmail.com</p>
              <p><strong>Phone:</strong> +91 7032521800</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:underline">Medium</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
