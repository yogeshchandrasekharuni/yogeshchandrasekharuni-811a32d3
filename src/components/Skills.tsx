
import React from 'react';

const Skills = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Techstack</h3>
              <p className="text-gray-700">AI, Data & Software engineering</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Programming Languages</h3>
              <p className="text-gray-700">Python, C, C++, Shell</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">APIs and Frameworks</h3>
              <p className="text-gray-700">Torch, TensorFlow, OpenCV, Triton, ONNX, FastAPI and more</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Tools and Services</h3>
              <p className="text-gray-700">Git, AWS, GCP, Docker, JIRA, Excel and more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
