import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import Navigation from '../components/Navigation';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header with Logo */}
      <header className="flex justify-center py-8 px-4">
        <img 
          src={`${process.env.PUBLIC_URL}/LittleHearts.png`}
          alt="Little Hearts Clothing" 
          className="h-24 md:h-32 object-contain"
        />
      </header>

      {/* Product Categories */}
      <section className="text-center px-4 mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Baby & Kids Clothing
        </h1>
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {['Frocks', 'Onesies', 'Sleepsuits', 'Playsuits', 'T-shirts', 'Shorts', 'Co-ord sets'].map((category) => (
            <span 
              key={category} 
              className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Product Collection Section */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <ProductGrid />
          </section>

          {/* E-commerce Coming Soon Announcement */}
          <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-sm text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🎉 E-commerce Site Coming Soon!
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                While we're building our online store, you can still order your favorite Little Hearts pieces directly through WhatsApp or Instagram. We'd love to help you find the perfect outfits for your little ones!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919071166801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-whatsapp-green text-white py-3 px-6 rounded-xl font-medium hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.744-1.746-4.064-2.707-6.526-2.708-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.092-.639z"/>
                  </svg>
                  Order via WhatsApp
                </a>
                
                <a
                  href="https://www.instagram.com/littlehearts.clothing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                  </svg>
                  Order via Instagram
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm text-center">
            <Link
              to="/about"
              className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors duration-200"
            >
              Meet the Founder
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-gray-200/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-3">
            <a
              href="https://www.instagram.com/littlehearts.clothing/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
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