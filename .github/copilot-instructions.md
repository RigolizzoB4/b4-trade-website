# B4 Trade Website - GitHub Copilot Instructions

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Quick Start (Fresh Clone)
- `cd /path/to/b4-trade-website` - Navigate to project root
- `python3 -m http.server 8000` - Start development server (takes ~2 seconds)
- Open http://localhost:8000 in browser to view the website
- **NEVER CANCEL**: All operations complete within seconds. No long-running builds.

### Repository Structure  
The B4 Trade website is a static HTML/CSS/JavaScript website with no build system. All files are ready to serve directly.

**Main Pages:**
- `index.html` - Main homepage (1,122 lines)
- `curiosidades.html` - Trade curiosities page (843 lines)  
- `quem-somos.html` - About us page (835 lines)
- `index-gradient.html` - Homepage with gradient background (1,014 lines)
- `index-geometric.html` - Homepage with geometric background (987 lines)
- `index-waves.html` - Homepage with wave background (1,017 lines)

**Core Assets:**
- `style.css` - Main stylesheet with typography and custom styles
- `translations.js` - Multi-language support (Portuguese/English)
- `logo.png` - Company logo
- Multiple background images and assets (52 total files)

### Development Workflow
- **Start server**: `python3 -m http.server 8000` (instant startup)
- **View site**: Navigate to http://localhost:8000
- **Stop server**: `pkill -f "python3 -m http.server"` or Ctrl+C
- **Validate HTML**: Use `python3 -c "import html5lib; html5lib.parse(open('filename.html').read())"`

### Build and Deploy Process
**No build process required** - this is a static website. To deploy:
1. Copy all files to web server directory
2. Ensure web server can serve static HTML/CSS/JS files
3. Set `index.html` as the default document

Build time: **~0 seconds** (just file copying)

## Validation

### Manual Testing Scenarios
Always run these validation steps after making changes:

1. **Navigation Test**: 
   - Start server with `python3 -m http.server 8000`
   - Visit http://localhost:8000 - homepage should display B4 Trade branding
   - Click navigation links to test all pages load:
     - Home → Quem Somos → Serviços → Contato → Curiosidades
   - Verify all pages display content without errors

2. **Multi-language Functionality**:
   - Look for language selector (flag icons) in navigation
   - Test switching between Portuguese (default) and English
   - Verify translations.js loads without errors

3. **Contact Integration**:
   - Verify WhatsApp links work (format: `https://wa.me/5519999999999`)
   - Check email links point to `contato@b4.com.br`
   - Test phone number links (`tel:+551937514300`)

4. **Creative Versions Test**:
   - Access http://localhost:8000/index-gradient.html
   - Access http://localhost:8000/index-geometric.html  
   - Access http://localhost:8000/index-waves.html
   - Verify each version displays different background styles

5. **Asset Loading**:
   - Check CSS loads: `curl -I http://localhost:8000/style.css` should return 200 OK
   - Check JS loads: `curl -I http://localhost:8000/translations.js` should return 200 OK
   - Check images load: `curl -I http://localhost:8000/logo.png` should return 200 OK

### HTML Validation
Always validate HTML after changes:
```bash
python3 -c "
import html5lib
for file in ['index.html', 'curiosidades.html', 'quem-somos.html']:
    html5lib.parse(open(file).read())
    print(f'{file}: Valid')
"
```

### CSS and JavaScript Validation
- **CSS**: Use browser developer tools to check for CSS errors
- **JavaScript**: Check browser console for JavaScript errors
- **Links**: Verify external CDN resources load (Bootstrap 5.3.0, Font Awesome 6.0.0)

## Common Tasks

### Adding New Pages
1. Create new `.html` file following existing structure
2. Include Bootstrap CSS and Font Awesome icons from CDN
3. Add navigation links in header section of all pages
4. Test page loads at http://localhost:8000/newpage.html
5. Add translations to `translations.js` if multi-language support needed

### Modifying Styles
1. Edit `style.css` for global styles
2. Use CSS custom properties (variables) defined in `:root`
3. Maintain responsive design using Bootstrap classes
4. Test changes across all 6 HTML versions

### Updating Contact Information
- WhatsApp: Update `wa.me/` links throughout HTML files
- Email: Update `contato@b4.com.br` references
- Phone: Update `tel:+551937514300` links
- Address: Check embedded Google Maps iframe

### Working with Images
- Add new images to root directory
- Optimize file sizes for web (recommended < 1MB each)
- Update `alt` attributes for accessibility
- Test images load correctly via HTTP server

## Technology Stack

- **HTML5** with semantic markup
- **CSS3** with custom properties and modern features
- **Bootstrap 5.3.0** for responsive layout
- **Font Awesome 6.0.0** for icons
- **Google Fonts** (Inter, Poppins) for typography
- **Vanilla JavaScript** for translations and interactivity

## Troubleshooting

### Common Issues

**"Port already in use" when starting server:**
```bash
# Kill existing server
pkill -f "python3 -m http.server"
# Start on different port
python3 -m http.server 8001
```

**CSS/JS not loading:**
- Check file paths are relative to root directory
- Verify files exist: `ls -la style.css translations.js`
- Check browser developer tools Network tab

**Images not displaying:**
- Verify image files exist in root directory
- Check file extensions match HTML references (.png, .jpg)
- Ensure proper case sensitivity

**Translation not working:**
- Check `translations.js` loads without JavaScript errors
- Verify language selector elements exist in HTML
- Test in browser console: `typeof completeTranslations`

### Browser Compatibility
- **Supported**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Fallbacks**: CSS custom properties have fallback values

## Performance Notes

- **Startup time**: Instant (static files only)
- **Page load time**: < 1 second on modern browsers
- **File copying**: ~0 seconds for all 52 files
- **No compilation**: Direct file serving

## External Dependencies

All external resources loaded via CDN (no local installation needed):
- Bootstrap CSS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`
- Font Awesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`
- Bootstrap JS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js`

**CRITICAL**: Always test with internet connection to load external resources, or check browser console if resources fail to load from CDN.

---

**Always validate your changes by running the complete manual testing scenario above before submitting any modifications.**