import axios from "axios";
import { ReviewData, Platform } from "@/types/review";
import { getPlatformIcon } from "@/components/SocialMediaIcons";

// Random User API interface
interface RandomUserResponse {
  results: Array<{
    gender: "male" | "female";
    name: {
      title: string;
      first: string;
      last: string;
    };
    login: {
      username: string;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    location: {
      city: string;
      state: string;
      country: string;
    };
  }>;
}

// Fetch random user data using Axios
const fetchRandomUser = async (
  gender?: "male" | "female"
): Promise<RandomUserResponse["results"][0] | null> => {
  try {
    const genderParam = gender ? `?gender=${gender}` : "";
    const apiUrl =
      process.env.NEXT_PUBLIC_RANDOM_USER_API_URL ||
      "https://randomuser.me/api";
    const response = await axios.get<RandomUserResponse>(
      `${apiUrl}${genderParam}`
    );
    return response.data.results[0] || null;
  } catch (error) {
    console.error("Failed to fetch random user:", error);
    return null;
  }
};

const generateUsername = (
  firstName: string,
  lastName: string,
  platform: Platform
): string => {
  const baseUsername = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;

  switch (platform) {
    case "reddit":
      return `u/${baseUsername}${Math.floor(Math.random() * 999) + 1}`;
    case "twitter":
      return `@${baseUsername}${Math.floor(Math.random() * 99) + 1}`;
    case "instagram":
      return `@${baseUsername}_${Math.floor(Math.random() * 999) + 1}`;
    case "amazon":
      return `${firstName} ${lastName.charAt(0)}.`;
    case "netflix":
      return `${firstName}${Math.floor(Math.random() * 999) + 1}`;
    case "spotify":
      return `${baseUsername}${Math.floor(Math.random() * 99) + 1}`;
    case "youtube":
      return `@${baseUsername}${Math.floor(Math.random() * 999) + 1}`;
    case "linkedin":
      return `${firstName} ${lastName}`;
    case "tiktok":
      return `@${baseUsername}${Math.floor(Math.random() * 9999) + 1}`;
    case "discord":
      return `${baseUsername}#${Math.floor(Math.random() * 9999) + 1000}`;
    case "steam":
      return `${baseUsername}${Math.floor(Math.random() * 999) + 1}`;
    case "imdb":
      return `${firstName}_${lastName}`;
    default:
      return baseUsername;
  }
};

const generateTitle = (platform: Platform): string => {
  const titles = {
    reddit: [
      "Amazing experience with this product!",
      "Highly recommend this service",
      "Best purchase I've made in years",
      "This completely changed my life",
      "Worth every penny!",
    ],
    twitter: [
      "Just had an incredible experience!",
      "Loving this new discovery",
      "Game changer right here",
      "Absolutely fantastic",
      "Mind blown by this",
    ],
    instagram: [
      "Obsessed with this find! ✨",
      "New favorite thing 💕",
      "Can't get enough of this!",
      "Pure perfection 🙌",
      "This is everything! 💯",
    ],
    trustpilot: [
      "Excellent service and quality",
      "Outstanding customer experience",
      "Professional and reliable",
      "Exceeded my expectations",
      "Top-notch quality and service",
    ],
    facebook: [
      "Had to share this amazing experience!",
      "Totally recommend this to everyone",
      "Such a great find!",
      "Perfect solution for my needs",
      "Amazing quality and service",
    ],
    yelp: [
      "Fantastic experience all around",
      "Great service and atmosphere",
      "Perfect for what I needed",
      "Excellent quality and value",
      "Will definitely be back!",
    ],
    amazon: [
      "Excellent product quality",
      "Great value for money",
      "Fast shipping and packaging",
      "Exactly as described",
      "Highly recommend this product",
    ],
    netflix: [
      "Amazing show, binged it all!",
      "Great storyline and acting",
      "Perfect for weekend watching",
      "Highly entertaining series",
      "Must-watch content!",
    ],
    spotify: [
      "Love this playlist!",
      "Perfect music selection",
      "Great for working out",
      "Amazing sound quality",
      "My new favorite album",
    ],
    youtube: [
      "Great content as always!",
      "Very informative video",
      "Love this channel",
      "Excellent tutorial",
      "Keep up the great work!",
    ],
    linkedin: [
      "Excellent professional service",
      "Great networking opportunity",
      "Highly skilled professional",
      "Outstanding work quality",
      "Recommended for business",
    ],
    tiktok: [
      "This is so creative! 🔥",
      "Love this trend!",
      "Amazing content!",
      "So entertaining!",
      "This made my day!",
    ],
    discord: [
      "Great community server",
      "Very helpful members",
      "Active and friendly",
      "Love this gaming group",
      "Best Discord server!",
    ],
    steam: [
      "Amazing game experience",
      "Great graphics and gameplay",
      "Worth every penny",
      "Addictive and fun",
      "Best game I've played",
    ],
    imdb: [
      "Incredible movie experience",
      "Outstanding cinematography",
      "Brilliant acting performance",
      "Must-watch film",
      "Masterpiece of cinema",
    ],
  };

  return titles[platform][Math.floor(Math.random() * titles[platform].length)];
};

const generateContent = (platform: Platform): string => {
  const contents = {
    reddit: [
      "I was skeptical at first, but this product completely exceeded my expectations. The quality is outstanding and the customer service team was incredibly helpful throughout the entire process. I've been using it for a few weeks now and couldn't be happier with my decision.",
      "After reading through countless reviews, I decided to give this a try and I'm so glad I did. The results speak for themselves - everything works exactly as advertised. The attention to detail is impressive and you can tell they really care about their customers.",
      "This is hands down one of the best investments I've made this year. The value for money is incredible and I've already recommended it to several friends and family members. Don't hesitate if you're on the fence about this one!",
    ],
    twitter: [
      "Just tried this for the first time and I'm already planning my next order. The quality is incredible and delivery was faster than expected! 🔥",
      "Finally found something that actually works as advertised. Been using it for a week and the results are amazing. Highly recommend! 👌",
      "Worth every single penny. The customer service alone makes this a 5-star experience. Will definitely be a repeat customer! ⭐",
    ],
    instagram: [
      "You guys, I am OBSESSED with this! 😍 The quality is insane and it arrived so fast. Already planning my next order because this is just too good not to share with everyone! Link in my bio if you want to check it out 💕 #amazing #obsessed #newFavorite",
      "Okay but can we talk about how perfect this is?! 🙌 I've been searching for something like this forever and it's even better than I imagined. The attention to detail is incredible! Swipe to see more pics ➡️ #perfection #grateful #newlove",
      "This just became my new favorite thing! ✨ The quality exceeded all my expectations and the packaging was so cute too! I literally can't stop using it. Tag someone who needs this in their life! 💯 #gameChanger #newFavorite #loving",
    ],
    trustpilot: [
      "I have been a customer for several months now and the consistent quality and excellent customer service keep me coming back. Every interaction has been professional and they always go above and beyond to ensure customer satisfaction. Highly recommended for anyone looking for reliable service.",
      "Outstanding experience from start to finish. The ordering process was seamless, delivery was prompt, and the product quality exceeded my expectations. Their customer support team is knowledgeable and responsive. I will definitely be a returning customer.",
      "Exceptional service and product quality. I was impressed by their attention to detail and commitment to customer satisfaction. The entire experience was smooth and professional. I would not hesitate to recommend this to friends and colleagues.",
    ],
    facebook: [
      "Had to share this amazing experience with everyone! I decided to try this after seeing so many positive reviews, and I'm so glad I did. The quality is fantastic and the customer service team was incredibly helpful. Already planning my next purchase!",
      "Just wanted to give a shoutout to this incredible company! From the moment I placed my order to receiving it, everything was perfect. The product exceeded my expectations and arrived faster than promised. Definitely recommend to anyone considering it!",
      "Absolutely thrilled with my recent purchase! The quality is outstanding and you can tell they really care about their customers. The entire experience was smooth and professional. Will definitely be ordering again soon!",
    ],
    yelp: [
      "What an incredible experience! From the moment I walked in, the staff was friendly and knowledgeable. The quality of service was exceptional and everything exceeded my expectations. The atmosphere was perfect and I felt well taken care of throughout my visit. Will definitely be returning!",
      "I can't say enough good things about this place! The service was outstanding and the staff went above and beyond to make sure everything was perfect. The quality was top-notch and the value for money was excellent. Highly recommend to anyone looking for a great experience!",
      "Fantastic experience all around! The staff was professional and attentive, and the quality of everything was impressive. The atmosphere was welcoming and comfortable. I've already recommended this to several friends and will definitely be back soon!",
    ],
    amazon: [
      "This product exceeded all my expectations! The quality is outstanding and it arrived exactly as described. Fast shipping and excellent packaging. I've already recommended it to friends and family. Definitely worth every penny!",
      "Amazing value for money! The product works perfectly and the build quality is impressive. Customer service was responsive when I had questions. Will definitely be purchasing from this seller again.",
      "Exactly what I was looking for! The product arrived quickly and was packaged securely. Quality is top-notch and it's been working flawlessly. Highly recommend to anyone considering this purchase!",
    ],
    netflix: [
      "Just finished binge-watching this series and I'm absolutely blown away! The storyline is captivating, the acting is superb, and the production quality is incredible. Can't wait for the next season!",
      "This show is a masterpiece! Every episode keeps you on the edge of your seat. The character development is fantastic and the plot twists are unexpected. Definitely one of the best series on Netflix!",
      "Incredible cinematography and storytelling! This series has everything - drama, suspense, and amazing performances. I've already watched it twice and noticed new details each time. Highly recommend!",
    ],
    spotify: [
      "This playlist is absolutely perfect for my morning workouts! The song selection is incredible and the flow between tracks is seamless. I've discovered so many new artists through this. Love it!",
      "Amazing album! Every track is a masterpiece and the sound quality is crystal clear. The artist's creativity really shines through. I've had this on repeat for weeks now!",
      "Perfect music for studying! The instrumental tracks are soothing and help me focus. Great variety and excellent curation. This has become my go-to playlist for productivity.",
    ],
    youtube: [
      "This video was incredibly helpful! The explanation was clear and easy to follow. I learned so much in just a few minutes. The production quality is excellent too. Subscribed!",
      "Amazing content as always! Your tutorials are the best on YouTube. The step-by-step approach makes everything so easy to understand. Keep up the fantastic work!",
      "This channel never disappoints! The content is always informative and entertaining. Great editing and presentation. I always look forward to new uploads!",
    ],
    linkedin: [
      "Had an excellent professional experience working with this company. Their expertise and attention to detail are outstanding. The team is knowledgeable and delivers high-quality results consistently.",
      "Highly recommend this professional service! They exceeded expectations and delivered exceptional results. Great communication throughout the project and very reliable. Will definitely work with them again.",
      "Outstanding professional network and service quality. The team is highly skilled and professional. They provided valuable insights and delivered exactly what was promised. Excellent experience overall!",
    ],
    tiktok: [
      "This content is absolutely amazing! So creative and entertaining. I've watched it like 10 times already and it still makes me laugh. Keep creating awesome content! 🔥",
      "Love this trend! Your take on it is so unique and funny. The editing is perfect and the timing is spot on. This definitely made my day better! ✨",
      "This is why I love TikTok! Such creative and original content. You always know how to make the perfect video. Can't wait to see what you post next! 💯",
    ],
    discord: [
      "This server has the best community! Everyone is so helpful and friendly. The moderators do a great job keeping things organized. Love being part of this group!",
      "Amazing gaming community! Found so many people to play with and everyone is super welcoming. The channels are well organized and there's always something fun happening.",
      "Best Discord server I've joined! Active members, great discussions, and awesome events. The community really feels like a family. Highly recommend joining!",
    ],
    steam: [
      "This game is absolutely incredible! The graphics are stunning and the gameplay is addictive. I've already put in 50+ hours and I'm still discovering new things. Worth every penny!",
      "Amazing game experience! The storyline is captivating and the mechanics are smooth. Great value for money and tons of replay value. Definitely recommend to all gamers!",
      "One of the best games I've played this year! The attention to detail is impressive and the multiplayer is fantastic. Great community and regular updates from developers.",
    ],
    imdb: [
      "This movie is a cinematic masterpiece! The acting is phenomenal and the cinematography is breathtaking. Every scene is beautifully crafted. Definitely deserves all the awards it received!",
      "Incredible film with outstanding performances! The story is compelling and the direction is flawless. This is the kind of movie that stays with you long after watching. Highly recommend!",
      "Brilliant movie experience! The plot is engaging and the character development is superb. Amazing soundtrack and visual effects. This is definitely going on my favorites list!",
    ],
  };

  return contents[platform][
    Math.floor(Math.random() * contents[platform].length)
  ];
};

export const platformStyles: Record<Platform, any> = {
  reddit: {
    name: "Reddit",
    color: "#FF4500",
    icon: getPlatformIcon("reddit"),
    hasRating: false,
    hasEngagement: true,
    maxLength: 500,
  },
  twitter: {
    name: "Twitter/X",
    color: "#1DA1F2",
    icon: getPlatformIcon("twitter"),
    hasRating: false,
    hasEngagement: true,
    maxLength: 280,
  },
  instagram: {
    name: "Instagram",
    color: "#E4405F",
    icon: getPlatformIcon("instagram"),
    hasRating: false,
    hasEngagement: true,
    maxLength: 300,
  },
  trustpilot: {
    name: "Trustpilot",
    color: "#00B67A",
    icon: getPlatformIcon("trustpilot"),
    hasRating: true,
    hasEngagement: false,
    maxLength: 400,
  },
  facebook: {
    name: "Facebook",
    color: "#1877F2",
    icon: getPlatformIcon("facebook"),
    hasRating: false,
    hasEngagement: true,
    maxLength: 350,
  },
  yelp: {
    name: "Yelp",
    color: "#FF1A1A",
    icon: getPlatformIcon("yelp"),
    hasRating: true,
    hasEngagement: true,
    maxLength: 400,
  },
  amazon: {
    name: "Amazon",
    color: "#FF9900",
    icon: getPlatformIcon("amazon"),
    hasRating: true,
    hasEngagement: true,
    maxLength: 500,
  },
  netflix: {
    name: "Netflix",
    color: "#E50914",
    icon: getPlatformIcon("netflix"),
    hasRating: true,
    hasEngagement: true,
    maxLength: 400,
  },
  spotify: {
    name: "Spotify",
    color: "#1DB954",
    icon: getPlatformIcon("spotify"),
    hasRating: true,
    hasEngagement: true,
    maxLength: 300,
  },
  youtube: {
    name: "YouTube",
    color: "#FF0000",
    icon: getPlatformIcon("youtube"),
    hasRating: false,
    hasEngagement: true,
    maxLength: 350,
  },
  linkedin: {
    name: "LinkedIn",
    color: "#0077B5",
    icon: getPlatformIcon("linkedin"),
    hasRating: false,
    hasEngagement: true,
    maxLength: 400,
  },
  tiktok: {
    name: "TikTok",
    color: "#000000",
    icon: getPlatformIcon("tiktok"),
    hasRating: false,
    hasEngagement: true,
    maxLength: 250,
  },
  discord: {
    name: "Discord",
    color: "#5865F2",
    icon: getPlatformIcon("discord"),
    hasRating: false,
    hasEngagement: true,
    maxLength: 300,
  },
  steam: {
    name: "Steam",
    color: "#1B2838",
    icon: getPlatformIcon("steam"),
    hasRating: true,
    hasEngagement: true,
    maxLength: 450,
  },
  imdb: {
    name: "IMDb",
    color: "#F5C518",
    icon: getPlatformIcon("imdb"),
    hasRating: true,
    hasEngagement: true,
    maxLength: 400,
  },
};

// Main function to generate review data
export const generateRandomReviewData = async (
  platform: Platform
): Promise<ReviewData> => {
  const randomUser = await fetchRandomUser();

  // Fallback data if API fails
  const fallbackUser = {
    name: {
      first: "John",
      last: "Doe",
      title: "Mr",
    },
    login: {
      username: "johndoe123",
    },
    picture: {
      large: "",
      medium: "",
      thumbnail: "",
    },
    location: {
      city: "New York",
      state: "NY",
      country: "US",
    },
  };

  const user = randomUser || fallbackUser;
  const { first: firstName, last: lastName } = user.name;

  // Get gender from randomUser or fallback to random selection
  const gender: "male" | "female" | "random" =
    randomUser?.gender || (Math.random() > 0.5 ? "male" : "female");

  // Generate platform-specific data
  const username = generateUsername(firstName, lastName, platform);
  const title = generateTitle(platform);
  const content = generateContent(platform);

  // Generate rating based on platform
  const hasRating = platformStyles[platform].hasRating;
  let rating: number | undefined;

  if (hasRating) {
    // Different platforms have different rating systems
    switch (platform) {
      case "trustpilot":
      case "netflix":
      case "spotify":
      case "yelp":
      case "amazon":
      case "steam":
      case "imdb":
        rating = Math.round((3.5 + Math.random() * 1.5) * 2) / 2; // 3.5-5 stars in 0.5 increments
        break;
      default:
        rating = undefined;
    }
  }

  // Generate random dates (last 6 months)
  const now = new Date();
  const sixMonthsAgo = new Date(now.getTime() - 6 * 30 * 24 * 60 * 60 * 1000);
  const randomTime =
    sixMonthsAgo.getTime() +
    Math.random() * (now.getTime() - sixMonthsAgo.getTime());
  const date = new Date(randomTime);

  return {
    id: Math.random().toString(36).substring(2, 11),
    name: `${firstName} ${lastName}`,
    username,
    avatar:
      user.picture.large ||
      `${
        process.env.NEXT_PUBLIC_UI_AVATARS_API_URL ||
        "https://ui-avatars.com/api"
      }/?name=${encodeURIComponent(
        firstName + " " + lastName
      )}&background=random&format=png&size=128&color=ffffff`,
    gender: gender,
    platform,
    title,
    content,
    rating: rating ?? 0,
    date: date,
    likes: Math.floor(Math.random() * 100),
    replies: Math.floor(Math.random() * 10),
    shares: Math.floor(Math.random() * 20),
    verified: Math.random() > 0.7,
  };
};
