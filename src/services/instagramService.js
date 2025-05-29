import { INSTAGRAM_CONFIG, INSTAGRAM_ENDPOINTS } from '../config/instagram';

class InstagramService {
  constructor() {
    this.accessToken = INSTAGRAM_CONFIG.INSTAGRAM_ACCESS_TOKEN;
    this.businessId = INSTAGRAM_CONFIG.INSTAGRAM_BUSINESS_ID;
  }

  // Check if API is properly configured
  isConfigured() {
    return this.accessToken !== 'your_instagram_access_token_here' && 
           this.businessId !== 'your_instagram_business_account_id_here';
  }

  // Fetch Instagram posts
  async fetchPosts(limit = 9) {
    if (!this.isConfigured()) {
      console.warn('Instagram API not configured yet');
      return this.getMockPosts(); // Return mock data during development
    }

    try {
      const url = INSTAGRAM_ENDPOINTS.MEDIA(this.businessId, this.accessToken) + `&limit=${limit}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }
      
      return this.processMediaData(data.data || []);
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      return this.getMockPosts(); // Fallback to mock data
    }
  }

  // Process and format media data
  processMediaData(mediaArray) {
    return mediaArray.map(item => ({
      id: item.id,
      type: item.media_type, // IMAGE, VIDEO, CAROUSEL_ALBUM
      url: item.media_type === 'VIDEO' ? item.thumbnail_url : item.media_url,
      caption: item.caption || '',
      permalink: item.permalink,
      timestamp: item.timestamp,
      isVideo: item.media_type === 'VIDEO',
      isCarousel: item.media_type === 'CAROUSEL_ALBUM'
    }));
  }

  // Mock data for development/fallback
  getMockPosts() {
    return [
      {
        id: 'mock_1',
        type: 'IMAGE',
        url: 'https://via.placeholder.com/300x300/FFB6C1/333333?text=Little+Hearts+Post+1',
        caption: 'Beautiful children\'s clothing for every occasion ✨',
        permalink: 'https://www.instagram.com/littlehearts.clothing/',
        timestamp: new Date().toISOString(),
        isVideo: false,
        isCarousel: false
      },
      {
        id: 'mock_2',
        type: 'IMAGE',
        url: 'https://via.placeholder.com/300x300/DDA0DD/333333?text=Little+Hearts+Post+2',
        caption: 'Comfort meets style in our latest collection 👶',
        permalink: 'https://www.instagram.com/littlehearts.clothing/',
        timestamp: new Date().toISOString(),
        isVideo: false,
        isCarousel: false
      },
      {
        id: 'mock_3',
        type: 'IMAGE',
        url: 'https://via.placeholder.com/300x300/F0E68C/333333?text=Little+Hearts+Post+3',
        caption: 'Made with love for little hearts 💕',
        permalink: 'https://www.instagram.com/littlehearts.clothing/',
        timestamp: new Date().toISOString(),
        isVideo: false,
        isCarousel: false
      },
      {
        id: 'mock_4',
        type: 'IMAGE',
        url: 'https://via.placeholder.com/300x300/98FB98/333333?text=Little+Hearts+Post+4',
        caption: 'Sustainable fashion for the next generation 🌱',
        permalink: 'https://www.instagram.com/littlehearts.clothing/',
        timestamp: new Date().toISOString(),
        isVideo: false,
        isCarousel: false
      },
      {
        id: 'mock_5',
        type: 'IMAGE',
        url: 'https://via.placeholder.com/300x300/87CEEB/333333?text=Little+Hearts+Post+5',
        caption: 'Every child deserves to feel special ⭐',
        permalink: 'https://www.instagram.com/littlehearts.clothing/',
        timestamp: new Date().toISOString(),
        isVideo: false,
        isCarousel: false
      },
      {
        id: 'mock_6',
        type: 'IMAGE',
        url: 'https://via.placeholder.com/300x300/FFE4E1/333333?text=Little+Hearts+Post+6',
        caption: 'Quality you can trust, style you\'ll love 💖',
        permalink: 'https://www.instagram.com/littlehearts.clothing/',
        timestamp: new Date().toISOString(),
        isVideo: false,
        isCarousel: false
      }
    ];
  }

  // Get access token status
  getTokenStatus() {
    return {
      configured: this.isConfigured(),
      hasToken: this.accessToken !== 'your_instagram_access_token_here',
      hasBusinessId: this.businessId !== 'your_instagram_business_account_id_here'
    };
  }
}

export default new InstagramService(); 