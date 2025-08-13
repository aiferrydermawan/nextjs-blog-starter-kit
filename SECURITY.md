# 🔒 Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Next.js Blog Starter Kit seriously. If you believe you have found a security vulnerability, please report it to us as described below.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to **security@yourdomain.com**.

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the requested information listed below (as much as you can provide) to help us better understand the nature and scope of the possible issue:

- **Type of issue** (buffer overflow, SQL injection, cross-site scripting, etc.)
- **Full paths of source file(s) related to the vulnerability**
- **The location of the affected source code** (tag/branch/commit or direct URL)
- **Any special configuration required to reproduce the issue**
- **Step-by-step instructions to reproduce the issue**
- **Proof-of-concept or exploit code** (if possible)
- **Impact of the issue, including how an attacker might exploit it**

This information will help us triage your report more quickly and efficiently.

## Preferred Languages

We prefer all communications to be in English.

## Disclosure Policy

When we receive a security bug report, we will:

1. **Confirm the problem** and determine affected versions
2. **Audit code** to find any similar problems
3. **Prepare fixes** for all supported versions
4. **Release a new version** with the fix
5. **Credit the reporter** in the release notes

## Security Best Practices

### For Users

- **Keep dependencies updated**: Regularly run `npm audit` and update packages
- **Use HTTPS**: Always serve your blog over HTTPS in production
- **Environment variables**: Never commit sensitive data to your repository
- **Regular backups**: Keep backups of your content and configuration

### For Contributors

- **Code review**: All code changes must go through review
- **Dependency updates**: Keep dependencies updated and secure
- **Input validation**: Always validate and sanitize user input
- **Error handling**: Don't expose sensitive information in error messages

## Security Features

This starter kit includes several security features by default:

- **Content Security Policy**: Built-in CSP headers
- **XSS Protection**: Automatic XSS prevention
- **CSRF Protection**: Built-in CSRF token handling
- **Secure Headers**: Security-focused HTTP headers
- **Input Sanitization**: Automatic input cleaning

## Reporting Security Issues in Dependencies

If you find a security issue in one of our dependencies, please:

1. **Check if it's already reported** in the dependency's repository
2. **Report it there first** if it's not already reported
3. **Let us know** so we can update the dependency when a fix is available

## Security Updates

We will:

- **Release security updates** as soon as possible
- **Communicate clearly** about any security issues
- **Provide migration guides** for breaking security changes
- **Maintain a security advisory** for known issues

## Contact

- **Security Email**: security@yourdomain.com
- **PGP Key**: [Your PGP Key Fingerprint]
- **Security Team**: [Your Security Team Contact]

---

**Thank you for helping keep Next.js Blog Starter Kit secure!** 🛡️
