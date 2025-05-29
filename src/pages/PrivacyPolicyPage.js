import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mt-2">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-8">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Introduction */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              At Little Hearts Clothing, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Personal Information</h3>
                <p>When you contact us or place an order, we may collect your name, email address, phone number, shipping address, and payment information.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Automatically Collected Information</h3>
                <p>We may collect information about your device, browser type, IP address, and how you interact with our website through cookies and similar technologies.</p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>• Process and fulfill your orders</p>
              <p>• Communicate with you about your purchases</p>
              <p>• Provide customer support and respond to inquiries</p>
              <p>• Improve our website and services</p>
              <p>• Send you updates about new products (with your consent)</p>
              <p>• Comply with legal obligations</p>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Information Sharing
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <div className="space-y-2 ml-4">
                <p>• With service providers who help us operate our business (shipping, payment processing)</p>
                <p>• When required by law or to protect our rights</p>
                <p>• With your explicit consent</p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Rights
            </h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>You have the right to:</p>
              <div className="space-y-2 ml-4">
                <p>• Access and review your personal information</p>
                <p>• Request corrections to inaccurate information</p>
                <p>• Request deletion of your personal information</p>
                <p>• Opt-out of marketing communications</p>
                <p>• Withdraw consent where applicable</p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party services like Instagram and WhatsApp. These services have their own privacy policies, and we are not responsible for their practices.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              While we create clothing for children, our website and services are intended for adults. We do not knowingly collect personal information from children under 13 without parental consent.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Policy Updates
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated effective date.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 shadow-sm border border-pink-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@littleheartsclothing.com</p>
                <p><strong>WhatsApp:</strong> +91 907 116 6801</p>
                <p><strong>Instagram:</strong> @littlehearts.clothing</p>
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

export default PrivacyPolicyPage; 