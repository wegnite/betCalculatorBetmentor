# 🎯 BetCalc Pro - Professional Bet Calculator

A comprehensive, multilingual betting calculator built with Next.js, featuring 15+ bet types, 5 odds formats, and real-time risk assessment.

## 🚀 Features

### 📊 Calculator Functions
- **15+ Bet Types**: Single, Parlay, Accumulator, System, Each Way, Trixie, Yankee, and more
- **5 Odds Formats**: Decimal, Fractional, American, Hong Kong, Malay
- **Real-time Risk Assessment**: Smart bankroll management analysis
- **Strategy Comparison**: Compare multiple betting scenarios
- **Advanced Options**: Commission rates, tax calculations, bankroll management

### 🌍 Multilingual Support
- 🇪🇸 **Spanish** (Default) - Primary market
- 🇺🇸 **English** - For Guyana and international users  
- 🇧🇷 **Portuguese** - For Brazil and Latin America

### 💰 Monetization Ready
- **Google AdSense Integration**: Pre-configured ad placements
- **SEO Optimized**: Complete meta tags, sitemap, structured data
- **High CTR Layout**: Strategic ad positioning for maximum revenue

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: CSS Modules with responsive design
- **Deployment**: Vercel-ready with static export
- **SEO**: Complete optimization for Google Search Console
- **Analytics**: Google Analytics integration ready

## 📦 Installation

```bash
# Clone the repository
git clone git@github.com:wegnite/betCalculatorBetmentor.git
cd betCalculatorBetmentor

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment
```bash
# Build static files
npm run build

# The 'out' directory contains all static files
# Upload to any static hosting service
```

## 📈 SEO & Performance

### ✅ SEO Optimized
- Meta tags optimized for each language
- Structured data (JSON-LD)
- XML sitemap with hreflang
- Robots.txt configuration
- Open Graph and Twitter Cards

### ✅ Performance
- Static export for fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- Progressive Web App ready

## 💰 Google AdSense Setup

1. **Get AdSense Account**: Apply at [Google AdSense](https://www.google.com/adsense/)

2. **Update Ad Codes**: Replace placeholder codes in components:
   ```typescript
   // Replace in src/components/AdSense.tsx
   const PUBLISHER_ID = "ca-pub-XXXXXXXXXX"; // Your Publisher ID
   const AD_SLOT_ID = "XXXXXXXXXX"; // Your Ad Slot ID  
   ```

3. **Ad Placements**: 
   - Sidebar: 2 display ads
   - Footer: 1 banner ad
   - Content: In-article ads (optional)

## 🎯 Target Markets

### Primary Markets (Google Trends Data)
1. **Spain** 🇪🇸 - Highest search volume for "calculadora apuestas"
2. **Guyana** 🇬🇾 - High search volume for "bet calculator"  
3. **Brazil** 🇧🇷 - Growing market for "calculadora apostas"

### SEO Keywords
- **Spanish**: calculadora apuestas, calcular cuotas, apuestas deportivas
- **English**: bet calculator, betting calculator, odds calculator
- **Portuguese**: calculadora apostas, calcular odds, apostas esportivas

## 📊 Expected Revenue

### Conservative Estimates
| Market | Monthly Traffic | CTR | CPC | Monthly Revenue |
|--------|----------------|-----|-----|----------------|
| Spain | 15k-25k | 3-5% | $0.80-$1.50 | $200-$800 |
| Guyana | 2k-5k | 4-6% | $0.30-$0.80 | $50-$200 |
| Brazil | 8k-15k | 2-4% | $0.25-$0.60 | $100-$400 |

**Total Estimated**: $350-$1,400/month

## 📱 Features by Page

### Homepage (`/`)
- Full calculator functionality
- Educational content sections
- Strategic ad placements
- Multilingual content

### Legal Pages
- `/privacy-policy` - GDPR compliant privacy policy
- `/terms-of-service` - Complete terms and conditions
- `/about` - Company information and values
- `/contact` - Contact form and information

## 🔧 Development

### Project Structure
```
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/              # Next.js pages
│   ├── styles/             # CSS modules and global styles
│   ├── utils/              # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   └── lib/                # External library configurations
├── public/                 # Static assets
├── docs/                   # Documentation
└── ...config files
```

### Key Components
- `Calculator`: Main betting calculator logic
- `BetTypeSelector`: Bet type selection interface  
- `OddsConverter`: Multi-format odds conversion
- `RiskAssessment`: Real-time risk analysis
- `AdSense`: Google AdSense integration
- `LanguageSwitcher`: Multilingual support

### Available Scripts
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checking
npm run export       # Static export for deployment
```

## 🌐 Internationalization

### Language Configuration
The app supports automatic language detection and manual switching:

```typescript
// next.config.js
i18n: {
  locales: ['es', 'en', 'pt'],
  defaultLocale: 'es',
  localeDetection: true,
}
```

### Adding New Languages
1. Add locale to `next.config.js`
2. Create translation files in `src/lib/translations/`
3. Update `LanguageSwitcher` component
4. Add hreflang tags to sitemap

## ⚖️ Legal Compliance

### AdSense Policy Compliance
- ✅ Original, high-quality content
- ✅ Clear navigation and user experience  
- ✅ Privacy policy and terms of service
- ✅ Educational focus (not promoting gambling)
- ✅ Responsible gambling warnings
- ✅ No prohibited content

### GDPR Compliance
- Minimal data collection
- Clear privacy policy
- Cookie consent (implemented)
- User rights explanation
- Data processing transparency

## 📞 Support

### Issues and Bug Reports
- **GitHub Issues**: [Create an issue](https://github.com/wegnite/betCalculatorBetmentor/issues)
- **Email**: support@betcalc-pro.com

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Success Metrics

### Traffic Goals
- Month 1: 1,000+ monthly visitors
- Month 3: 5,000+ monthly visitors  
- Month 6: 15,000+ monthly visitors
- Year 1: 50,000+ monthly visitors

### Revenue Goals
- Month 1: $50+ from AdSense
- Month 3: $200+ from AdSense
- Month 6: $500+ from AdSense
- Year 1: $1,000+ from AdSense

## 🚀 Go Live Checklist

- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Submit to Google Search Console
- [ ] Configure Google Analytics
- [ ] Apply for Google AdSense
- [ ] Test all functionality
- [ ] Verify all languages work
- [ ] Check mobile responsiveness
- [ ] Test ad placements
- [ ] Monitor Core Web Vitals

---

**Ready to generate passive income with professional betting calculations! 💰**