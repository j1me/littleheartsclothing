import React from 'react';

const ProductGrid = () => {
  // Static product data - just images now
  const products = [
    {
      id: 1,
      image: '/products/product1.jpg'
    },
    {
      id: 2,
      image: '/products/product2.jpg'
    },
    {
      id: 3,
      image: '/products/product3.jpg'
    },
    {
      id: 4,
      image: '/products/product4.jpg'
    },
    {
      id: 5,
      image: '/products/product5.jpg'
    },
    {
      id: 6,
      image: '/products/product6.jpg'
    },
    {
      id: 7,
      image: '/products/product7.jpg'
    },
    {
      id: 8,
      image: '/products/product8.jpg'
    }
    // Uncomment when product9.jpg is added:
    // {
    //   id: 9,
    //   image: '/products/product9.jpg'
    // }
  ];

  const handleInstagramRedirect = () => {
    window.open('https://www.instagram.com/littlehearts.clothing/', '_blank');
  };

  // Debug function to log image URLs
  React.useEffect(() => {
    console.log('Current domain:', window.location.origin);
    console.log('Current pathname:', window.location.pathname);
    console.log('PUBLIC_URL:', process.env.PUBLIC_URL);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    products.forEach(product => {
      console.log(`Product ${product.id} image path:`, product.image);
      console.log(`Product ${product.id} full URL:`, new URL(product.image, window.location.origin).href);
    });
  });

  return (
    <div className="w-full">
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer" onClick={handleInstagramRedirect}>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt="Little Hearts Clothing"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  console.error('Image failed to load:', product.image);
                  console.error('Attempted URL:', e.target.src);
                  
                  // Try different fallback URLs
                  if (e.target.src.startsWith('/products/')) {
                    // Try with process.env.PUBLIC_URL
                    const fallbackUrl = `${process.env.PUBLIC_URL}${product.image}`;
                    console.log('Trying fallback URL:', fallbackUrl);
                    e.target.src = fallbackUrl;
                  } else if (e.target.src.includes('products/')) {
                    // Try direct domain path
                    const directUrl = `https://littleheartsclothing.com${product.image}`;
                    console.log('Trying direct domain URL:', directUrl);
                    e.target.src = directUrl;
                  } else {
                    // Final fallback to placeholder
                    console.log('Using placeholder image');
                    e.target.src = 'https://via.placeholder.com/300x300/FFB6C1/333333?text=Little+Hearts';
                  }
                }}
                onLoad={() => {
                  console.log('✅ Image loaded successfully:', product.image);
                }}
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-3">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid; 