# 🎨 ReviewCraft

**AI-Powered Social Media Review Generator**

[![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

Generate realistic, authentic-looking social media reviews with AI-powered content and platform-specific styling. Perfect for mockups, presentations, educational purposes, and design prototypes.

![ReviewCraft Demo](https://via.placeholder.com/800x400/gradient?text=ReviewCraft+Demo)

## ✨ Features

### 🎯 **Multi-Platform Support**

Generate reviews for 15+ popular platforms:

- **Social Media**: Reddit, Twitter/X, Instagram, Facebook, TikTok, LinkedIn
- **E-commerce**: Amazon, Yelp
- **Entertainment**: Netflix, Spotify, YouTube, IMDb, Steam
- **Professional**: Trustpilot, Discord

### 🤖 **AI-Powered Content**

- **Realistic User Data**: Integration with RandomUser API for authentic profiles
- **Platform-Specific Language**: Tailored content for each platform's tone and style
- **Dynamic Content**: Contextual reviews with proper ratings and engagement metrics

### 🎨 **Authentic Design**

- **Pixel-Perfect Styling**: Platform-specific UI components and color schemes
- **Responsive Design**: Optimized for all device sizes
- **Interactive Elements**: Hover effects, loading states, and smooth animations

### 📸 **Export & Share**

- **Image Download**: Export reviews as high-quality PNG images
- **Clipboard Copy**: One-click copy to clipboard
- **Optimized Output**: Clean, professional-looking review cards

### ⚙️ **Customization**

- **Manual Editing**: Full control over usernames, content, ratings, and dates
- **Random Generation**: AI-powered automatic content creation
- **Real-time Preview**: Instant visual feedback as you edit

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/khadka27/review-craft.git
   cd review-craft
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Built With

### **Core Technologies**

- **[Next.js 15.0.3](https://nextjs.org/)** - React framework with App Router
- **[React 18.3.1](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Utility-first CSS framework

### **Key Libraries**

- **[Axios](https://axios-http.com/)** - HTTP client for API requests
- **[html-to-image](https://github.com/bubkoo/html-to-image)** - Export functionality
- **[Lucide React](https://lucide.dev/)** - Beautiful icon set
- **[date-fns](https://date-fns.org/)** - Date manipulation

### **APIs**

- **[RandomUser API](https://randomuser.me/)** - Realistic user profile generation

## 📱 Platform Components

### Supported Platforms

| Platform   | Component              | Features                           |
| ---------- | ---------------------- | ---------------------------------- |
| Reddit     | `RedditReview.tsx`     | Upvotes, awards, subreddit styling |
| Twitter/X  | `TwitterReview.tsx`    | Retweets, likes, verified badges   |
| Instagram  | `InstagramReview.tsx`  | Stories, posts, hashtags           |
| Amazon     | `AmazonReview.tsx`     | Star ratings, verified purchase    |
| Netflix    | `NetflixReview.tsx`    | Star ratings, episode context      |
| YouTube    | `YoutubeReview.tsx`    | Subscribe button, view counts      |
| TikTok     | `TiktokReview.tsx`     | Heart animations, trending         |
| LinkedIn   | `LinkedinReview.tsx`   | Professional network styling       |
| Discord    | `DiscordReview.tsx`    | Server context, emoji reactions    |
| Steam      | `SteamReview.tsx`      | Playtime, recommendations          |
| Spotify    | `SpotifyReview.tsx`    | Album art, playlist context        |
| IMDb       | `ImdbReview.tsx`       | Movie ratings, cast info           |
| Yelp       | `YelpReview.tsx`       | Business reviews, photos           |
| Trustpilot | `TrustpilotReview.tsx` | Business verification              |
| Facebook   | `FacebookReview.tsx`   | Social engagement                  |

## 🎯 Use Cases

### **✅ Approved Uses**

- **Design Mockups**: UI/UX portfolio pieces
- **Educational Content**: Teaching about social media
- **Presentations**: Business and academic demos
- **Testing**: UI component development
- **Marketing Materials**: Product showcases

### **❌ Prohibited Uses**

- Creating fake reviews for real businesses
- Misleading consumers or competitors
- Violating platform terms of service
- Any deceptive or fraudulent purposes

## 🔧 Development

### **Project Structure**

```
review-craft/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── platforms/      # Platform-specific components
│   │   ├── ReviewForm.tsx  # Form component
│   │   └── ReviewPreview.tsx # Preview component
│   ├── types/              # TypeScript definitions
│   └── utils/              # Utility functions
├── public/                 # Static assets
└── docs/                   # Documentation
```

### **Available Scripts**

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### **Environment Setup**

No environment variables required for basic functionality.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Contribution Guidelines**

- Follow the existing code style
- Add TypeScript types for new features
- Include tests for new functionality
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

**Important**: This tool is designed for **educational purposes, mockups, and presentations only**. Creating fake reviews for deceptive purposes is unethical and may violate platform terms of service. Always use generated content responsibly and in compliance with applicable laws and regulations.

## 🙏 Acknowledgments

- **[RandomUser API](https://randomuser.me/)** - For providing realistic user data
- **[Lucide](https://lucide.dev/)** - For beautiful icons
- **Platform Design Teams** - For inspiring authentic UI components
- **Open Source Community** - For the amazing tools and libraries

## 👨‍💻 Author

**Abishek Khadka**

- GitHub: [@khadka27](https://github.com/khadka27)
- Repository: [review-craft](https://github.com/khadka27/review-craft)

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **Documentation**: [GitHub Wiki](https://github.com/khadka27/review-craft/wiki)
- **Issues**: [Report Bug](https://github.com/khadka27/review-craft/issues)
- **Feature Requests**: [Request Feature](https://github.com/khadka27/review-craft/issues)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

[🐛 Report Bug](https://github.com/khadka27/review-craft/issues) • [✨ Request Feature](https://github.com/khadka27/review-craft/issues) • [📖 Documentation](https://github.com/khadka27/review-craft/wiki)

</div>
