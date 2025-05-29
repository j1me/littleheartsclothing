import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <header className="py-8 px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            About the Founder
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-8">
        <div className="max-w-md mx-auto space-y-8">
          
          {/* Founder Image */}
          <div className="flex justify-center">
            <img 
              src={`${process.env.PUBLIC_URL}/founder.jpg`}
              alt="Catherine Robinson" 
              className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white/70"
            />
          </div>

          {/* Founder Story */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Catherine Robinson
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Catherine Robinson is the heart behind Little Hearts Clothing.
              </p>
              
              <p>
                After years in global finance at Northern Trust, she took a bold leap to follow her passion for fashion and craftsmanship. Inspired by motherhood and driven by detail, Catherine now hand-picks premium fabrics and works closely on stitching every outfit with care.
              </p>
              
              <p>
                As a mother of a 1.5-year-old, she understands the comfort children need. Each piece is designed with softness, quality, and love — stitched not just with thread, but with her journey.
              </p>
            </div>
          </section>

          {/* Quote Block */}
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 shadow-sm border border-pink-100">
            <blockquote className="text-center">
              <p className="text-lg font-medium text-gray-700 italic mb-3">
                "Little Hearts is more than a label — it's a love letter to comfort and childhood."
              </p>
              <footer className="text-gray-500 font-medium">
                – Catherine
              </footer>
            </blockquote>
          </section>

          {/* Action Buttons */}
          <div className="space-y-4">
            {/* Back to Home */}
            <Link
              to="/"
              className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Home
            </Link>
            
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919071166801"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-whatsapp-green text-white py-4 px-6 rounded-xl font-medium text-lg hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
            >
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Social Links */}
          <div className="text-center space-y-3 pt-4">
            <div>
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
            
            <div>
              <a
                href="https://www.instagram.com/catherinerobinson4494/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                </svg>
                @catherinerobinson4494
              </a>
            </div>
          </div>

          {/* Privacy Policy Link */}
          <div className="text-center pt-4">
            <Link
              to="/privacy"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage; 