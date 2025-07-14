// Check login state on page load
document.addEventListener('DOMContentLoaded', function() {
    checkLoginState();
});

// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Login Modal functionality
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeLoginModal();
    }
});

// Login form handling
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Mock login - in a real app, this would connect to a backend
    if (email === 'demo@petx.com' && password === 'password') {
        alert('Login successful! Welcome to PetX.');
        closeLoginModal();
        // Persist login state
        localStorage.setItem('petxLoggedIn', 'true');
        updateLoginState(true);
    } else {
        alert('Invalid credentials. Try demo@petx.com / password');
    }
}

function checkLoginState() {
    const isLoggedIn = localStorage.getItem('petxLoggedIn') === 'true';
    updateLoginState(isLoggedIn);
}

function updateLoginState(isLoggedIn) {
    const loginBtn = document.getElementById('loginLogoutBtn');
    const dashboardNavItem = document.getElementById('dashboardNavItem');
    if (isLoggedIn) {
        loginBtn.textContent = 'Logout';
        loginBtn.onclick = handleLogout;
        if (dashboardNavItem) dashboardNavItem.style.display = '';
    } else {
        loginBtn.textContent = 'Login';
        loginBtn.onclick = openLoginModal;
        if (dashboardNavItem) dashboardNavItem.style.display = 'none';
    }
}

function handleLogout() {
    localStorage.removeItem('petxLoggedIn');
    updateLoginState(false);
    alert('You have been logged out.');
}

function showRegister() {
    alert('Registration feature coming soon! For now, use demo@petx.com / password to login.');
}

// FAQ functionality
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Close all other FAQ items
        document.querySelectorAll('.faq-answer').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.faq-question i').forEach(item => {
            item.style.transform = 'rotate(0deg)';
        });
        
        // Open current item
        answer.classList.add('active');
        icon.style.transform = 'rotate(180deg)';
    }
}

// Chatbot functionality
let chatbotOpen = false;

function toggleChatbot() {
    const chatbotBody = document.getElementById('chatbotBody');
    
    if (chatbotOpen) {
        chatbotBody.style.display = 'none';
        chatbotOpen = false;
    } else {
        chatbotBody.style.display = 'flex';
        chatbotOpen = true;
    }
}

function closeChatbot() {
    const chatbot = document.getElementById('chatbot');
    const chatbotBody = document.getElementById('chatbotBody');
    
    chatbot.style.display = 'none';
    chatbotBody.style.display = 'none';
    chatbotOpen = false;
}

function openChatbot() {
    const chatbot = document.getElementById('chatbot');
    const chatbotBody = document.getElementById('chatbotBody');
    
    chatbot.style.display = 'block';
    chatbotBody.style.display = 'flex';
    chatbotOpen = true;
}

// Chat functionality
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            const response = generateAIResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const icon = document.createElement('i');
    icon.className = sender === 'bot' ? 'fas fa-robot' : 'fas fa-user';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `<p>${text}</p>`;
    
    messageDiv.appendChild(icon);
    messageDiv.appendChild(content);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// AI Response Generator
function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Pet health responses
    if (message.includes('vaccine') || message.includes('vaccination')) {
        return "Vaccinations are crucial for your pet's health! Puppies and kittens need a series of vaccines starting at 6-8 weeks. Adult pets need annual boosters. Contact us to schedule an appointment!";
    }
    
    if (message.includes('food') || message.includes('diet')) {
        return "A balanced diet is essential for your pet's health. Choose high-quality pet food appropriate for their age, size, and health needs. Avoid human food, especially chocolate, grapes, and onions which are toxic to pets.";
    }
    
    if (message.includes('exercise') || message.includes('walk')) {
        return "Regular exercise is important for your pet's physical and mental health. Dogs typically need 30-60 minutes of exercise daily, while cats benefit from 10-15 minutes of play sessions. Adjust based on your pet's age and breed.";
    }
    
    if (message.includes('grooming') || message.includes('bath')) {
        return "Grooming needs vary by breed. Long-haired pets need daily brushing, while short-haired pets may only need weekly brushing. Bathing frequency depends on your pet's lifestyle - typically every 4-6 weeks for dogs.";
    }
    
    if (message.includes('emergency') || message.includes('sick')) {
        return "If your pet is showing signs of illness like vomiting, diarrhea, lethargy, or loss of appetite, contact us immediately. For after-hours emergencies, we have partnerships with 24/7 emergency clinics.";
    }
    
    if (message.includes('behavior') || message.includes('training')) {
        return "Positive reinforcement training is the most effective method. Be patient and consistent. For behavioral issues, consider consulting with a professional trainer or behaviorist. We can recommend local experts!";
    }
    
    if (message.includes('appointment') || message.includes('book')) {
        return "You can book appointments through our website, by calling (555) 123-4567, or by visiting our location at 123 Pet Street, Animal City. We offer flexible scheduling to accommodate your needs.";
    }
    
    if (message.includes('hello') || message.includes('hi')) {
        return "Hello! I'm your PetX AI assistant. I'm here to help with any pet-related questions you might have. Feel free to ask about pet care, health, behavior, or our services!";
    }
    
    // Default response
    const defaultResponses = [
        "That's a great question! I'd be happy to help you with that. Could you provide more details about your pet's specific situation?",
        "I understand your concern. For the most accurate advice, I'd recommend scheduling a consultation with our veterinary team.",
        "That's an interesting topic! While I can provide general guidance, it's always best to consult with a veterinarian for specific medical advice.",
        "I'm here to help! If you need more detailed information, feel free to ask or schedule an appointment with our team.",
        "Great question! For personalized advice about your pet, I'd recommend speaking with one of our veterinary professionals."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Service card animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    // Page loaded successfully
    console.log('PetX website loaded successfully!');
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add some interactive elements
    addInteractiveElements();
});

function addInteractiveElements() {
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Add some pet-related tips that cycle through
const petTips = [
    "💡 Tip: Regular dental care can add 2-4 years to your pet's life!",
    "💡 Tip: Keep your pet's vaccinations up to date for optimal health.",
    "💡 Tip: Regular exercise helps prevent obesity and behavioral issues.",
    "💡 Tip: Annual check-ups can catch health issues early.",
    "💡 Tip: Quality nutrition is the foundation of good pet health."
];

let currentTipIndex = 0;

function cyclePetTips() {
    // This could be used to show rotating tips in a designated area
    console.log(petTips[currentTipIndex]);
    currentTipIndex = (currentTipIndex + 1) % petTips.length;
}

// Initialize tip cycling
setInterval(cyclePetTips, 10000); // Change tip every 10 seconds

// Add smooth reveal animations for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-revealed');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
};

// Call reveal sections when DOM is loaded
document.addEventListener('DOMContentLoaded', revealSections); 

// Payment history and user config helpers
function getPaymentHistory() {
    return JSON.parse(localStorage.getItem('petxPaymentHistory') || '[]');
}
function addPaymentHistory(item) {
    const history = getPaymentHistory();
    history.unshift(item); // newest first
    localStorage.setItem('petxPaymentHistory', JSON.stringify(history));
}
function getUserConfig() {
    return JSON.parse(localStorage.getItem('petxUserConfig') || '{"email":"demo@petx.com","contact":"555-123-4567"}');
}
function setUserConfig(config) {
    localStorage.setItem('petxUserConfig', JSON.stringify(config));
}

// Render dashboard content dynamically
function renderDashboard() {
    const config = getUserConfig();
    const history = getPaymentHistory();
    document.getElementById('userEmail').textContent = config.email;
    document.querySelector('.dashboard-config-list').innerHTML = `
        <li><span><strong>Email:</strong></span> <span>${config.email}</span></li>
        <li><span><strong>Preferred Contact:</strong></span> <span>${config.contact}</span></li>
    `;
    let historyHtml = '';
    if (history.length === 0) {
        historyHtml = '<li>No payments yet.</li>';
    } else {
        historyHtml = history.map(item => `<li><span>${item.description}:</span> <span>Paid, ${item.date} IST</span></li>`).join('');
    }
    document.querySelector('.dashboard-timings-list').innerHTML = historyHtml;
}

// Show dashboard and render content
function showDashboardSection() {
    document.getElementById('dashboard-section').style.display = '';
    [
        'home', 'services', 'nearby-services', 'lost-found', 'faq', 'payment', 'map', 'map-section', 'about'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    renderDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideDashboardSection() {
    document.getElementById('dashboard-section').style.display = 'none';
    // Show all other main sections
    [
        'home', 'services', 'nearby-services', 'lost-found', 'faq', 'payment', 'map-section', 'about'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = '';
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
} 