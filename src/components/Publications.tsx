
import React from 'react';

const Publications = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Publications</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            "Representing Web Application as Knowledge Graphs"
          </h3>
          <p className="text-gray-600 mb-3">
            Yogesh Chandrasekharuni
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>Subjects:</strong> Information Retrieval (cs.IR); Artificial Intelligence (cs.AI)
            </p>
            <p className="text-gray-700">
              <strong>Cite as:</strong> arXiv:2410.17258 [cs.IR]
            </p>
            <a 
              href="https://doi.org/10.48550/arXiv.2410.17258" 
              className="text-blue-600 hover:underline inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.48550/arXiv.2410.17258
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
