# 🤝 Contributing to Next.js Blog Starter Kit

Thank you for your interest in contributing to Next.js Blog Starter Kit! This document provides guidelines and information for contributors.

## 🚀 Quick Start

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a feature branch
4. **Make** your changes
5. **Test** your changes
6. **Commit** and **push** to your fork
7. **Open** a Pull Request

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Git
- Basic knowledge of Next.js, React, and TypeScript

## 🛠️ Development Setup

### 1. Fork and Clone

```bash
# Fork the repository on GitHub first, then:
git clone https://github.com/YOUR_USERNAME/nextjs-blog-starter-kit.git
cd nextjs-blog-starter-kit
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-fix-name
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 📝 Making Changes

### Code Style

- **TypeScript**: Use strict mode, avoid `any` types
- **React**: Use functional components with hooks
- **CSS**: Use Tailwind CSS utility classes
- **Naming**: Use descriptive names, follow camelCase for variables/functions

### File Structure

```
src/
├── components/     # Reusable UI components
├── lib/           # Utility functions and helpers
├── pages/         # Next.js pages
├── posts/         # Markdown blog posts
└── styles/        # Global styles
```

### Testing Your Changes

1. **Build Check**: Ensure the project builds successfully
   ```bash
   npm run build
   ```

2. **Lint Check**: Fix any linting issues
   ```bash
   npm run lint
   ```

3. **Type Check**: Verify TypeScript types
   ```bash
   npx tsc --noEmit
   ```

## 🐛 Reporting Issues

### Before Reporting

1. **Search** existing issues to avoid duplicates
2. **Check** if the issue is already fixed in the latest version
3. **Reproduce** the issue with a minimal example

### Issue Template

Use this template when creating issues:

```markdown
## Bug Report

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. macOS, Windows, Linux]
 - Browser: [e.g. Chrome, Safari, Firefox]
 - Version: [e.g. 22]

**Additional context**
Add any other context about the problem here.
```

## 🔧 Pull Request Guidelines

### Before Submitting

1. **Test** your changes thoroughly
2. **Update** documentation if needed
3. **Ensure** all tests pass
4. **Check** code formatting and linting

### PR Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] All tests pass
- [ ] Build successful

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

### Commit Messages

Use conventional commit format:

```
type(scope): description

Examples:
feat(blog): add pagination support
fix(header): resolve navigation alignment issue
docs(readme): update installation instructions
style(components): improve button hover states
refactor(posts): simplify markdown processing
test(utils): add unit tests for date formatting
```

## 🎯 Areas for Contribution

### High Priority
- **Bug fixes** and performance improvements
- **Accessibility** improvements
- **SEO** optimizations
- **Mobile** responsiveness fixes

### Medium Priority
- **New features** that align with the project's scope
- **Documentation** improvements
- **Code quality** enhancements
- **Testing** coverage improvements

### Low Priority
- **Cosmetic** changes
- **Experimental** features
- **Major** architectural changes

## 📚 Documentation

### Code Comments
- Add JSDoc comments for complex functions
- Explain business logic where necessary
- Keep comments up-to-date with code changes

### README Updates
- Update installation instructions if dependencies change
- Add examples for new features
- Keep screenshots and demos current

## 🚫 What Not to Do

- **Don't** submit PRs without testing
- **Don't** ignore linting errors
- **Don't** make breaking changes without discussion
- **Don't** submit incomplete features
- **Don't** ignore code review feedback

## 🎉 Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For questions and general help
- **Code Review**: Ask questions in PR reviews

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Next.js Blog Starter Kit! 🚀
