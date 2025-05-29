import React from 'react';

const ProductGrid = () => {
  // Static product data - just images now
  const products = [
    {
      id: 1,
      image: './products/product1.jpg'
    },
    {
      id: 2,
      image: './products/product2.jpg'
    },
    {
      id: 3,
      image: './products/product3.jpg'
    },
    {
      id: 4,
      image: './products/product4.jpg'
    },
    {
      id: 5,
      image: './products/product5.jpg'
    },
    {
      id: 6,
      image: './products/product6.jpg'
    },
    {
      id: 7,
      image: './products/product7.jpg'
    },
    {
      id: 8,
      image: './products/product8.jpg'
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
                  
                  // Simple fallback to placeholder
                  console.log('Using placeholder image');
                  e.target.src = 'https://via.placeholder.com/300x300/FFB6C1/333333?text=Little+Hearts';
                }}
                onLoad={() => {
                  console.log('✅ Image loaded successfully:', product.image);
                }}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid; 