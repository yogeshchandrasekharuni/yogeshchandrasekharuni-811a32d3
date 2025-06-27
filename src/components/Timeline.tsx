
import React from 'react';

const Timeline = () => {
  const projects = [
    {
      title: "Task-driven AI Agent Chain for Multi-step Task Execution",
      date: "Upcoming, November 2025",
      organization: "Confidential (NDA)",
      description: "To develop a task-driven AI agent chain that can execute multi-step tasks by orchestrating multiple agents. The system is designed to handle complex workflows and automate repetitive tasks, improving efficiency and reducing manual effort. The agent chain can be customized to suit various use cases, such as data processing, content generation, and customer support. Workflow will be in natural language, and the system will be capable of understanding and executing the tasks in a sequential manner, ensuring that each step is completed before moving on to the next.",
      status: "upcoming"
    },
    {
      title: "Orchestrating Agents to Monitor, Analyze and Buy-Sell Cryptocurrency on Exchanges",
      date: "Upcoming, July 2025",
      organization: "Confidential",
      description: "Agentic system to monitor, trigger, and execute buy-sell orders on cryptocurrency exchanges based on market trends and user-defined strategies. The system is designed to be highly responsive and capable of handling multiple exchanges simultaneously, providing users with a powerful tool for managing their cryptocurrency investments.",
      status: "upcoming"
    },
    {
      title: "Leveraging Orchestrated Agents for HR Process Automation",
      date: "June 2025",
      organization: "Wexa.ai",
      description: "Solution engineering to leverage an agentic AI platform to automate HR processes such as recruitment, onboarding, and employee management. The platform uses a combination of AI agents to streamline these processes, reducing manual effort and improving efficiency. The solution is designed to be scalable and adaptable, allowing organizations to customize the automation to their specific HR needs.",
      status: "completed"
    },
    {
      title: "Agentic AI Framework For Enabling End-users to Develop, Deploy and Manage AI Agents",
      date: "April 2025",
      organization: "Kodeus",
      description: "Developed an application that automates creation of AI agents, utilizes existing MCPs, and allows end-users to develop, deploy, and manage AI agents without requiring any programming skills. The framework is designed to be user-friendly and accessible, enabling users to create AI agents that can perform various tasks, such as data analysis, customer support, and content generation, without needing to write code.",
      status: "completed"
    },
    {
      title: "Multi-modal Consumer-facing AI Agent for Product Discovery, Recommendation and Purchase",
      date: "February 2025",
      organization: "Cabinetworks Group",
      description: "Capable of understanding user queries in natural language, processing images of products, and providing personalized recommendations. The agent can also assist users in making purchases directly through the platform, streamlining the shopping experience and enhancing customer satisfaction. Also outputs images of the recommended products, making it easier for users to visualize their options.",
      status: "completed"
    },
    {
      title: "Advanced RAG Pipeline for Efficient Search and Document Processing in Enterprise-Scale Financial Advisory Operations",
      date: "December 2024",
      organization: "Confidential (NDA) - One of the largest investment banking firms in the world",
      description: "The Advanced Retrieval-Augmented Generation (RAG) Pipeline for Financial Advisors is designed to enhance document search and retrieval capabilities within one of the world's largest investment banking firms. Implemented in December 2024, this system utilizes state-of-the-art NLP techniques and large-scale data processing to allow financial advisors to seamlessly search and retrieve relevant information from a vast repository of policy documents, financial reports, and other enterprise-wide resources.",
      status: "completed"
    },
    {
      title: "Assessing Terminal-protection Requirements for Batteries Submitted for Recycling",
      date: "November 2024",
      organization: "Recycle My Battery",
      description: "Designed, trained, and deployed an optimised CNN model to classify battery types with 92.5%+ accuracy. Pipeline to automatically label images of batteries, and then train a CNN model to classify battery types. The model is capable of classifying battery types with 92.5%+ accuracy, and can be used for various downstream tasks like battery recycling, battery management, etc.",
      status: "completed"
    },
    {
      title: "AI-powered Devotee-facing Volunteer Chatbot for Isha's Programs",
      date: "May 2024",
      organization: "Isha Foundation",
      description: "RAG-based chatbot + support for user's to book/reschedule/find out more info about Isha's programs. Currently live in multiple centres in India and USA.",
      status: "completed"
    },
    {
      title: "Real-time Public Sentiment Analysis & Dashboard",
      date: "April 2024",
      organization: "Confidential, local political party",
      description: "Localized sentiment analysis system for real-time public sentiment analysis and dashboard. The system is capable of analyzing public sentiment from various sources like social media, news articles, etc. and provides a dashboard for visualizing the sentiment trends.",
      status: "completed"
    },
    {
      title: "Multi-modal, AI System for Real-time Configurable Incident Detection",
      date: "December 2023",
      organization: "D-meter group",
      description: "Real-time and actionable incident detection, using multi-agent multi-modal LLMs and CV models. Also reports root-cause analysis. Showcased as a flagship product at Global AI Summit - 2024, Telangana.",
      status: "completed"
    },
    {
      title: "LLM-driven Chat bot for Customer Support Automation",
      date: "June 2023",
      organization: "Western Union",
      description: "Generative-AI powered chat-bot for customer support automation. Also supports drop-in function calling for various tasks like transaction status retrieval, FAQ resolution, troubleshooting, etc. The chat-bot is capable of handling a wide range of customer queries and can be used for various downstream tasks like customer support automation, customer engagement, etc. Currently in production in 75+ countries that WU operates in.",
      status: "completed"
    },
    {
      title: "RAG-powered Chat with Documents Application",
      date: "February 2023",
      organization: "Skil.AI",
      description: "State-of-the-art retrieval augmented generation (RAG) powered chat with documents application. The application is capable of answering questions based on the documents provided by the user. The application uses a combination of LLMs and vector databases to provide accurate and relevant answers to the user's questions.",
      status: "completed"
    },
    {
      title: "Multi-agent Framework for Orchestrating AI agents",
      date: "December 2022",
      organization: "NextCX.ai",
      description: "Architected, developed, and scaled up the back-end framework of a generative chat-bot to thousands of queries per minute and 2M+ tokens per day. Designed an ETL pipeline for a vector database with millisecond latency. Built and deployed an intent-classification (97%+ accuracy), entity-extraction (0.94 recall) and function-calling (75% AST eval) capable module.",
      status: "completed"
    },
    {
      title: "AI-Powered Chatbot for Automated Customer Self-Service and Support",
      date: "May 2022",
      organization: "Western Union",
      description: "The AI-Powered Chatbot for Automated Customer Self-Service and Support, developed in May 2022 for Western Union, utilizes advanced natural language processing (NLP) and machine learning (ML) techniques to provide scalable, multi-lingual, and multi-stage automated customer support. The system is designed to autonomously handle a wide range of transactional and informational queries, optimizing customer interactions by offering real-time, self-service solutions.",
      status: "completed"
    },
    {
      title: "Toolkit for Importing Hand-drawn Engineering Drawings Into CAD Software",
      date: "December 2021",
      organization: "Skil.AI",
      description: "Toolkit for importing hand-drawn engineering blueprints into AutoCAD which enabled 75% of a client's archive of legacy drawings to be digitized without any manual effort, and an additional 10% requiring only minimal human corrections.",
      status: "completed"
    },
    {
      title: "Lightweight Resume Parsing and Ranking For Edge Devices",
      date: "April 2021",
      organization: "Skil.AI",
      description: "Designed and developed a layout-agnostic resume-parser capable of running on edge devices with less than 500MB of RAM. Given a JD, the model ranks resumes based on their relevance to the JD. The model is capable of extracting structured data from resumes and can be used for various downstream tasks like resume ranking, resume search, etc.",
      status: "completed"
    },
    {
      title: "Layout-agnostic Information Extraction Pipeline for Formal Documents",
      date: "October 2020",
      organization: "Skil.AI",
      description: "Extract from my SOP discussing this project: I later secured an internship at a start-up working on extracting structured data from scanned invoices. Their application used over-fitted object detection models, which were inefficient for handling thousands of document layouts. After weeks of research, I developed an NLP-based, layout-agnostic solution inspired by Majumder et al. (ACL 2020). My model improved accuracy across 98% of the layout clusters while using 10% of the compute, thereby reducing server costs and streamlining MLOps.",
      status: "completed"
    },
    {
      title: "Optimizing CNN-based Segmentation Models for Low Compute Devices",
      date: "September 2019",
      organization: "Gandhi Institute of Technology and Management",
      description: "Extract from my SOP discussing this project: My first hands-on experience with AI came in my third semester as a Research Assistant under Dr. Sandeep Kumar, where I focused on optimizing CNNs for low-compute devices, specifically for processing hyperspectral satellite images. Integrating quantization-aware training and wavelet transforms, I faced challenges like exploding gradients, which I mitigated by adjusting the architecture and applying gradient clipping.",
      status: "completed"
    },
    {
      title: "Article Recommendation Engine for a Newsletter Website",
      date: "April 2019",
      organization: "Confidential",
      description: "Developed a recommendation engine for a newsletter website that suggests articles to users based on their reading history and preferences. The engine uses collaborative filtering and content-based filtering techniques to provide personalized recommendations, improving user engagement and retention.",
      status: "completed"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Projects Timeline</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`absolute left-2 w-4 h-4 rounded-full border-2 ${
                  project.status === 'upcoming' 
                    ? 'bg-blue-100 border-blue-500' 
                    : 'bg-green-100 border-green-500'
                }`}></div>
                
                {/* Content */}
                <div className="ml-12 bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 sm:mb-0">
                      {project.title}
                    </h3>
                    <span className={`text-sm px-2 py-1 rounded ${
                      project.status === 'upcoming' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {project.date}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mb-3">{project.organization}</p>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
