// Payment Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize payment page
    initializePaymentPage();
    
    // Setup payment tabs
    setupPaymentTabs();
    
    // Setup form validation
    setupFormValidation();
    
    // Load cart data
    loadCartData();
});

// Initialize payment page
function initializePaymentPage() {
    // Add smooth animations
    addPageAnimations();
    
    // Setup crypto amount calculation
    setupCryptoAmounts();
    
    // Setup card number formatting
    setupCardFormatting();
    
    // Setup enhanced button interactions
    setupButtonInteractions();
    
    // Setup touch-friendly interactions
    setupTouchInteractions();
}

// Setup payment tabs
function setupPaymentTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const paymentContents = document.querySelectorAll('.payment-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            paymentContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Update crypto amounts when crypto tab is selected
            if (targetTab === 'crypto') {
                updateCryptoAmounts();
            }
        });
    });
}

// Load cart data from localStorage
function loadCartData() {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsContainer = document.getElementById('orderItems');
    
    if (cartData.length === 0) {
        orderItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>No items in cart</p>
                <a href="INDEX.HTML" class="continue-shopping-btn">Continue Shopping</a>
            </div>
        `;
        // Hide payment methods if cart is empty
        document.querySelector('.payment-methods').style.display = 'none';
        return;
    }
    
    // Calculate totals
    let subtotal = 0;
    let shipping = 5.99;
    let tax = 0;
    
    orderItemsContainer.innerHTML = '';
    
    cartData.forEach((item, index) => {
        const itemTotal = parseFloat(item.price) * parseInt(item.quantity);
        subtotal += itemTotal;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div class="order-item-info">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMTAiIGZpbGw9IiNmMGYwZjAiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjOTk5Ij4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIi8+Cjwvc3ZnPgo8L3N2Zz4='">
                <div class="order-item-details">
                    <h4>${item.name}</h4>
                    <p>Qty: ${item.quantity} × $${parseFloat(item.price).toFixed(2)}</p>
                </div>
            </div>
            <div class="order-item-price">$${itemTotal.toFixed(2)}</div>
        `;
        orderItemsContainer.appendChild(orderItem);
        
        // Add animation delay for each item
        orderItem.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Calculate tax (8%)
    tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    // Update totals display with animation
    animateValue('subtotal', subtotal, 0.5);
    animateValue('shipping', shipping, 0.7);
    animateValue('tax', tax, 0.9);
    animateValue('total', total, 1.1);
    
    // Store total for crypto calculations
    window.paymentTotal = total;
    
    // Show payment methods
    document.querySelector('.payment-methods').style.display = 'block';
}

// Animate value updates
function animateValue(elementId, targetValue, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        const startValue = 0;
        const duration = 1000;
        const startTime = performance.now();
        
        function updateValue(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = startValue + (targetValue - startValue) * progress;
            
            element.textContent = `$${currentValue.toFixed(2)}`;
            
            if (progress < 1) {
                requestAnimationFrame(updateValue);
            }
        }
        
        requestAnimationFrame(updateValue);
    }, delay * 1000);
}

// Setup crypto amount calculations
function setupCryptoAmounts() {
    // Crypto exchange rates (mock data)
    window.cryptoRates = {
        bitcoin: 45000, // USD per BTC
        ethereum: 3000, // USD per ETH
        usdt: 1 // USD per USDT
    };
}

// Update crypto amounts based on selected currency
function updateCryptoAmounts() {
    const selectedCrypto = document.querySelector('input[name="crypto"]:checked');
    if (!selectedCrypto || !window.paymentTotal) return;
    
    const cryptoType = selectedCrypto.value;
    const rate = window.cryptoRates[cryptoType];
    const amount = window.paymentTotal / rate;
    
    const cryptoAmountElement = document.getElementById('cryptoAmount');
    const cryptoAddressElement = document.querySelector('.crypto-address');
    
    // Update amount display
    cryptoAmountElement.textContent = `${amount.toFixed(8)} ${cryptoType.toUpperCase()}`;
    
    // Update wallet address based on crypto type
    const addresses = {
        bitcoin: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        ethereum: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
        usdt: 'TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE'
    };
    
    cryptoAddressElement.textContent = addresses[cryptoType];
}

// Setup form validation
function setupFormValidation() {
    // UPI ID validation
    const upiInput = document.getElementById('upiId');
    if (upiInput) {
        upiInput.addEventListener('input', function() {
            const upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/;
            if (this.value && !upiPattern.test(this.value)) {
                this.style.borderColor = '#ff6b6b';
            } else {
                this.style.borderColor = '#E6E6FA';
            }
        });
    }
    
    // Card number formatting
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function() {
            let value = this.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            this.value = formattedValue;
        });
    }
    
    // Expiry date formatting
    const expiryInput = document.getElementById('expiryDate');
    if (expiryInput) {
        expiryInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            this.value = value;
        });
    }
    
    // CVV validation
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }
}

// Setup card number formatting
function setupCardFormatting() {
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('keypress', function(e) {
            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab'].includes(e.key)) {
                e.preventDefault();
            }
        });
    }
}

// Add page animations
function addPageAnimations() {
    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    const animatedElements = document.querySelectorAll('.order-summary, .payment-methods, .security-features');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Payment processing functions
function processUPIPayment() {
    const upiId = document.getElementById('upiId').value;
    const selectedUPI = document.querySelector('input[name="upi"]:checked');
    
    if (!upiId || !selectedUPI) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (!validateUPI(upiId)) {
        showNotification('Please enter a valid UPI ID', 'error');
        return;
    }
    
    showPaymentProcessing('UPI');
    simulatePaymentProcess('UPI', selectedUPI.value, upiId);
}

function processCardPayment() {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardName = document.getElementById('cardName').value;
    
    if (!cardNumber || !expiryDate || !cvv || !cardName) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (!validateCardNumber(cardNumber)) {
        showNotification('Please enter a valid card number', 'error');
        return;
    }
    
    if (!validateExpiryDate(expiryDate)) {
        showNotification('Please enter a valid expiry date', 'error');
        return;
    }
    
    showPaymentProcessing('Card');
    simulatePaymentProcess('Card', cardNumber, cardName);
}

function processBankPayment() {
    const transactionId = document.getElementById('transactionId').value;
    const bankName = document.getElementById('bankName').value;
    
    if (!transactionId || !bankName) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    showPaymentProcessing('Bank Transfer');
    simulatePaymentProcess('Bank Transfer', transactionId, bankName);
}

function processCryptoPayment() {
    const cryptoTransactionId = document.getElementById('cryptoTransactionId').value;
    const selectedCrypto = document.querySelector('input[name="crypto"]:checked');
    
    if (!cryptoTransactionId || !selectedCrypto) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (!validateCryptoTransaction(cryptoTransactionId)) {
        showNotification('Please enter a valid transaction hash', 'error');
        return;
    }
    
    showPaymentProcessing('Crypto');
    simulatePaymentProcess('Crypto', selectedCrypto.value, cryptoTransactionId);
}

// Validation functions
function validateUPI(upiId) {
    const upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/;
    return upiPattern.test(upiId);
}

function validateCardNumber(cardNumber) {
    const cleanNumber = cardNumber.replace(/\s/g, '');
    return cleanNumber.length >= 13 && cleanNumber.length <= 19;
}

function validateExpiryDate(expiryDate) {
    const [month, year] = expiryDate.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    const expMonth = parseInt(month);
    const expYear = parseInt(year);
    
    return expYear > currentYear || (expYear === currentYear && expMonth >= currentMonth);
}

function validateCryptoTransaction(transactionId) {
    // Basic validation for crypto transaction hash
    return transactionId.length >= 20 && /^[a-zA-Z0-9]+$/.test(transactionId);
}

// Show payment processing
function showPaymentProcessing(paymentMethod) {
    const payButton = document.querySelector('.pay-btn');
    const originalText = payButton.innerHTML;
    
    // Add processing animation
    payButton.style.transform = 'scale(0.95)';
    payButton.style.background = 'linear-gradient(45deg, var(--deep-purple), var(--blush-pink))';
    payButton.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        Processing ${paymentMethod} Payment...
    `;
    payButton.disabled = true;
    
    // Add ripple effect
    createRippleEffect(payButton);
    
    // Store original button state
    payButton.dataset.originalText = originalText;
    
    // Add pulsing animation
    payButton.style.animation = 'pulse 1s infinite';
}

// Simulate payment process
function simulatePaymentProcess(paymentMethod, methodDetails, userInput) {
    setTimeout(() => {
        // Simulate successful payment
        showPaymentSuccess(paymentMethod, methodDetails, userInput);
    }, 3000);
}

// Show payment success
function showPaymentSuccess(paymentMethod, methodDetails, userInput) {
    // Reset button with success animation
    const payButton = document.querySelector('.pay-btn');
    payButton.style.animation = 'none';
    payButton.style.transform = 'scale(1)';
    payButton.style.background = 'var(--deep-purple)';
    payButton.innerHTML = `
        <i class="fas fa-check-circle"></i>
        Payment Successful!
    `;
    payButton.disabled = false;
    
    // Add success animation
    payButton.style.animation = 'successPulse 0.6s ease-out';
    
    // Show success message
    showNotification(`Payment successful! ${paymentMethod} payment processed.`, 'success');
    
    // Clear cart
    localStorage.removeItem('cart');
    
    // Redirect to success page after 2 seconds
    setTimeout(() => {
        window.location.href = 'payment-success.html';
    }, 2000);
}

// Create ripple effect for buttons
function createRippleEffect(button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = rect.width / 2 - size / 2;
    const y = rect.height / 2 - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
`;
document.head.appendChild(style);

// Crypto selection event listeners
document.addEventListener('change', function(e) {
    if (e.target.name === 'crypto') {
        updateCryptoAmounts();
    }
});

// Setup enhanced button interactions
function setupButtonInteractions() {
    // Add click effects to all buttons
    const allButtons = document.querySelectorAll('button, .tab-btn, .pay-btn, .upi-option label, .crypto-option label');
    
    allButtons.forEach(button => {
        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
        
        // Add click effects
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        // Add ripple effect on click
        button.addEventListener('click', function(e) {
            createRippleEffect(this);
        });
    });
    
    // Enhanced pay button interactions
    const payButtons = document.querySelectorAll('.pay-btn');
    payButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add loading state immediately
            this.style.transform = 'scale(0.95)';
            this.style.background = 'linear-gradient(45deg, var(--deep-purple), var(--blush-pink))';
            
            // Add success state after processing
            setTimeout(() => {
                this.style.background = 'var(--deep-purple)';
                this.style.transform = 'scale(1)';
            }, 3000);
        });
    });
}

// Setup touch-friendly interactions
function setupTouchInteractions() {
    // Add touch feedback for mobile devices
    const touchElements = document.querySelectorAll('.tab-btn, .upi-option label, .crypto-option label, .pay-btn');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
            this.style.opacity = '0.8';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
        });
    });
    
    // Improve form input interactions
    const formInputs = document.querySelectorAll('input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
            this.parentElement.style.boxShadow = '';
        });
    });
}

// UPI selection event listeners
document.addEventListener('change', function(e) {
    if (e.target.name === 'upi') {
        const upiIdInput = document.getElementById('upiId');
        const selectedUPI = e.target.value;
        
        // Auto-fill UPI ID based on selection
        if (selectedUPI === 'phonepe') {
            upiIdInput.placeholder = 'Enter your PhonePe UPI ID';
        } else if (selectedUPI === 'gpay') {
            upiIdInput.placeholder = 'Enter your Google Pay UPI ID';
        } else if (selectedUPI === 'paytm') {
            upiIdInput.placeholder = 'Enter your Paytm UPI ID';
        }
    }
});
