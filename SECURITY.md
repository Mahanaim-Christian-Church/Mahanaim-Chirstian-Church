# Security Policy

**Mahanaim Christian Church Website - Security Practices**

---

## 🔒 Security Overview

This project implements multiple layers of security to protect the church website and visitor data.

---

## 🛡️ Security Features

### 1. CodeQL Security Scanning

**What it does:**
- Automatically scans code for security vulnerabilities
- Detects common coding errors that could lead to security issues
- Runs on every push and pull request
- Weekly scheduled scans

**Languages scanned:**
- JavaScript
- TypeScript

**Queries used:**
- `security-extended` - Extended security analysis
- `security-and-quality` - Security and code quality checks

**How to view results:**
1. Go to repository on GitHub
2. Click **Security** tab
3. Click **Code scanning alerts**
4. Review any findings

### 2. Static Site Security

**Benefits:**
- No server-side code = No server vulnerabilities
- No database = No SQL injection risks
- No user authentication = No password breaches
- Static files only = Minimal attack surface

### 3. HTTPS Enforcement

**Provided by GitHub Pages:**
- All traffic encrypted with TLS
- Automatic certificate management
- No configuration needed

### 4. Dependency Security

**Automated checks:**
- GitHub Dependabot monitors dependencies
- Alerts for known vulnerabilities
- Automated security updates available

**Manual checks:**
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Force fix (may have breaking changes)
npm audit fix --force
```

### 5. Secrets Management

**Best practices:**
- Never commit API keys or passwords
- Use GitHub Secrets for sensitive data
- `.env` file in `.gitignore`
- Only expose public API keys in frontend

**Safe to expose (public):**
- ✅ Umami Website ID
- ✅ YouTube Playlist ID
- ✅ Church coordinates
- ✅ Formspree endpoint
- ✅ Public contact information

**Never expose (private):**
- ❌ Database credentials
- ❌ Private API keys
- ❌ Authentication tokens
- ❌ Payment information
- ❌ Admin passwords

---

## 🔍 Security Scanning Schedule

### Automatic Scans

**On every push:**
- CodeQL security analysis
- Dependency vulnerability check

**On every pull request:**
- CodeQL security analysis
- Code review required

**Weekly (Tuesday 1:39 PM UTC):**
- Scheduled CodeQL scan
- Comprehensive security review

### Manual Scans

Run security audit anytime:
```bash
npm audit
```

---

## 🚨 Vulnerability Reporting

### If you find a security issue:

**DO:**
1. Report privately via GitHub Security Advisories
2. Go to **Security** tab → **Advisories** → **New draft security advisory**
3. Provide detailed description
4. Wait for response before public disclosure

**DON'T:**
- Post security issues publicly in GitHub Issues
- Share vulnerabilities on social media
- Exploit vulnerabilities

### Response time:
- **Critical:** 24 hours
- **High:** 48 hours
- **Medium:** 1 week
- **Low:** 2 weeks

---

## 🔐 Security Best Practices

### For Developers

1. **Keep dependencies updated:**
   ```bash
   npm update
   npm audit fix
   ```

2. **Review CodeQL alerts:**
   - Check Security tab regularly
   - Fix high/critical issues immediately
   - Document false positives

3. **Use secure coding practices:**
   - Validate all user input
   - Sanitize data before display
   - Use HTTPS for all external requests
   - Avoid eval() and innerHTML with user data

4. **Protect secrets:**
   - Never commit `.env` file
   - Use GitHub Secrets for CI/CD
   - Rotate API keys regularly

### For Church Staff

1. **Protect GitHub account:**
   - Use strong password
   - Enable two-factor authentication (2FA)
   - Don't share credentials

2. **Review changes:**
   - Check pull requests before merging
   - Verify changes from unknown contributors
   - Report suspicious activity

3. **Keep content safe:**
   - Don't post personal information
   - Blur faces in photos (if needed)
   - Get consent for testimonies

---

## 🛠️ Security Tools

### Enabled

- ✅ **CodeQL** - Code security scanning
- ✅ **Dependabot** - Dependency updates
- ✅ **GitHub Actions** - Secure CI/CD
- ✅ **HTTPS** - Encrypted connections

### Recommended

- 🔧 **Branch protection** - Require reviews before merge
- 🔧 **Required status checks** - CodeQL must pass
- 🔧 **Signed commits** - Verify commit authenticity

### To enable branch protection:

1. Go to **Settings** → **Branches**
2. Click **Add rule**
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass
   - ✅ Require CodeQL to pass
5. Click **Create**

---

## 📊 Security Checklist

### Initial Setup
- [x] CodeQL workflow configured
- [x] Dependabot enabled
- [x] HTTPS enforced
- [x] Secrets in GitHub Secrets (not code)
- [x] `.env` in `.gitignore`
- [ ] Branch protection enabled (recommended)
- [ ] Two-factor authentication enabled (recommended)

### Ongoing
- [ ] Review CodeQL alerts weekly
- [ ] Update dependencies monthly
- [ ] Rotate API keys quarterly
- [ ] Security audit annually

---

## 🔄 Security Update Process

### When vulnerability is found:

1. **Assess severity:**
   - Critical: Fix immediately
   - High: Fix within 48 hours
   - Medium: Fix within 1 week
   - Low: Fix in next release

2. **Fix the issue:**
   - Update dependency, or
   - Patch code, or
   - Remove vulnerable feature

3. **Test thoroughly:**
   - Verify fix works
   - Ensure no breaking changes
   - Run full test suite

4. **Deploy:**
   - Commit fix
   - Push to GitHub
   - Verify deployment

5. **Document:**
   - Update CHANGELOG
   - Note in commit message
   - Close security advisory

---

## 📚 Security Resources

### GitHub Security
- **Security Advisories:** [docs.github.com/security-advisories](https://docs.github.com/en/code-security/security-advisories)
- **CodeQL:** [codeql.github.com](https://codeql.github.com)
- **Dependabot:** [docs.github.com/dependabot](https://docs.github.com/en/code-security/dependabot)

### Best Practices
- **OWASP Top 10:** [owasp.org/www-project-top-ten](https://owasp.org/www-project-top-ten/)
- **Web Security:** [web.dev/secure](https://web.dev/secure/)
- **npm Security:** [docs.npmjs.com/security](https://docs.npmjs.com/security)

### Tools
- **npm audit:** Built-in vulnerability scanner
- **Snyk:** [snyk.io](https://snyk.io) - Advanced security scanning
- **GitHub Security:** Built-in security features

---

## 🆘 Security Contacts

**For security issues:**
- **GitHub Security Advisories:** Use Security tab
- **Email:** security@mahanaim.org (if configured)
- **Emergency:** Contact repository owner directly

**For general issues:**
- **GitHub Issues:** [Open an issue](https://github.com/yourusername/Mahanaim-Christian-Church/issues)
- **Email:** info@mahanaim.org

---

## 📜 Security Policy Updates

This security policy is reviewed and updated:
- When new security features are added
- When vulnerabilities are discovered
- Quarterly as part of security audit
- Annually as part of comprehensive review

---

## ✅ Compliance

### Privacy
- ✅ GDPR compliant (Umami analytics)
- ✅ No cookies without consent
- ✅ Privacy policy provided
- ✅ Data minimization

### Security
- ✅ HTTPS enforced
- ✅ Automated security scanning
- ✅ Dependency monitoring
- ✅ Secure secrets management

### Accessibility
- ✅ WCAG 2.1 Level AA compliant
- ✅ Keyboard accessible
- ✅ Screen reader compatible

---

## 🙏 Security Commitment

We are committed to maintaining the security and privacy of the Mahanaim Christian Church website and protecting our visitors' data.

> *"The Lord is my rock and my fortress and my deliverer; My God, my strength, in whom I will trust."*  
> — Psalm 18:2 (NKJV)

---

**Last Updated:** January 2025  
**Next Review:** April 2025
