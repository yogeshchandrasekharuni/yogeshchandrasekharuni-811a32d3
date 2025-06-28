
import React from 'react';

const Publications = () => {
  const projects = [
    {
      title: "Discord AutoModerator Bot",
      description: "Open-source and self-hosted actionable server-moderator bot with a 0.7 F1 score.",
      link: {
        url: "https://medium.com/analytics-vidhya/shuddi-a-smart-bot-that-keeps-your-discord-channel-free-of-profanity-5c9cbf30641",
        text: "Medium: \"Shuddi - A smart bot that keeps your Discord channel free of profanity\""
      }
    },
    {
      title: "Bitcoin Blockchain Fraud Detection System",
      description: "Open-source software that can detect historically malicious Bitcoin addresses with 93% accuracy.",
      link: {
        url: "https://medium.com/analytics-vidhya/using-ai-to-detect-bitcoin-addresses-involved-in-ransomware-transactions-3beaeccba176",
        text: "Medium: \"Using AI to detect Bitcoin addresses involved in ransomware transactions\""
      }
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Publications</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
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

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Research & Development Projects</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-3">
                {project.description}
              </p>
              <a 
                href={project.link.url}
                className="text-blue-600 hover:underline inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
