import React from 'react';

const ProductGrid = () => {
  // Static product data - easy to update manually
  const products = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/products/product1.png`,
      title: "Little Hearts Onesie",
      price: "₹599",
      category: "Newborn"
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/products/product2.png`,
      title: "Cute Baby Dress",
      price: "₹799",
      category: "0-6 months"
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/products/product3.png`,
      title: "Soft Cotton Romper",
      price: "₹699",
      category: "6-12 months"
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/products/product4.png`,
      title: "Sweet Dreams Set",
      price: "₹899",
      category: "12-18 months"
    },
    {
      id: 5,
      image: `${process.env.PUBLIC_URL}/products/product5.png`,
      title: "Playful Jumpsuit",
      price: "₹749",
      category: "18-24 months"
    },
    {
      id: 6,
      image: `${process.env.PUBLIC_URL}/products/product6.png`,
      title: "Adorable Overalls",
      price: "₹849",
      category: "2-3 years"
    },
    {
      id: 7,
      image: `${process.env.PUBLIC_URL}/products/product7.png`,
      title: "Cozy Winter Outfit",
      price: "₹999",
      category: "6-12 months"
    },
    {
      id: 8,
      image: `${process.env.PUBLIC_URL}/products/product8.png`,
      title: "Summer Collection",
      price: "₹649",
      category: "12-18 months"
    }
    // Add more products here as needed
  ];

  const handleWhatsAppContact = (productTitle) => {
    const message = `Hi! I'm interested in the ${productTitle}. Could you please share more details?`;
    const whatsappUrl = `https://wa.me/919071166801?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Our Collection
        </h2>
        <p className="text-gray-600 text-sm">
          Premium comfort for your little ones
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer" onClick={() => handleWhatsAppContact(product.title)}>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.target.src = 'https://via.placeholder.com/300x300/FFB6C1/333333?text=Little+Hearts';
                }}
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.744-1.746-4.064-2.707-6.526-2.708-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.092-.639z"/>
                      <path d="M11.893 8.334c.472 0 .954.122 1.367.366.484.285.781.693.954 1.187.173.494.129 1.046-.122 1.518-.251.472-.651.832-1.125 1.019-.474.187-.999.162-1.455-.07-.456-.232-.812-.632-.999-1.125-.187-.494-.129-1.046.122-1.518.251-.472.651-.832 1.125-1.019.159-.063.323-.095.487-.095h.646z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-800 mb-1 leading-tight">
                {product.title}
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg font-semibold text-purple-600">
                  {product.price}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add More Products Info */}
      <div className="text-center py-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-2">
          More products coming soon!
        </p>
        <button
          onClick={() => handleWhatsAppContact("your catalog")}
          className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200"
        >
          Request full catalog →
        </button>
      </div>
    </div>
  );
};

export default ProductGrid; 