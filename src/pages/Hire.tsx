
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Rocket, Target, Heart } from 'lucide-react';

const Hire = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Hire Yogesh Chandrasekharuni</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-700">
            I'm passionate about building AI-powered solutions that make a real impact. 
            Here are the ways we can collaborate:
          </p>
        </div>

        {/* Full-time Section */}
        <div className="mb-12 relative">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Full-time Opportunities</h3>
            <div className="relative">
              <p className="text-gray-700 mb-4">
                Join me full-time to build cutting-edge AI solutions and drive innovation at scale. 
                I bring deep expertise in machine learning, data science, and AI product development.
              </p>
              <p className="text-gray-600 text-sm">
                Let's discuss how I can contribute to your team's success and help achieve your AI initiatives.
              </p>
              
              {/* Overlay - only covers content, not heading */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-amber-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Currently Unavailable</h4>
                  <p className="text-gray-600 text-sm mb-4 max-w-sm">
                    Not actively seeking full-time roles, but I'd love to hear about exciting opportunities for future consideration.
                  </p>
                  <a 
                    href="mailto:yogeshchandrasekharuni@gmail.com?subject=Full-time Opportunity Inquiry"
                    className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors text-sm"
                  >
                    Send me an offer anyway
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part-time Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part-time Consulting</h3>
          <p className="text-gray-700 mb-8">
            I operate on two flexible engagement models to suit your project needs:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Hourly */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Hourly Basis</h4>
              </div>
              <p className="text-gray-700">
                Perfect for short-term projects, specific tasks, or when you need flexible support. 
                Pay only for the time invested in your project.
              </p>
            </div>

            {/* Retainer */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-green-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Retainer Basis</h4>
              </div>
              <p className="text-gray-700">
                Ideal for ongoing projects or when you need dedicated availability. 
                Secure priority access to my time with predictable monthly costs.
              </p>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Special Offers</h3>
          
          <div className="space-y-6">
            {/* Early-stage startups */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-4">
                <Rocket className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">For Early-stage Startups</h4>
                <span className="ml-3 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Pre-seed / Seed</span>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Ideation to MVP</strong> - Special pricing for early-stage startups
              </p>
              <p className="text-gray-600 text-sm">
                I understand the challenges of early-stage funding. Let's discuss a custom package 
                that fits your budget while delivering maximum value.
              </p>
            </div>

            {/* Production/Go-to-market */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-green-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">For Production-Ready Startups</h4>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>MVP to Release</strong> - Special pricing for go-to-market phase
              </p>
              <p className="text-gray-600 text-sm">
                Ready to scale and launch? I'll help you optimize, productionize, and deploy 
                your AI solutions with competitive rates for growth-stage companies.
              </p>
            </div>

            {/* NGOs/Non-profits */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-purple-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">For NGOs & Non-profits</h4>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Pro Bono Work</strong> - Free consulting for supported causes
              </p>
              <p className="text-gray-600 text-sm">
                I believe in using technology for social good. If your cause aligns with my values 
                and can make a positive impact, I'll work for free. Reach out and tell me about your mission.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-700 mb-6">
            Let's discuss your project and find the perfect engagement model for your needs.
          </p>
          <a 
            href="mailto:yogeshchandrasekharuni@gmail.com?subject=Hiring Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hire;
