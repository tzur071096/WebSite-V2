# Shira's Cakes - Professional Landing Page

A modern, professional landing page for Shira's Cakes - a custom cake business run by Shira Tzur in Plano, Texas.

## Features

- **Modern Design**: Clean, elegant design with pink and white color scheme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Contact Form**: Integrated with Resend for email handling
- **Portfolio Gallery**: Beautiful image gallery with lightbox functionality
- **SEO Optimized**: Proper meta tags and structured data
- **Social Media Integration**: Links to Instagram, Facebook, and WhatsApp
- **Smooth Navigation**: Sticky navigation with smooth scrolling

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Email Service**: Resend
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend account for email functionality

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tzur071096/WebSite-V2.git
cd WebSite-V2
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
BUSINESS_EMAIL=shira@shirascakes.com
```

4. Get your Resend API key:
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Add it to your `.env.local` file

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
WebSite-V2/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
│   └── images/
│       ├── logo.jpg
│       └── cakes/
├── tailwind.config.js
├── next.config.ts
└── package.json
```

## Components

### Navigation
- Top bar with contact info and social links
- Sticky main navigation
- Smooth scroll to sections
- Mobile-responsive

### Hero
- Eye-catching hero section with background image
- Order form with validation
- Call-to-action buttons

### About
- Personal story of Shira Tzur
- Professional achievements
- Visual elements and stats

### Services
- Service offerings with pricing
- Custom cakes, cupcakes, cookies, workshops
- Clear pricing cards

### Portfolio
- Image gallery with lightbox
- Responsive grid layout
- Smooth transitions

### Contact
- Contact information
- Service area details
- Social media links
- Map placeholder

### Footer
- Company information
- Quick links
- Social media icons
- Sticky bottom bar

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: Pink shades (#EC4899, #F472B6)
- Secondary: Gray shades
- Background: White and light pink gradients

### Images
- Logo: `/public/images/logo.jpg`
- Cake images: `/public/images/cakes/`
- Update images by replacing files in the public directory

### Content
- Update text content in individual component files
- Modify contact information in components
- Update social media links

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email functionality | Yes |
| `BUSINESS_EMAIL` | Business email address | Yes |

## SEO Features

- Meta tags for title, description, and keywords
- Open Graph tags for social media sharing
- Twitter Card tags
- Structured data for local business
- Optimized images with Next.js Image component
- Semantic HTML structure

## Performance

- Optimized images with Next.js Image component
- CSS optimization with Tailwind CSS
- Smooth scrolling and transitions
- Mobile-first responsive design
- Core Web Vitals optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.

## Support

For support or questions, contact:
- Phone: +1 214.677.6273
- Email: shira@shirascakes.com
- Instagram: [@shirascakes](https://www.instagram.com/shirascakes/)
- Facebook: [Cakes by Shira](https://www.facebook.com/cakesbyshira)

## Changelog

### Version 1.0.0
- Initial release
- Complete landing page with all sections
- Email integration with Resend
- Responsive design
- SEO optimization
