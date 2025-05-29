import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const DataDeletionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <header className="py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Data Deletion Request
          </h1>
          <p className="text-gray-600 mt-2">
            Your privacy and data rights
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-8">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Data Practices */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Our Data Practices
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Little Hearts Clothing, we are committed to protecting your privacy and maintaining 
                transparency about our data practices. Currently, our website does not collect, store, 
                or process personal user data through our web platform.
              </p>
              <p>
                We operate a simple informational website that showcases our clothing products. 
                We do not have user accounts, shopping carts, or any data collection mechanisms 
                on our website.
              </p>
            </div>
          </section>

          {/* Facebook Integration */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Facebook Integration
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This data deletion page exists to comply with Facebook's developer requirements 
              for accessing their Graph API. While we currently do not collect user data through 
              our website, any future Facebook integrations will follow strict privacy guidelines.
            </p>
          </section>

          {/* Data Deletion Requests */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Data Deletion Requests
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                If you believe we have collected any of your personal information, or if you would 
                like to request deletion of any data associated with your interaction with our 
                Facebook presence or future services, please contact us using the information below.
              </p>
              <p>
                We will respond to all legitimate data deletion requests within 30 days and will 
                provide confirmation once any requested data has been deleted.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 shadow-sm border border-pink-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p><strong>Email:</strong> privacy@littleheartsclothing.com</p>
              <p><strong>Subject Line:</strong> Data Deletion Request</p>
              <p><strong>Required Information:</strong> Please include your full name, 
                email address, and specific details about the data you would like deleted.</p>
              <p className="text-sm text-gray-500">
                Note: Please allow up to 30 days for processing your request. 
                You will receive a confirmation email once your request has been processed.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Rights
            </h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>You have the right to:</p>
              <div className="space-y-2 ml-4">
                <p>• Request information about what personal data we have about you</p>
                <p>• Request deletion of your personal data</p>
                <p>• Request correction of inaccurate personal data</p>
                <p>• Withdraw consent for data processing where applicable</p>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-4">
            <Link
              to="/"
              className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataDeletionPage; 