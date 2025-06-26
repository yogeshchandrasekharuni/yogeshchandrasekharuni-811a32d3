
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Discord - AutoModerator Bot",
      description: "Open-source and self-hosted actionable server-moderator bot with a 0.7 F1 score.",
      link: "Medium: \"Shuddi - A smart bot that keeps your Discord channel free of profanity\""
    },
    {
      title: "Fraud Detection in Bitcoin Blockchain",
      description: "Open-source software that can detect historically malicious Bitcoin addresses with 93% accuracy.",
      link: "Medium: \"Using AI to detect Bitcoin addresses involved in ransomware transactions\""
    }
  ];

  const awards = [
    "Winner- Grid Dynamics Hackathon, 2024. Full-stack AI-powered employee management software.",
    "Winner- Elevate Hackathon, 2024. GenAI-powered backend for an automated testing platform.",
    "Exemplary Engineer (ML) Award- For managing and delivering multiple AI projects in 2023",
    "Finalist- Spark Hackathon, 2023",
    "Finalist- Infosys Power Programmer Hackathon, 2022",
    "Young Achiever Award GITAM School of Technology, 2022",
    "Stood 18th in All-India AI Blogathon, Applied Roots",
    "Infosys Certified Software Engineer"
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Projects</h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-600 italic">{project.link}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Awards</h2>
            <ul className="space-y-3">
              {awards.map((award, index) => (
                <li key={index} className="text-gray-700 border-b border-gray-200 pb-2">
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
