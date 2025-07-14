# PetX - Your Pet's Best Friend

A modern, interactive website for comprehensive pet care services featuring AI-powered assistance, location mapping, and user authentication.

## 🌟 Features

### 🏠 Interactive Home Page
- **Hero Section**: Eye-catching gradient background with animated elements
- **Service Showcase**: Interactive cards displaying veterinary care, grooming, boarding, and pet supplies
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: CSS animations and transitions for enhanced user experience

### 🔐 Login System
- **Modal-based Login**: Clean, modern login interface
- **Demo Credentials**: 
  - Email: `demo@petx.com`
  - Password: `password`
- **Form Validation**: Client-side validation for better user experience
- **Session Management**: Mock session handling with UI state updates

### 🗺️ Location Map
- **Google Maps Integration**: Embedded interactive map showing PetX location
- **Contact Information**: Complete business details including:
  - Address: 123 Pet Street, Animal City, AC 12345
  - Phone: (555) 123-4567
  - Email: info@petx.com
  - Business hours for all days of the week

### 🤖 AI Chatbot
- **24/7 Availability**: Always-on AI assistant for pet-related questions
- **Smart Responses**: Context-aware responses for common pet care topics:
  - Vaccinations and health
  - Diet and nutrition
  - Exercise and training
  - Grooming and care
  - Emergency situations
  - Appointment booking
- **Interactive Interface**: Real-time chat with typing indicators and smooth animations

### ❓ FAQ Section
- **Expandable Questions**: Click to expand/collapse FAQ items
- **Comprehensive Coverage**: Answers to common questions about:
  - Services offered
  - Appointment booking
  - Pet types supported
  - AI chatbot availability
  - Emergency services
- **Smooth Animations**: CSS transitions for opening/closing answers

## 🛠️ Technical Features

### Frontend Technologies
- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Professional icons throughout the interface
- **Google Fonts**: Poppins font family for modern typography

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Responsive breakpoints for tablet screens
- **Desktop Experience**: Enhanced layout for larger screens
- **Touch-Friendly**: Optimized for touch interactions

### Performance Optimizations
- **Lazy Loading**: Images and content load as needed
- **Smooth Scrolling**: Native smooth scrolling for navigation
- **Intersection Observer**: Efficient scroll-based animations
- **CSS Animations**: Hardware-accelerated animations for smooth performance

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The website will load immediately with all features functional

### File Structure
```
PetX/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── PetX-Manthan.pdf    # Original project PDF
└── PetX-Sketch.pdf     # Project sketch PDF
```

## 🎯 How to Use

### Navigation
- **Desktop**: Use the top navigation bar to access different sections
- **Mobile**: Tap the hamburger menu for mobile navigation
- **Smooth Scrolling**: Click any navigation link for smooth scrolling to sections

### Login System
1. Click the "Login" button in the navigation
2. Enter demo credentials:
   - Email: `demo@petx.com`
   - Password: `password`
3. Click "Login" to access the system
4. The button will change to "Dashboard" after successful login

### AI Chatbot
1. Click "Chat with AI" button on the home page, or
2. Use the floating chatbot in the bottom-right corner
3. Type your pet-related question
4. Press Enter or click the send button
5. Receive instant AI-powered responses

### FAQ Section
1. Navigate to the FAQ section
2. Click on any question to expand the answer
3. Click again to collapse
4. Only one FAQ item can be open at a time

### Location Information
1. Navigate to the "Find Us" section
2. View business hours and contact information
3. Use the embedded Google Maps for directions
4. Contact information is displayed for easy access

## 🎨 Design Features

### Color Scheme
- **Primary Green**: #4CAF50 (PetX brand color)
- **Secondary Blue**: #667eea (Gradient accent)
- **Neutral Grays**: Various shades for text and backgrounds
- **White**: Clean backgrounds and contrast

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Font sizes adjust for different screen sizes

### Animations
- **Fade-in Effects**: Elements appear smoothly as you scroll
- **Hover Effects**: Interactive feedback on buttons and cards
- **Floating Animation**: Hero section card with continuous floating motion
- **Modal Animations**: Smooth slide-in for login modal

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #4CAF50;
    --secondary-color: #667eea;
    --accent-color: #45a049;
}
```

### Adding Content
- **Services**: Add new service cards in the services section
- **FAQ**: Add new FAQ items in the FAQ section
- **Chatbot Responses**: Extend the `generateAIResponse()` function in `script.js`

### Modifying Map
Update the Google Maps embed URL in `index.html`:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

## 📱 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari, Chrome Mobile

## 🤝 Contributing

This is a demonstration project. For production use, consider:
- Adding backend integration for real user authentication
- Implementing a real AI chatbot service
- Adding a database for user data and appointments
- Including real payment processing for services

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify for your own projects.

## 📞 Support

For questions or support:
- Email: info@petx.com
- Phone: (555) 123-4567
- Visit: 123 Pet Street, Animal City, AC 12345

---

**PetX** - Your pet's health and happiness is our mission! 🐾 