// Instagram Graph API Configuration
export const INSTAGRAM_CONFIG = {
  // Get these from Facebook Developer Console
  FACEBOOK_APP_ID: process.env.REACT_APP_FACEBOOK_APP_ID || 'your_facebook_app_id_here',
  FACEBOOK_APP_SECRET: process.env.REACT_APP_FACEBOOK_APP_SECRET || 'your_facebook_app_secret_here',
  
  // Get these after setting up the app and getting permissions
  INSTAGRAM_ACCESS_TOKEN: process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN || 'your_instagram_access_token_here',
  INSTAGRAM_BUSINESS_ID: process.env.REACT_APP_INSTAGRAM_BUSINESS_ID || 'your_instagram_business_account_id_here',
  
  // API endpoints
  GRAPH_API_BASE_URL: 'https://graph.facebook.com/v18.0',
};

// API endpoints
export const INSTAGRAM_ENDPOINTS = {
  MEDIA: (businessId, accessToken) => 
    `${INSTAGRAM_CONFIG.GRAPH_API_BASE_URL}/${businessId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`,
  
  MEDIA_DETAILS: (mediaId, accessToken) =>
    `${INSTAGRAM_CONFIG.GRAPH_API_BASE_URL}/${mediaId}?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children&access_token=${accessToken}`,
}; 