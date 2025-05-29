# Product Images

## How to Add Product Images

1. **Image Requirements:**
   - Format: JPG, PNG, or WebP
   - Size: 500x500px to 1000x1000px (square aspect ratio preferred)
   - File size: Under 1MB for fast loading
   - Naming: Use descriptive names like `cute-baby-dress.jpg`

2. **Adding Images:**
   - Place your product images in this folder (`public/products/`)
   - Update the image paths in `src/components/ProductGrid.js`
   - Example: If you add `baby-onesie.jpg`, reference it as `${process.env.PUBLIC_URL}/products/baby-onesie.jpg`

3. **Current Expected Images:**
   - product1.jpg - Little Hearts Onesie
   - product2.jpg - Cute Baby Dress  
   - product3.jpg - Soft Cotton Romper
   - product4.jpg - Sweet Dreams Set
   - product5.jpg - Playful Jumpsuit
   - product6.jpg - Adorable Overalls

4. **How many images can you hold?**
   - **GitHub Pages limit:** 1GB total repository size
   - **Recommended:** 50-100 product images (assuming 200KB each)
   - **Current usage:** Very minimal, plenty of space available
   - **Best practice:** Optimize images before uploading

5. **Image Optimization Tips:**
   - Use tools like TinyPNG or ImageOptim
   - Convert to WebP format for better compression
   - Aim for 200-300KB per image

## Next Steps

1. Add your product images to this folder
2. Update the `products` array in `src/components/ProductGrid.js`
3. Deploy with `npm run deploy`

## Alternative: Cloud Storage (Future)

For larger catalogs, consider:
- Cloudinary
- AWS S3
- Google Cloud Storage
- Instagram API (once approved) 