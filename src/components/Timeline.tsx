
import React from 'react';

const Timeline = () => {
  const projects = [
    {
      title: "Multi-Agent Task Orchestration Framework with Natural Language Workflow Processing",
      date: "Upcoming, November 2025",
      organization: "Confidential (NDA)",
      logo: "/lovable-uploads/1d9a8648-a934-4a63-8ef0-12ff6e1c9fce.png",
      description: "Developing a distributed multi-agent system for automated task execution using natural language workflow specifications. The framework implements agent coordination protocols, task dependency resolution, and sequential execution guarantees through state machine orchestration. Features dynamic agent allocation, fault tolerance mechanisms, and support for heterogeneous task types including data processing pipelines, content generation workflows, and customer support automation chains.",
      status: "upcoming"
    },
    {
      title: "Autonomous Cryptocurrency Trading System with Multi-Exchange Integration",
      date: "Upcoming, July 2025",
      organization: "Confidential",
      logo: "/lovable-uploads/1d9a8648-a934-4a63-8ef0-12ff6e1c9fce.png",
      description: "Building a real-time algorithmic trading platform that integrates multiple cryptocurrency exchanges through standardized APIs. The system implements market trend analysis using technical indicators, sentiment analysis, and machine learning-based price prediction models. Features include risk management protocols, portfolio optimization algorithms, and high-frequency trading capabilities with sub-second latency requirements.",
      status: "upcoming"
    },
    {
      title: "Agent-Based HR Process Automation Platform",
      date: "June 2025",
      organization: "Wexa.ai",
      logo: "/lovable-uploads/cf33f836-5af1-402c-80e5-f34ea8bf18ce.png",
      description: "Engineered a comprehensive HR automation solution leveraging a multi-agent architecture to streamline recruitment, onboarding, and employee lifecycle management. Implemented natural language processing for resume parsing, candidate matching algorithms, and automated interview scheduling. The platform integrates with existing HRIS systems and provides configurable workflow automation with audit trails and compliance monitoring.",
      status: "completed"
    },
    {
      title: "No-Code AI Agent Development Framework with MCP Integration",
      date: "April 2025",
      organization: "Kodeus",
      logo: "/lovable-uploads/af5de8a3-235b-4e83-b699-f1585732ef65.png",
      description: "Architected a visual development platform enabling non-technical users to create, deploy, and manage AI agents through drag-and-drop interfaces. The framework integrates Model Context Protocol (MCP) standards, supports custom tool integration, and provides automated deployment pipelines. Features include agent performance monitoring, A/B testing capabilities, and seamless integration with existing business systems.",
      status: "completed"
    },
    {
      title: "Multi-Modal AI Agent for E-Commerce Product Discovery and Recommendation",
      date: "February 2025",
      organization: "Cabinetworks Group",
      logo: "/lovable-uploads/1c2b8302-04b4-4f1b-8a67-68cd716169f1.png",
      description: "Developed an intelligent product discovery system combining computer vision, natural language processing, and recommendation algorithms. The system processes user queries in natural language, performs visual product search through image recognition, and generates personalized recommendations using collaborative and content-based filtering. Integrated with e-commerce platforms for seamless purchase flow and dynamic product visualization.",
      status: "completed"
    },
    {
      title: "Enterprise-Scale RAG Pipeline for Financial Document Processing",
      date: "December 2024",
      organization: "Confidential (NDA) - Global Investment Banking Institution",
      logo: "/lovable-uploads/1d9a8648-a934-4a63-8ef0-12ff6e1c9fce.png",
      description: "Implemented a high-performance Retrieval-Augmented Generation system for financial advisory operations, processing millions of documents including policy manuals, financial reports, and regulatory filings. The pipeline features multi-stage query optimization, semantic embedding generation, hierarchical indexing, and context-aware response generation. Achieved sub-second response times with 95%+ accuracy on financial document retrieval tasks.",
      status: "completed"
    },
    {
      title: "CNN-Based Battery Classification System for Recycling Operations",
      date: "November 2024",
      organization: "Recycle My Battery",
      logo: "/lovable-uploads/6fbcb827-360c-40f0-bfaa-e91389ee0d38.png",
      description: "Designed and deployed a computer vision pipeline for automated battery type classification achieving 92.5% accuracy. The system implements transfer learning on pre-trained CNN architectures, automated data labeling workflows, and real-time inference capabilities. Features include image preprocessing pipelines, model versioning, and integration with recycling facility management systems for terminal protection assessment automation.",
      status: "completed"
    },
    {
      title: "RAG-Enabled Program Management Chatbot for Religious Organization",
      date: "May 2024",
      organization: "Isha Foundation",
      logo: "/lovable-uploads/4587469f-460f-434c-a5c9-e1719419d29f.png",
      description: "Built a conversational AI system for program information retrieval and booking management using Retrieval-Augmented Generation. The chatbot handles complex queries about spiritual programs, facilitates booking and rescheduling through API integrations, and provides multilingual support. Currently deployed across multiple centers in India and USA, processing thousands of user interactions daily.",
      status: "completed"
    },
    {
      title: "Real-Time Political Sentiment Analysis Platform with Geographic Localization",
      date: "April 2024",
      organization: "Confidential - Political Organization",
      logo: "/lovable-uploads/1d9a8648-a934-4a63-8ef0-12ff6e1c9fce.png",
      description: "Engineered a comprehensive sentiment monitoring system aggregating data from social media platforms, news sources, and public forums. The platform implements natural language processing for sentiment classification, geographic clustering algorithms, and real-time dashboard visualization. Features include trend analysis, demographic segmentation, and automated alert systems for significant sentiment shifts.",
      status: "completed"
    },
    {
      title: "Multi-Modal Incident Detection System with Root Cause Analysis",
      date: "December 2023",
      organization: "Kairos Tech",
      logo: "/lovable-uploads/af5de8a3-235b-4e83-b699-f1585732ef65.png",
      description: "Developed a real-time safety monitoring system combining computer vision models, sensor data processing, and large language models for incident detection and analysis. The system features configurable alert thresholds, automated root cause analysis generation, and integration with existing safety management systems. Demonstrated as flagship product at Global AI Summit 2024, showcasing sub-second detection capabilities.",
      status: "completed"
    },
    {
      title: "Production-Scale Conversational AI Platform for Global Financial Services",
      date: "June 2023",
      organization: "Western Union",
      logo: "/lovable-uploads/2b9e625b-77d6-4a4c-8cd0-b33011fe2c18.png",
      description: "Architected and deployed a multilingual customer support automation system serving 75+ countries with function calling capabilities for transaction processing. The platform handles transaction status queries, FAQ resolution, and complex troubleshooting scenarios through integration with backend financial systems. Features include conversation context management, escalation protocols, and real-time performance analytics.",
      status: "completed"
    },
    {
      title: "Document-Aware Conversational AI with Retrieval-Augmented Generation",
      date: "February 2023",
      organization: "Skil.AI",
      logo: "/lovable-uploads/f6127ed4-1f72-4f64-abe0-76d51bbc12c4.png",
      description: "Implemented a state-of-the-art RAG system enabling natural language querying of document collections. The platform features advanced document preprocessing, semantic chunking strategies, vector database optimization, and context-aware response generation. Supports multiple document formats with real-time indexing and query performance optimization achieving millisecond-latency responses.",
      status: "completed"
    },
    {
      title: "High-Throughput Multi-Agent Conversational AI Backend",
      date: "December 2022",
      organization: "NextCX.ai",
      logo: "/lovable-uploads/a7d75658-b7fd-462a-959b-dea8334b600c.png",
      description: "Engineered a scalable backend infrastructure supporting thousands of concurrent conversations and 2M+ daily token processing. The system implements intent classification (97% accuracy), named entity recognition (0.94 recall), and function calling with AST-based evaluation (75% accuracy). Features include ETL pipelines for vector databases, real-time load balancing, and comprehensive monitoring and alerting systems.",
      status: "completed"
    },
    {
      title: "Multilingual Customer Self-Service Automation Platform",
      date: "May 2022",
      organization: "Western Union",
      logo: "/lovable-uploads/2b9e625b-77d6-4a4c-8cd0-b33011fe2c18.png",
      description: "Built an enterprise-grade conversational AI platform supporting automated customer service across multiple languages and regions. The system integrates natural language processing, machine learning-based query classification, and backend API orchestration for transaction processing. Features include continuous learning mechanisms, performance optimization, and comprehensive analytics for customer interaction patterns.",
      status: "completed"
    },
    {
      title: "Computer Vision Pipeline for Engineering Drawing Digitization",
      date: "December 2021",
      organization: "Skil.AI",
      logo: "/lovable-uploads/f6127ed4-1f72-4f64-abe0-76d51bbc12c4.png",
      description: "Developed an automated system for converting hand-drawn engineering blueprints into CAD-compatible formats. The pipeline combines object detection, line extraction algorithms, and geometric reconstruction to achieve 75% full automation with 10% requiring minimal human intervention. Implemented custom image preprocessing, feature extraction, and vector graphics generation optimized for AutoCAD integration.",
      status: "completed"
    },
    {
      title: "Edge-Optimized Resume Processing and Ranking System",
      date: "April 2021",
      organization: "Skil.AI",
      logo: "/lovable-uploads/f6127ed4-1f72-4f64-abe0-76d51bbc12c4.png",
      description: "Engineered a lightweight document processing system capable of running on resource-constrained devices (<500MB RAM). The system implements layout-agnostic text extraction, structured data parsing, and semantic similarity matching for job description alignment. Features include real-time ranking algorithms, batch processing capabilities, and integration APIs for applicant tracking systems.",
      status: "completed"
    },
    {
      title: "Layout-Agnostic Information Extraction Framework for Structured Documents",
      date: "October 2020",
      organization: "Skil.AI",
      logo: "/lovable-uploads/f6127ed4-1f72-4f64-abe0-76d51bbc12c4.png",
      description: "Designed an NLP-based document processing solution addressing limitations of traditional object detection approaches for invoice processing. The framework achieved 98% accuracy improvement across diverse layout clusters while reducing computational requirements by 90%. Implemented token-level classification, spatial relationship modeling, and adaptive template matching inspired by academic research in document understanding.",
      status: "completed"
    },
    {
      title: "Quantization-Aware CNN Optimization for Hyperspectral Image Processing",
      date: "September 2019",
      organization: "Gandhi Institute of Technology and Management",
      logo: "/lovable-uploads/24259f66-8b4e-43bc-aaef-1c89f7c313b3.png",
      description: "Researched and implemented optimization techniques for CNN-based segmentation models targeting low-compute satellite image processing applications. The project integrated quantization-aware training, wavelet transforms, and gradient clipping strategies to address exploding gradient problems. Achieved significant inference speed improvements while analyzing trade-offs in pixel-precision segmentation tasks for hyperspectral data analysis.",
      status: "completed"
    },
    {
      title: "Content-Based and Collaborative Filtering Recommendation Engine",
      date: "April 2019",
      organization: "Confidential",
      logo: "/lovable-uploads/1d9a8648-a934-4a63-8ef0-12ff6e1c9fce.png",
      description: "Implemented a hybrid recommendation system for newsletter content personalization using collaborative filtering and content-based approaches. The system analyzes user reading patterns, content similarity metrics, and engagement data to generate personalized article suggestions. Features include real-time recommendation updates, A/B testing framework, and performance analytics for measuring user engagement improvements.",
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
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <img 
                        src={project.logo} 
                        alt={`${project.organization} logo`}
                        className="w-8 h-8 object-contain flex-shrink-0"
                      />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {project.title}
                      </h3>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded whitespace-nowrap ${
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
