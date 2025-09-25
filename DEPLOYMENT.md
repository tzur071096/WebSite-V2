# Deployment Guide - Shira's Cakes

This guide will help you deploy the Shira's Cakes landing page to Vercel.

## Prerequisites

1. **GitHub Account**: You'll need a GitHub account to host your code
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Resend Account**: Sign up at [resend.com](https://resend.com) for email functionality
4. **Domain (Optional)**: You can use a custom domain or the default Vercel domain

## Step-by-Step Deployment

### 1. Prepare Your Repository

1. **Initialize Git** (if not already done):
```bash
cd shiras-cakes
git init
git add .
git commit -m "Initial commit: Shira's Cakes landing page"
```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `shiras-cakes` (or your preferred name)
   - Make it public or private
   - Don't initialize with README (we already have one)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/shiras-cakes.git
git branch -M main
git push -u origin main
```

### 2. Set Up Resend

1. **Sign up for Resend**:
   - Go to [resend.com](https://resend.com)
   - Create an account
   - Verify your email

2. **Create API Key**:
   - Go to API Keys section
   - Click "Create API Key"
   - Name it "Shira's Cakes Production"
   - Copy the API key (you'll need it for Vercel)

3. **Verify Domain** (Optional):
   - Add your domain to Resend
   - Follow DNS verification steps
   - This allows you to send emails from your domain

### 3. Deploy to Vercel

1. **Connect Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `shiras-cakes` repository

2. **Configure Project**:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

3. **Add Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add the following variables:

| Name | Value | Environment |
|------|-------|-------------|
| `RESEND_API_KEY` | Your Resend API key | Production, Preview, Development |
| `BUSINESS_EMAIL` | shira@shirascakes.com | Production, Preview, Development |

4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be available at `https://your-project-name.vercel.app`

### 4. Custom Domain (Optional)

1. **Add Domain in Vercel**:
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `shirascakes.com`)

2. **Update DNS**:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or add A records as instructed by Vercel

3. **SSL Certificate**:
   - Vercel automatically provides SSL certificates
   - Your site will be available at `https://yourdomain.com`

## Post-Deployment Checklist

### ✅ Test All Functionality

1. **Navigation**:
   - [ ] All navigation links work
   - [ ] Smooth scrolling to sections
   - [ ] Mobile menu works

2. **Contact Form**:
   - [ ] Form validation works
   - [ ] Emails are sent successfully
   - [ ] Confirmation emails received
   - [ ] Business emails received

3. **Portfolio Gallery**:
   - [ ] Images load correctly
   - [ ] Lightbox functionality works
   - [ ] Responsive on mobile

4. **Social Media Links**:
   - [ ] Instagram link works
   - [ ] Facebook link works
   - [ ] WhatsApp link works

5. **Performance**:
   - [ ] Site loads quickly
   - [ ] Images are optimized
   - [ ] Mobile responsive

### ✅ SEO Verification

1. **Meta Tags**:
   - [ ] Title appears correctly
   - [ ] Description appears correctly
   - [ ] Open Graph tags work

2. **Google Search Console**:
   - [ ] Submit sitemap
   - [ ] Verify ownership
   - [ ] Monitor indexing

### ✅ Analytics Setup

1. **Google Analytics** (Optional):
   - Add Google Analytics tracking code
   - Monitor visitor behavior
   - Track form submissions

2. **Vercel Analytics**:
   - Enable Vercel Analytics in project settings
   - Monitor Core Web Vitals

## Maintenance

### Regular Updates

1. **Content Updates**:
   - Update portfolio images
   - Modify pricing if needed
   - Update contact information

2. **Security Updates**:
   - Keep dependencies updated
   - Monitor for security vulnerabilities

3. **Performance Monitoring**:
   - Check Core Web Vitals
   - Monitor page load times
   - Optimize images as needed

### Backup Strategy

1. **Code Backup**:
   - GitHub repository serves as primary backup
   - Regular commits for changes

2. **Content Backup**:
   - Keep original images in separate location
   - Document all content changes

## Troubleshooting

### Common Issues

1. **Email Not Working**:
   - Check Resend API key
   - Verify domain settings
   - Check spam folder

2. **Images Not Loading**:
   - Verify image paths
   - Check file permissions
   - Optimize image sizes

3. **Build Errors**:
   - Check environment variables
   - Verify all dependencies installed
   - Check for TypeScript errors

### Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Resend Documentation**: [resend.com/docs](https://resend.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)

## Success Metrics

Track these metrics to measure success:

1. **Traffic**:
   - Page views
   - Unique visitors
   - Traffic sources

2. **Engagement**:
   - Time on site
   - Bounce rate
   - Form submissions

3. **Business Impact**:
   - Contact form submissions
   - Phone calls
   - Social media clicks

## Next Steps

After successful deployment:

1. **Marketing**:
   - Share on social media
   - Update business listings
   - Add to Google My Business

2. **SEO**:
   - Submit to search engines
   - Create Google My Business listing
   - Build local citations

3. **Analytics**:
   - Set up Google Analytics
   - Monitor performance
   - Track conversions

Your Shira's Cakes landing page is now live and ready to attract customers! 🎂✨
