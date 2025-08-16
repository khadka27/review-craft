# Contributing to ReviewCraft

Thank you for your interest in contributing to ReviewCraft! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

- Use the [GitHub Issues](https://github.com/khadka27/review-craft/issues) page
- Check if the issue already exists before creating a new one
- Provide clear reproduction steps
- Include screenshots/videos when helpful

### Suggesting Features

- Open a feature request issue
- Describe the feature and its use case
- Explain why it would be valuable

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test your changes**
5. **Commit with clear messages**
   ```bash
   git commit -m "feat: add new platform support for LinkedIn"
   ```
6. **Push to your fork**
7. **Create a Pull Request**

## 📋 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code structure
- Use meaningful variable and function names
- Add comments for complex logic

### Component Structure

```typescript
// components/platforms/NewPlatform.tsx
import React from "react";
import { ReviewData } from "@/types/review";

interface NewPlatformProps {
  reviewData: ReviewData;
}

export const NewPlatform: React.FC<NewPlatformProps> = ({ reviewData }) => {
  return (
    <div className="platform-specific-styling">{/* Component content */}</div>
  );
};
```

### Adding New Platforms

1. **Create platform component** in `src/components/platforms/`
2. **Add platform to types** in `src/types/review.ts`
3. **Update data generator** in `src/utils/dataGenerator.ts`
4. **Add platform icon** in `src/components/SocialMediaIcons.tsx`
5. **Test thoroughly** across different screen sizes

### Testing

- Test on multiple browsers
- Verify responsive design
- Check accessibility
- Test image export functionality

## 🎯 Areas for Contribution

### High Priority

- [ ] Add more platform components
- [ ] Improve mobile responsiveness
- [ ] Add dark mode support
- [ ] Enhance accessibility

### Medium Priority

- [ ] Add animation effects
- [ ] Improve error handling
- [ ] Add more export formats
- [ ] Performance optimizations

### Nice to Have

- [ ] Localization support
- [ ] Theme customization
- [ ] Bulk export features
- [ ] API integration

## 📝 Commit Guidelines

Use conventional commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/changes
- `chore:` - Maintenance tasks

Examples:

```
feat: add Instagram stories support
fix: resolve image export on mobile
docs: update installation instructions
style: improve button hover effects
```

## 🔍 Code Review Process

1. All contributions require review
2. Maintain code quality standards
3. Ensure documentation is updated
4. Verify accessibility compliance
5. Test across different devices

## 📞 Getting Help

- **GitHub Discussions**: For general questions
- **GitHub Issues**: For bug reports and feature requests
- **Email**: For private communication

## 🏆 Recognition

Contributors will be recognized in:

- README acknowledgments
- Release notes
- Contributors page (if created)

Thank you for helping make ReviewCraft better! 🎉
