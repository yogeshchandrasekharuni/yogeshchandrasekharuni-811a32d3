
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Kairos Technologies",
      period: "June 2021 - Present",
      location: "Hyderabad, India",
      responsibilities: [
        "Architected, developed, and scaled up the back-end framework of a generative chat-bot to thousands of queries per minute and 2M+ tokens per day.",
        "Designed an ETL pipeline for a vector database with millisecond latency",
        "Built and deployed an intent-classification (97%+ accuracy), entity-extraction (0.94 recall) and function-calling (75% AST eval) capable module."
      ]
    },
    {
      title: "Freelance Machine Learning Engineer",
      company: "Freelancing",
      period: "September 2020 – Present",
      location: "Hyderabad, India (Hybrid)",
      responsibilities: [
        "News Recommendation Engine: Designed, trained and deployed a recommendation engine for a client's internal software.",
        "Public Opinion and Sentiment Tracker for Political Figures: Web-scale data mining and analysis software for a political strategy company.",
        "Hawk AI: Real-time and actionable incident detection, using multi-agent multi-modal LLMs and CV models. Also reports root-cause analysis. Showcased as a flagship product at Global AI Summit - 2024, Telangana."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Kairos Technologies",
      period: "November 2020 – February 2021",
      location: "Visakhapatnam, India",
      responsibilities: [
        "Built an end-to-end AI system to retrieve structured information from 1500+ document clusters that replaced a legacy pipeline while requiring only 10% of the resources.",
        "Designed and developed a layout-agnostic resume-parser capable of running on edge devices with less than 500MB of RAM."
      ]
    },
    {
      title: "Research Assistant",
      company: "GITAM School of Technology",
      period: "June 2019 – December 2019",
      location: "Visakhapatnam, India (Remote)",
      responsibilities: [
        "Collaborated on optimizing CNNs for processing large-scale hyperspectral satellite images, improving model inference speed by over 30%.",
        "Implemented wavelet transform techniques to enhance image compression, 4-bit quantization and other optimizations.",
        "Developed a custom ONNX operator for the wavelet transformation, resulting in a 50ms faster inference."
      ]
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-gray-700 font-medium">{exp.company}</p>
                <p className="text-gray-600">{exp.period} | {exp.location}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
