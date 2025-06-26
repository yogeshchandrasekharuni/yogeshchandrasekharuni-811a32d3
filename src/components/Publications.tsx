
import React from 'react';

const Publications = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Publications</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-700">
            Yogesh Chandrasekharuni "Representing Web Application as Knowledge Graphs" [under review by The 8th International Conference on Artificial Intelligence and Big Data (ICAIBD 2025)] arXiv:2410.17258 [cs.IR]
          </p>
          <a 
            href="https://doi.org/10.48550/arXiv.2410.17258" 
            className="text-blue-600 hover:underline mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://doi.org/10.48550/arXiv.2410.17258
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
