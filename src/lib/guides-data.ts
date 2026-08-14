export interface GuidePost {
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  content: string;
}

export const GUIDES: GuidePost[] = [
  {
    slug: "review-mockups",
    title: "The Complete Guide to Designing Review UI Mockups for Web & Mobile",
    category: "UI/UX Prototyping",
    description: "Learn how to structure, style, and integrate customer review card mockups into high-converting website landing pages and web applications.",
    readTime: "12 min read",
    date: "2026-08-14",
    author: {
      name: "ReviewCraft Design Team",
      role: "UI/UX & Product Design Specialist"
    },
    content: `
# The Complete Guide to Designing Review UI Mockups for Web & Mobile

Customer feedback visual cards are among the most critical visual components in modern interface design. Whether you are building an e-commerce storefront, a SaaS landing page, or a mobile marketplace app, review UI mockups communicate trust, establish visual hierarchy, and help users evaluate value propositions at a glance.

This comprehensive guide breaks down the visual anatomy, design system tokens, typography rules, and responsive layout patterns required to create effective review card wireframes and prototypes.

---

## 1. Visual Anatomy of a Modern Review Component

A well-structured review component balances information density with visual clarity. When designing review cards for prototypes, ensure every sub-component serves an explicit communication purpose:

### Primary Structural Nodes:
1. User Identity Header:
   - Avatar Container: Standard 40x40px or 48x48px circular image frame with fallback initials.
   - User Display Name: Primary font weight (Semibold/Bold, 14-16px) with clean line-height.
   - Verification Indicator: Subdued icon (e.g., checkmark badge) representing account or purchase status in prototype state.
   - Timestamp / Locale: Secondary text opacity (400 weight, 12-14px, muted slate/gray).

2. Rating Component & Score Display:
   - Star Rating Scale: 5-point visual star container (20x20px icons, 2px padding). Use contrasting HSL color tokens (e.g., #F59E0B or #FFC72C) for filled stars and neutral HSL for empty state (#E2E8F0).
   - Numerical Score Tag: Optional badge (e.g., 4.9 / 5.0) for quick scannability in summary dashboards.

3. Content Body Container:
   - Headline / Title: Short, punchy summary (16-18px font size, line-height 1.4).
   - Feedback Prose: Body paragraph (14-16px, line-height 1.6). Limit prose container width to 60-75 characters per line for optimal reading ergonomics.

4. Engagement & Micro-Interaction Footer:
   - Helpful / Reaction Counters (Thumbs Up, Helpful Vote Count).
   - Reply Thread Indicator (e.g., "Developer Response Attached").

---

## 2. Layout Patterns for Desktop vs Mobile Viewports

Designing responsive review components requires adapting layout flow based on device screen constraints:

### Desktop Grid Layouts (Multi-Column & Masonry)
On desktop viewports (1024px+), review cards are commonly presented in:
- 3-Column Grid: Fixed 320-380px card widths with 24px column gap. Excellent for testimonial summary sections.
- Horizontal Cards with Sidebar Filters: Left-hand filter panel (facet ratings, search, breakdown bar) paired with a stacked 1-column review feed.

### Mobile Viewport Optimization (375px-414px)
On mobile devices:
- Horizontal Swipe Carousel: Touch-friendly card carousels with visible peek edges (e.g., 85% viewport width per card) indicating horizontal scrollability.
- Single-Column Vertical Stack: Full-width cards with 16px padding and subtle bottom border separators (1px solid #F1F5F9).

---

## 3. Micro-Typography & Color Token Guidelines

To maintain visual realism in UI wireframes, follow these established design system tokens:

CSS Design System Tokens for Review Components:
- Background: #FFFFFF
- Border: #E2E8F0
- Border Radius: 12px
- Box Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05)
- Primary Font: 'Inter', system-ui, sans-serif
- Title Text: #0F172A
- Body Text: #334155
- Muted Text: #64748B
- Star Filled: #F59E0B
- Star Empty: #CBD5E1

### Typography Contrast Rules
- Headline: Font-weight 600 or 700. Contrast ratio minimum 4.5:1 against card background.
- Prose: Font-weight 400. Line height 1.5 to 1.6 for comfortable scanning.
- Metadata: Font-weight 400 or 500. Use muted slate colors to maintain visual hierarchy.

---

## 4. Prototype Scenarios & Wireframing Best Practices

When creating wireframes in prototyping software or visual mockup tools:
- Test Both Edge Cases: Always test card wrapping with short 1-line feedback vs long 500-word feedback paragraphs to ensure layout containers expand gracefully.
- Include Critical States: Do not design exclusively 5-star positive cards. Include 3-star and 4-star feedback layouts to test how mixed rating feeds look in UI state demonstrations.
- Maintain Simulation Disclaimers: In client presentations and design system documentation, clearly label simulated visual components to distinguish wireframe prototypes from live customer data.
`
  },
  {
    slug: "social-proof-design",
    title: "Principles of Social Proof Interface Design & Layout Hierarchy",
    category: "Design Strategy",
    description: "An in-depth exploration of visual hierarchy, component density, and layout balance when presenting social proof UI in product landing pages.",
    readTime: "14 min read",
    date: "2026-08-14",
    author: {
      name: "ReviewCraft Research",
      role: "Product Strategy & UX Architect"
    },
    content: `
# Principles of Social Proof Interface Design & Layout Hierarchy

Social proof is a fundamental psychological driver in digital user experience. When users land on an unfamiliar web product or mobile app, they actively look for visual signals that demonstrate peer validation, activity, and trust.

Designing social proof interface components requires more than pasting star icons onto a page. It demands a rigorous understanding of visual hierarchy, cognitive load, spatial arrangement, and content density.

---

## 1. The 4 Core Types of Social Proof Components

Modern UI/UX design systems utilize four distinct visual patterns for social proof:

1. Aggregated Summary Headers:
   - Displays overall score averages (e.g., 4.8 / 5.0 out of 2,400+ Ratings).
   - Features histogram distribution bars showing rating breakdown percentages across 1-5 stars.

2. Individual Customer Feedback Cards:
   - Detailed visual cards featuring reviewer avatar, date, location, verified purchase badge, and prose commentary.

3. Logo Grid & Accreditation Rows:
   - Horizontal client/media logo bars displayed in low-saturation or monochrome styles to convey institutional trust.

4. Real-Time Activity Micro-Banners:
   - Small notification pills (e.g., "Sarah from Austin signed up 5 mins ago") designed to convey active platform velocity.

---

## 2. Establishing Visual Hierarchy on Landing Pages

Where and how social proof is positioned directly impacts user comprehension. Follow this recommended page visual hierarchy:

### Above the Fold (Hero Section)
- Position an aggregated mini-rating component directly below the primary CTA button or main headline.
- Example: ★★★★★ 4.9/5 from 1,000+ UI Designers.
- Keep this element compact (32-40px height) so it does not distract from the primary value proposition.

### Mid-Page Validation Section
- Dedicate a full-width section to detailed review UI cards or a testimonial grid.
- Use contrasting section background color (e.g., light gray #F8FAFC on a white site, or dark slate #0F172A on a dark site) to visually anchor the social proof block.

### Checkout / Conversion Point
- Repeat high-trust micro-badges (e.g., "100% Satisfaction Guarantee", "Verified Platform Component") adjacent to checkout forms or pricing tables to mitigate final conversion hesitation.

---

## 3. Avoid Common UX Pitfalls in Social Proof Layouts

- Avoid Overcrowding: Displaying 20 identical review cards in a row leads to visual fatigue. Limit visible grid items to 3-6 cards with an option to "Load More" or browse via paginated carousel.
- Ensure Typography Readability: Do not drop font sizes below 12px for body copy or dates inside review cards.
- Maintain Clear Separation: Ensure clear visual boundaries between user-generated feedback cards and editorial product features.
`
  },
  {
    slug: "review-ui-design",
    title: "Designing Effective Customer Review Cards in Modern UI Systems",
    category: "UI/UX Design",
    description: "Step-by-step technical breakdown of constructing modular, reusable review card components in Figma, React, and Tailwind CSS.",
    readTime: "10 min read",
    date: "2026-08-14",
    author: {
      name: "ReviewCraft Engineering",
      role: "Design System Lead"
    },
    content: `
# Designing Effective Customer Review Cards in Modern UI Systems

Building a scalable design system requires creating modular, atomic UI components that can be reused across marketing pages, mobile apps, and client dashboards.

In this guide, we break down how to code and structure a production-grade Review Card component using React, TypeScript, and clean CSS flexbox/grid layout principles.

---

## 1. Modular React Component Architecture

Below is a clean TypeScript interfaces pattern for a universal Review Card UI component:

Component Features:
- authorName (string): Display name of the user
- authorRole (string, optional): Role or location string
- rating (number, 1-5): Star rating score
- title & content (string): Review title and prose text
- isSimulated (boolean): Disciplinary disclaimer toggle

---

## 2. Key Design Tokens Checklist

When integrating this component into your design system:
- Padding: Use 24px (p-6) for desktop cards and 16px (p-4) for mobile cards.
- Border Radius: 12px to 16px (rounded-2xl) creates modern, approachable card containers.
- Elevation: Subtle drop shadow (shadow-sm with 4% opacity) prevents cards from looking flat against light backgrounds.
`
  },
  {
    slug: "customer-feedback-ui",
    title: "How to Structure User Feedback Components in SaaS Products",
    category: "Product Management",
    description: "Best practices for designing in-app feedback widgets, NPS rating screens, and customer sentiment dashboards for B2B SaaS software.",
    readTime: "11 min read",
    date: "2026-08-14",
    author: {
      name: "ReviewCraft Editorial",
      role: "SaaS Product Strategist"
    },
    content: `
# How to Structure User Feedback Components in SaaS Products

Collecting and displaying user feedback inside SaaS platforms requires thoughtful UX design. Whether you are building an in-app Net Promoter Score (NPS) popup, a feature request voting board, or a customer sentiment dashboard, clarity and non-intrusiveness are critical.

---

## 1. Types of In-App Feedback Components

1. Micro-Surveys (NPS / CSAT):
   - Slide-in bottom corner modal (e.g., 320px width).
   - Uses 1-10 numerical scale or 5-emoji rating scale for instant 1-click submission.

2. Feature Feedback Drawers:
   - Right-side slide-over panel triggering when users interact with beta features.
   - Includes structured category dropdowns (Bug, Feature Request, Usability) and prose text area.

3. Public Product Feedback Boards:
   - Community-facing board displaying upvoted feature suggestions, roadmap status tags (Planned, In Progress, Complete), and staff responses.

---

## 2. Guidelines for Wireframing Feedback Features

- Trigger Timing: Never trigger feedback modals immediately upon user login. Allow users to complete a primary task before prompting for sentiment.
- Micro-Copy Matters: Use clear, empathetic prompts such as "How can we make this workflow faster for you?" rather than generic "Submit Feedback".
- Visual Status Markers: Use color-coded status badges (Green for Resolved, Blue for In Review, Gray for Under Consideration).
`
  },
  {
    slug: "designing-review-components",
    title: "Component Anatomy: Rating Stars, Badges, and Text Containers",
    category: "UI/UX Design",
    description: "Deep technical breakdown of micro-components: star rating vectors, verified badge alignment, and body text line-height calculations.",
    readTime: "13 min read",
    date: "2026-08-14",
    author: {
      name: "ReviewCraft Design Team",
      role: "Vector & System Designer"
    },
    content: `
# Component Anatomy: Rating Stars, Badges, and Text Containers

Precision in micro-component design separates amateur interface wireframes from polished, enterprise-ready UI design systems.

This guide provides explicit mathematical guidelines and SVG vector rules for designing rating stars, badge icons, and text containers.

---

## 1. Precision Vector Math for Star Rating Icons

When creating custom SVG star rating vectors:
- Use a 24x24px viewBox with a 5-point star path geometry.
- Apply a 1.5px stroke width with rounded join corners to soften harsh star tips.
- Spacing: Maintain exactly 4px gap between individual star icons in a rating bar.

---

## 2. Verified Badges & Micro-Copy Alignment

Verified buyer or platform verification badges should never visually overpower the reviewer's display name:
- Icon Size: 14x14px or 16x16px checkmark badge.
- Vertical Alignment: Align badge icon using inline-flex centered to the font cap-height.
- Coloring: Use soft slate (#64748B) or muted emerald (#059669) rather than bright neon colors.
`
  },
  {
    slug: "ui-prototyping",
    title: "Rapid Visual Prototyping Workflows for Marketing & Product Teams",
    category: "UI/UX Prototyping",
    description: "How growth marketers and product managers can leverage browser-based mockup tools to rapidly iterate on landing page concepts.",
    readTime: "9 min read",
    date: "2026-08-14",
    author: {
      name: "ReviewCraft Editorial",
      role: "Growth Design Lead"
    },
    content: `
# Rapid Visual Prototyping Workflows for Marketing & Product Teams

In fast-moving digital teams, waiting days for custom design comps can stall landing page campaigns and product launches. Rapid visual prototyping enables cross-functional teams to mock up and test conversion concepts in hours.

---

## 1. The 3-Step Rapid Prototyping Workflow

1. Wireframe Section Structure:
   - Layout page sections (Hero, Value Props, Social Proof Review Cards, Pricing Table) using structural placeholder blocks.

2. Populate Realistic Visual Mockups:
   - Replace generic text with formatted review card components that reflect real-world typography and card dimensions.

3. Stakeholder & Usability Review:
   - Export high-resolution PNG or SVG assets into pitch decks or Figma frames for team review.

---

## 2. Benefits of Fictional Prototyping Components

- Enables UI testing before actual customer reviews are aggregated.
- Helps copywriters evaluate headline lengths and line breaks under real font constraints.
- Allows QA teams to test mobile breakpoint wrapping across different screen resolutions.
`
  },
  {
    slug: "ethical-social-proof",
    title: "Ethical Standards & FTC Compliance in Social Proof & UI Mockups",
    category: "Ethics & Compliance",
    description: "Essential legal guidelines on responsible design, avoiding dark patterns, and complying with FTC regulations on customer endorsements.",
    readTime: "15 min read",
    date: "2026-08-14",
    author: {
      name: "ReviewCraft Legal & Ethics Committee",
      role: "Digital Compliance Specialist"
    },
    content: `
# Ethical Standards & FTC Compliance in Social Proof & UI Mockups

As digital design tools become more powerful, maintaining strict ethical standards in interface design is paramount. Misrepresenting simulated UI components as authentic customer endorsements on live commercial websites violates Federal Trade Commission (FTC) guidelines, consumer protection statutes, and platform policies.

---

## 1. Understanding FTC Endorsement Guidelines

The FTC strictly regulates commercial endorsements, reviews, and testimonials:
- No Fabricated Commercial Reviews: Businesses are prohibited from publishing fabricated customer feedback as real buyer experiences on commercial storefronts.
- Clear Disclosure of Material Connections: Any incentivized, sponsored, or simulated feedback must feature prominent disclosures.
- No Dark Patterns: Designing UI components that fake live purchasing activity or manipulate star ratings to mislead consumers constitutes deceptive trade practices.

---

## 2. Permissible vs Prohibited Uses of Mockup Tools

### Permissible Legitimate Uses:
- UI/UX Prototyping: Testing layout placement and typography in wireframes and Figma files.
- Client & Pitch Deck Demonstrations: Showing prospective clients how a landing page section will look once launched.
- Software QA & Educational Testing: Training design students and testing mobile responsive breakpoints.

### Prohibited Deceptive Uses:
- Publishing generated review cards on a live commercial site to fake customer satisfaction.
- Generating fake payment receipts or transaction records to deceive buyers or institutions.
- Impersonating real individuals or businesses without authorization.

---

## 3. ReviewCraft's Commitment to Responsible Design

ReviewCraft embeds permanent, non-removable simulation disclaimers on exported visual components ("SIMULATED MOCKUP - NOT A REAL REVIEW") to prevent visual assets from being mistaken for real customer feedback.
`
  },
  {
    slug: "using-mockups-in-presentations",
    title: "How to Present Product Feedback in Client Decks & Case Studies",
    category: "Design Strategy",
    description: "A guide for agency teams and freelancers on framing design prototypes, presenting wireframes, and managing client expectations.",
    readTime: "10 min read",
    date: "2026-08-14",
    author: {
      name: "ReviewCraft Editorial",
      role: "Agency Relations Lead"
    },
    content: `
# How to Present Product Feedback in Client Decks & Case Studies

When presenting web design comps or agency case studies to clients, how you frame user feedback UI components can determine project approval.

---

## 1. Frame Wireframes as Strategic Layout Concepts

When walking clients through landing page mockups:
- Explain that review card components illustrate visual real estate and hierarchy, not final published text.
- Highlight how star rating placement supports conversion goals above the fold.
- Show both desktop and mobile mockups side-by-side to demonstrate responsive flexibility.

---

## 2. Include Simulation Disclaimers in Pitch Materials

To maintain total transparency:
- Label mockup cards with "Simulated Content Example for Design Presentation".
- Provide clear copy guidelines to the client's marketing team on how real customer testimonials will be collected prior to site launch.
`
  },
  {
    slug: "testing-review-interfaces",
    title: "Usability Testing & A/B Wireframing for Customer Reviews",
    category: "UI/UX Prototyping",
    description: "Methods for conducting user research, tree testing, and A/B wireframe evaluations on customer feedback UI components.",
    readTime: "11 min read",
    date: "2026-08-14",
    author: {
      name: "ReviewCraft UX Lab",
      role: "UX Research Specialist"
    },
    content: `
# Usability Testing & A/B Wireframing for Customer Reviews

Testing how target users interact with review components provides valuable data before writing production code.

---

## 1. Key Usability Metrics to Measure

When running user testing on review card prototypes:
- Time to First Interaction: How quickly users locate review filters or search bars.
- Scannability Index: Whether users notice key summary badges (e.g., Overall Score, Rating Distribution) during 5-second impression tests.
- Scroll Depth: Tracking how far users scroll down feedback feeds on mobile viewports.

---

## 2. Running A/B Wireframe Tests

Create two visual variants to test engagement:
- Variant A: Compact horizontal card carousel.
- Variant B: Expanded 2-column card grid with histogram summary header.

Evaluate which layout pattern yields higher comprehension and trust ratings in user research panels.
`
  },
  {
    slug: "review-interface-accessibility",
    title: "Accessible Review UI: WCAG Standards for Rating & Testimonial Components",
    category: "Accessibility",
    description: "A comprehensive guide to building WCAG 2.1 AA compliant rating stars, accessible screen-reader labels, and keyboard-navigable feedback widgets.",
    readTime: "13 min read",
    date: "2026-08-14",
    author: {
      name: "ReviewCraft Accessibility Team",
      role: "WCAG & Inclusive Design Specialist"
    },
    content: `
# Accessible Review UI: WCAG Standards for Rating & Testimonial Components

Ensuring customer review components are accessible to users with disabilities is an essential requirement for modern web applications.

This technical guide covers WCAG 2.1 AA compliance standards for star ratings, screen reader announcements, color contrast, and keyboard navigation.

---

## 1. Screen Reader Accessibility for Star Ratings

Visual star icons (e.g., ★★★★☆) are unreadable by screen readers unless properly annotated with ARIA attributes.

Passes WCAG 2.1 AA: Use role="img" and aria-label="Rated 4 out of 5 stars" on star containers while hiding decorative star symbols with aria-hidden="true".

---

## 2. Color Contrast Requirements (WCAG 2.1 AA)

- Star Fill Color: The star icon fill color must satisfy a minimum 3:1 contrast ratio against the card background for graphical objects (WCAG 1.4.11 Non-Text Contrast).
- Body Prose & Titles: Text must satisfy a minimum 4.5:1 contrast ratio against card backgrounds.
- Focus Rings: Interactive buttons (e.g., Helpful vote, Filter dropdowns) must display visible focus rings with at least 3:1 contrast against surrounding elements when navigated via keyboard Tab key.

---

## 3. Keyboard Navigation Checklist

- Ensure all interactive controls (e.g., Filter by Rating, Helpful Vote, Expand Review) are reachable via Tab key.
- Trigger actions on both Enter and Space key presses.
`
  }
];
