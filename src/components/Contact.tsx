
import React from 'react';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <p className="text-gray-700 mb-4">
            Feel free to reach out for collaborations or opportunities.
          </p>
          <Button asChild>
            <a href="mailto:yogeshchandrasekharuni@gmail.com?subject=Contact Inquiry">
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
