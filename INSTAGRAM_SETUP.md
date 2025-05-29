# Instagram Graph API Setup Guide

## Overview
Your website now has Instagram API integration ready! Currently showing mock posts with beautiful placeholders. Follow these steps to connect your real Instagram posts.

## Current Status
✅ Code structure ready  
✅ Mock posts displaying  
⏳ API credentials needed  

## Prerequisites

1. **Instagram Business Account** (convert from personal if needed)
2. **Facebook Page** connected to your Instagram account
3. **Facebook Developer Account**

## Step-by-Step Setup

### 1. Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com)
2. Click "Create App" → "Consumer" → "Next"
3. Enter app name: "Little Hearts Website" 
4. Add your email
5. Create App

### 2. Add Instagram Graph API
1. In your Facebook app dashboard:
   - Go to "Add a Product"
   - Select "Instagram Graph API"
   - Click "Set Up"

### 3. Configure Basic Settings
1. Go to Settings → Basic
2. Add your website domain: `localhost:3000` (for development)
3. Add Privacy Policy URL (create simple page)
4. Add Terms of Service URL
5. Save changes

### 4. Get Your Credentials

#### App ID & Secret:
- Go to Settings → Basic
- Copy "App ID" 
- Copy "App Secret" (click Show)

#### Instagram Business Account ID:
1. Go to Tools → Graph API Explorer
2. Select your app
3. Generate User Access Token with permissions:
   - `instagram_graph_user_profile`
   - `instagram_graph_user_media`
4. Query: `me/accounts` to get your Page ID
5. Query: `{PAGE_ID}?fields=instagram_business_account` to get Instagram Business ID

#### Long-lived Access Token:
1. Use Graph API Explorer
2. Generate token with required permissions
3. Exchange for long-lived token (60 days)

### 5. Update Your Website

Create a `.env.local` file in your project root:

```bash
# Instagram Graph API Configuration
REACT_APP_FACEBOOK_APP_ID=your_actual_app_id
REACT_APP_FACEBOOK_APP_SECRET=your_actual_app_secret
REACT_APP_INSTAGRAM_ACCESS_TOKEN=your_actual_access_token
REACT_APP_INSTAGRAM_BUSINESS_ID=your_actual_business_id
```

### 6. Restart Development Server
```bash
npm start
```

## Verification

Once configured, your website will:
- ✅ Show real Instagram posts instead of mock data
- ✅ Update automatically when you post new content
- ✅ Handle videos, carousels, and images
- ✅ Link directly to your Instagram posts

## Troubleshooting

### Common Issues:

1. **"Invalid OAuth access token"**
   - Token expired (regenerate long-lived token)
   - Wrong permissions (check scopes)

2. **"App not live"**
   - Submit app for review if going public
   - Use in development mode for now

3. **"Instagram account not found"**
   - Ensure Instagram is connected to Facebook Page
   - Use Instagram Business account, not personal

## Token Refresh

Access tokens expire. Set up automatic refresh:
- Long-lived tokens last 60 days
- Refresh before expiry using Graph API
- Consider server-side solution for production

## Production Notes

For production deployment:
- Don't expose App Secret in frontend
- Use server-side proxy for API calls
- Implement proper error handling
- Set up monitoring for token expiry

## Current Features

Your Instagram integration includes:
- 📱 Mobile-optimized grid layout
- 🖼️ Image, video, and carousel support  
- ⚡ Smooth hover effects
- 🔗 Direct links to Instagram posts
- 📄 Loading states and error handling
- 🎨 Beautiful fallback mock posts

## Need Help?

If you encounter issues:
1. Check Facebook Developer Console for errors
2. Verify all permissions are granted
3. Test API calls in Graph API Explorer
4. Review Instagram Business account setup

The integration is production-ready once you add your credentials! 