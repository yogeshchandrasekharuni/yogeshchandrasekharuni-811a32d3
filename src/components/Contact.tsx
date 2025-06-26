
import React from 'react';

const Contact = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Work</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Volunteer AI Consultant</h3>
            <p className="text-gray-700 font-medium">Recycle My Battery</p>
            <p className="text-gray-600 mb-3">October 2023 – Present | Hyderabad, India (Remote)</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Designed, trained, and deployed an optimised CNN model to classify battery types with 92.5%+ accuracy</li>
              <li>Developed a fully on-device API to suggest battery recycling points, depending on proximity to location and user preferences.</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Volunteer Liaison Officer</h3>
            <p className="text-gray-700 font-medium">Deevena Autism Care Center</p>
            <p className="text-gray-600 mb-3">April 2018 – Present | Visakhapatnam, India (Hybrid)</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Leading the operations of a small-scale institute serving 50+ cognitively challenged individuals, including organizing and managing 10+ food and utility distribution events.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
