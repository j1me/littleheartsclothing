import React from 'react';
import { Link } from 'react-router-dom';
import InstagramPosts from '../components/InstagramPosts';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Logo */}
      <header className="flex justify-center py-8 px-4">
        <img 
          src={`${process.env.PUBLIC_URL}/LittleHearts.png`}
          alt="Little Hearts Clothing" 
          className="h-24 md:h-32 object-contain"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-8">
        <div className="max-w-md mx-auto space-y-8">
          
          {/* Instagram Section */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4 text-center">
              Follow our journey
            </h2>
            
            {/* Instagram Posts Grid */}
            <InstagramPosts />
          </section>

          {/* E-Commerce CTA Section */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              E-commerce site launching soon
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our curated collection will be available online shortly.
            </p>
            
            <a
              href="https://wa.me/919071166801"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-whatsapp-green text-white py-4 px-6 rounded-xl font-medium text-lg hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Chat with us on WhatsApp
            </a>
          </section>

          {/* Navigation to About */}
          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors duration-200"
            >
              Meet the Founder 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-gray-200/50">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-3">
            <a
              href="https://www.instagram.com/littlehearts.clothing/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @littlehearts.clothing
            </a>
          </div>
          <div className="text-center">
            <Link
              to="/privacy"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 