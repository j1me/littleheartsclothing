import React from 'react';
import { Link } from 'react-router-dom';

const DataDeletionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-pink-600">
                Little Hearts Clothing
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-pink-600 transition duration-200">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-pink-600 transition duration-200">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Data Deletion Request
          </h1>
          
          <div className="prose max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Data Practices
              </h2>
              <p className="text-gray-600 mb-4">
                At Little Hearts Clothing, we are committed to protecting your privacy and maintaining 
                transparency about our data practices. Currently, our website does not collect, store, 
                or process personal user data through our web platform.
              </p>
              <p className="text-gray-600 mb-4">
                We operate a simple informational website that showcases our clothing products. 
                We do not have user accounts, shopping carts, or any data collection mechanisms 
                on our website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Facebook Integration
              </h2>
              <p className="text-gray-600 mb-4">
                This data deletion page exists to comply with Facebook's developer requirements 
                for accessing their Graph API. While we currently do not collect user data through 
                our website, any future Facebook integrations will follow strict privacy guidelines.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Data Deletion Requests
              </h2>
              <p className="text-gray-600 mb-4">
                If you believe we have collected any of your personal information, or if you would 
                like to request deletion of any data associated with your interaction with our 
                Facebook presence or future services, please contact us using the information below.
              </p>
              <p className="text-gray-600 mb-4">
                We will respond to all legitimate data deletion requests within 30 days and will 
                provide confirmation once any requested data has been deleted.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@littleheartsclothing.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Subject Line:</strong> Data Deletion Request
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Required Information:</strong> Please include your full name, 
                  email address, and specific details about the data you would like deleted.
                </p>
                <p className="text-gray-600 text-sm">
                  Note: Please allow up to 30 days for processing your request. 
                  You will receive a confirmation email once your request has been processed.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Request information about what personal data we have about you</li>
                <li>Request deletion of your personal data</li>
                <li>Request correction of inaccurate personal data</li>
                <li>Withdraw consent for data processing where applicable</li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500 mb-4">
                Last updated: December 2024
              </p>
              <div className="flex justify-center space-x-4">
                <Link 
                  to="/privacy" 
                  className="text-pink-600 hover:text-pink-700 underline transition duration-200"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/" 
                  className="text-pink-600 hover:text-pink-700 underline transition duration-200"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionPage; 