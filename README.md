# LeafTok Landing Page 🍃

A modern, bilingual landing page for LeafTok - the revolutionary app that transforms books into bite-sized, swipeable cards.

## ✨ Features

- 🌐 **Bilingual Support** - Portuguese (PT-BR) and English (EN)
- 🎨 **Modern Design** - Clean, purist design with brand colors
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Fast Performance** - Pure HTML, CSS, and vanilla JavaScript
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🚀 **Auto Deployment** - GitHub Actions for seamless deployment

## 🎨 Brand Colors

- **Primary**: `#2DD29F` (Mint Green)
- **Accent**: `#D36462` (Coral Red)
- **Dark**: `#13141E` (Deep Navy)

## 🌐 Live Demo

The landing page is automatically deployed to GitHub Pages at:

- **Primary URL**: https://leaftok.github.io/site/
- **Custom Domain**: https://leaftok.iagocavalcante.com

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/leaftok/site.git
   cd site
   ```

2. **Open in browser**

   ```bash
   open index.html
   # or
   python -m http.server 8000
   ```

3. **View at** `http://localhost:8000`

## 📁 Project Structure

```
lp-leaftok/
├── index.html              # Main landing page
├── assets/                 # Images and icons
│   ├── logo.png           # Main logo
│   ├── screenshot.png     # App screenshot
│   ├── favicon.ico        # Favicon files
│   ├── apple-touch-icon.png
│   └── ...
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
└── README.md              # This file
```

## 🛠️ GitHub Pages Setup

### Automatic Setup (Recommended)

The repository includes a GitHub Action that automatically deploys to GitHub Pages on every push to the main branch.

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The deployment will start automatically on your next push

### Manual Setup

If you prefer manual deployment:

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select "Deploy from a branch"
3. Choose **main** branch and **/ (root)** folder
4. Click **Save**

## 🌐 Language Support

The landing page supports two languages with instant switching:

- **Portuguese (PT-BR)** - Default for Brazilian audience
- **English (EN)** - For international users

Language preference is automatically saved in the browser's local storage.

### Adding New Languages

To add a new language:

1. Add translations to the `translations` object in `index.html`
2. Add a language button in the navigation
3. Update the `changeLanguage()` function

## 🎯 Customization

### Colors

Update the Tailwind configuration in `index.html`:

```javascript
colors: {
    primary: { /* Your primary color shades */ },
    accent: { /* Your accent color shades */ },
    dark: { /* Your dark color shades */ }
}
```

### Content

All text content uses the `data-i18n` attribute system for easy translation and updates.

### Assets

Replace files in the `assets/` folder:

- `logo.png` - Your logo
- `screenshot.png` - App screenshot
- Favicon files for complete browser support

## 📱 App Links

- **iOS**: [App Store](https://apps.apple.com/br/app/leaftok/id6748622950)
- **Android**: [Google Play](https://play.google.com/store/apps/details?id=com.iagocavalcante.leaftok)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **Vanilla JavaScript** - No external dependencies
- **GitHub Actions** - Automated deployment
- **Inter Font** - Modern typography

## 📊 Performance

- ⚡ **Fast Loading** - Optimized assets and minimal dependencies
- 📱 **Mobile First** - Responsive design principles
- 🎨 **Modern Animations** - Smooth CSS transitions
- 🔍 **SEO Ready** - Proper meta tags and structure

## 🚀 Deployment

### Automatic Deployment

Every push to the `main` branch triggers automatic deployment via GitHub Actions.

### Manual Deployment

To deploy manually:

1. Ensure all changes are committed
2. Push to the main branch
3. GitHub Pages will update automatically (may take a few minutes)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Iago Cavalcante**

- Website: https://iagocavalcante.com
- GitHub: [@IagoCavalcante](https://github.com/IagoCavalcante)
- App: https://leaftok.iagocavalcante.com

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons from Heroicons
- Fonts from Google Fonts

---

Made with ❤️ for the LeafTok community
