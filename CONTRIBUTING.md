# Contributing to Webnestic School ERP

We appreciate your interest in contributing to Webnestic! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please review and agree to our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/webnetic-tech-up-.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit with clear messages: `git commit -m "feat: add new feature"`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Create a Pull Request

## Coding Standards

### General
- Use clear, descriptive variable and function names
- Write self-documenting code
- Keep functions small and focused
- Comment complex logic

### TypeScript
- Always use TypeScript for type safety
- Avoid `any` types
- Use interfaces for object shapes
- Export types from dedicated files

### Backend (Node.js)
- Follow Express.js best practices
- Use async/await over callbacks
- Implement proper error handling
- Write unit tests for new functions
- Use meaningful HTTP status codes

### Frontend (Next.js)
- Use functional components
- Implement proper error boundaries
- Follow React hooks best practices
- Use Tailwind CSS for styling
- Ensure mobile responsiveness

### Database
- Write migrations for schema changes
- Use foreign keys and constraints
- Add proper indexes
- Document schema changes

## Commit Messages

Follow conventional commit format:
```
type(scope): subject

body

footer
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(student-management): add bulk student import

Implement CSV import functionality for students with validation
and error handling.

Closes #123
```

## Testing

Before submitting a PR:
1. Write unit tests for new functionality
2. Ensure all tests pass: `npm test`
3. Check code coverage
4. Test locally in development environment
5. Test in multiple browsers (if frontend)

## Pull Request Process

1. Update documentation as needed
2. Add tests for new features
3. Update CHANGELOG.md
4. Ensure CI/CD passes
5. Request review from maintainers
6. Address review comments
7. Squash commits if requested

## Reporting Issues

### Bug Reports
Include:
- Clear description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details
- Screenshots/logs if applicable

### Feature Requests
Include:
- Clear description of the feature
- Use case/benefit
- Proposed implementation (if applicable)
- Examples

## Documentation

- Keep README.md up to date
- Document new features
- Add API documentation
- Update deployment guides
- Include code examples

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## Questions?

Feel free to ask questions in:
- Issues section
- Email: dev@webnestic.com
- Documentation: https://docs.webnestic.com

Thank you for contributing!
