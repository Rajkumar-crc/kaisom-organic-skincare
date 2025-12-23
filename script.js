// DOM Elements
const productGrid = document.querySelector('.product-grid');
const categoryGrid = document.querySelector('.category-grid');
const cartCount = document.querySelector('.cart-count');
const cartPreview = document.getElementById('cart-preview');
const cartItems = document.getElementById('cart-items');
const mainCartItems = document.getElementById('main-cart-items');
const cartTotal = document.getElementById('cart-total');
const searchInput = document.querySelector('.search-bar input');

// Navigation Elements
const mobileMenuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('nav a');

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Navigation highlighting
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        navLinksContainer.classList.remove('active'); // Close mobile menu after clicking
    });
});

// Sample product data
const products = [
    // Fashion
    {
        id: 1,
        name: "Floral Summer Dress",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Fashion",
        description: "Light and airy floral dress perfect for summer days"
    },
    {
        id: 2,
        name: "Denim Jacket",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Fashion",
        description: "Classic denim jacket with modern fit"
    },
    {
        id: 3,
        name: "Pastel Sweater",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Fashion",
        description: "Soft pastel sweater for cozy days"
    },

    // Beauty
    {
        id: 4,
        name: "Glitter Lip Gloss Set",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Beauty",
        description: "Set of 3 glitter lip glosses in cute pastel tubes"
    },
    {
        id: 5,
        name: "Rose Quartz Facial Roller",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Beauty",
        description: "Natural rose quartz facial roller for skincare routine"
    },
    {
        id: 6,
        name: "Sheet Mask Collection",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Beauty",
        description: "Set of 10 hydrating sheet masks in pastel packaging"
    },
    {
        id: 13,
        name: "Tinted Lip Gloss Trio",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Beauty",
        description: "Set of 3 tinted lip glosses in cute pastel tubes"
    },
    {
        id: 14,
        name: "Jade Facial Roller",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Beauty",
        description: "Natural jade facial roller for cooling massage"
    },
    {
        id: 15,
        name: "Pastel Sheet Mask Set",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Beauty",
        description: "Set of 5 sheet masks with cute pastel packaging"
    },
    {
        id: 16,
        name: "Lavender Scented Candle",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Beauty",
        description: "Hand-poured lavender scented candle in glass jar"
    },
    {
        id: 17,
        name: "Vanilla Dream Candle",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Beauty",
        description: "Sweet vanilla scented candle in pastel pink jar"
    },
    {
        id: 18,
        name: "Mini Perfume Set",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1594035910387-fea477ee61e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Beauty",
        description: "Set of 3 travel-size perfumes in pastel bottles"
    },
    {
        id: 19,
        name: "Floral Perfume Collection",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1594035910387-fea477ee61e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Beauty",
        description: "Set of 4 floral perfumes in cute mini bottles"
    },

    // Accessories
    {
        id: 7,
        name: "Pearl Hair Clips Set",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1596703263926-eb0762db7c1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Accessories",
        description: "Set of 5 pearl-studded hair clips"
    },
    {
        id: 8,
        name: "Cloud Shaped Mini Bag",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Accessories",
        description: "Adorable cloud-shaped mini bag in pastel blue"
    },
    {
        id: 9,
        name: "Moon & Stars Necklace",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Accessories",
        description: "Dainty gold-plated moon and stars necklace"
    },

    // Stationery
    {
        id: 10,
        name: "Watercolor Notebook Set",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Stationery",
        description: "Set of 3 notebooks with soft watercolor covers"
    },
    {
        id: 11,
        name: "Pastel Gel Pen Set",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1585338101529-45fe5c7b1a14?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Stationery",
        description: "Set of 12 pastel gel pens"
    },
    {
        id: 12,
        name: "Aesthetic Stickers Set",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Stationery",
        description: "Set of 50 cute stickers with various themes"
    }
];

// Sample categories
const categories = [
    { id: 1, name: "Fashion", icon: "fas fa-tshirt" },
    { id: 2, name: "Beauty", icon: "fas fa-spa" },
    { id: 3, name: "Accessories", icon: "fas fa-glasses" },
    { id: 4, name: "Stationery", icon: "fas fa-pen" }
];

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display products
function displayProducts(productsToShow = products) {
    productGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <p class="description">${product.description}</p>
                <button onclick="addToCart(${product.id})" class="add-to-cart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Display categories
function displayCategories() {
    categoryGrid.innerHTML = '';
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <i class="${category.icon}"></i>
            <h3>${category.name}</h3>
        `;
        categoryCard.addEventListener('click', () => filterByCategory(category.name));
        categoryGrid.appendChild(categoryCard);
    });
}

// Filter products by category
function filterByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Add to cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        showNotification('Added to cart!');
    }
}

// Update all cart displays
function updateCartDisplay() {
    updateCartCount();
    updateCartPreview();
    updateMainCart();
    updateCartSummary();
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Update cart preview
function updateCartPreview() {
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
            </div>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    
    if (cartTotal) {
        cartTotal.textContent = total.toFixed(2);
    }
}

// Update main cart
function updateMainCart() {
    if (!mainCartItems) return;

    if (cart.length === 0) {
        mainCartItems.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Continue shopping to add items to your cart</p>
            </div>
        `;
        return;
    }

    mainCartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, false)" class="decrement">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, true)" class="increment">+</button>
                </div>
                <span class="remove-item" onclick="removeItem(${item.id})">×</span>
            </div>
        </div>
    `).join('');
}

// Update cart summary
function updateCartSummary() {
    const summaryDetails = document.querySelector('.summary-details');
    if (!summaryDetails) return;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 0 : 0; // Free shipping
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Update quantity
function updateQuantity(itemId, isIncrement) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        if (isIncrement) {
            item.quantity += 1;
        } else {
            item.quantity = Math.max(0, item.quantity - 1);
            if (item.quantity === 0) {
                removeItem(itemId);
                return;
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

// Remove item
function removeItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification('Item removed from cart');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Toggle cart preview
const cartIcon = document.getElementById('cart-icon');
if (cartIcon) {
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        cartPreview.classList.toggle('active');
    });
}

// Close cart preview when clicking outside
document.addEventListener('click', (e) => {
    if (!cartIcon.contains(e.target) && !cartPreview.contains(e.target)) {
        cartPreview.classList.remove('active');
    }
});

// Checkout function
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    
    createSparkleEffect(document.querySelector('.checkout-button'));
    
    // Save cart data to localStorage for payment page
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show notification and redirect to payment page
    showNotification('Proceeding to checkout...');
    
    // Redirect to payment page after a short delay
    setTimeout(() => {
        window.location.href = 'payment.html';
    }, 1000);
}

// Sparkle animation
function createSparkleEffect(element) {
    const sparkleContainer = document.querySelector('.sparkle-container');
    if (!sparkleContainer) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const distance = Math.random() * 50 + 50;
        const startX = centerX + Math.cos(angle) * distance;
        const startY = centerY + Math.sin(angle) * distance;
        
        sparkle.style.left = `${startX}px`;
        sparkle.style.top = `${startY}px`;
        
        sparkleContainer.appendChild(sparkle);
    }

    setTimeout(() => {
        while (sparkleContainer.firstChild) {
            sparkleContainer.removeChild(sparkleContainer.firstChild);
        }
    }, 2000);
}

// Smooth scrolling
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    displayCategories();
    updateCartDisplay();
});

// Ingredient Card Interactions
const ingredientCards = document.querySelectorAll('.ingredient-card');

ingredientCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.ingredient-details').style.opacity = '1';
        card.querySelector('.ingredient-details').style.transform = 'translateY(0)';
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.ingredient-details').style.opacity = '0';
        card.querySelector('.ingredient-details').style.transform = 'translateY(100%)';
    });

    // Add click handler for "View Products" button
    const viewProductsBtn = card.querySelector('.view-products');
    if (viewProductsBtn) {
        viewProductsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const ingredientName = card.querySelector('.ingredient-front h3').textContent;
            filterProductsByIngredient(ingredientName);
        });
    }
});

function filterProductsByIngredient(ingredientName) {
    // Scroll to products section
    document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
    
    // Clear current filters
    document.querySelector('.search-bar input').value = '';
    
    // Filter products
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const productDescription = product.querySelector('p').textContent.toLowerCase();
        const ingredient = ingredientName.toLowerCase();
        
        if (productName.includes(ingredient) || productDescription.includes(ingredient)) {
            product.style.display = 'block';
            product.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
            product.style.display = 'none';
        }
    });

    // Show notification
    showNotification(`Showing products with ${ingredientName}`);
}

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Side Panel Toggle
const toggleButton = document.querySelector('.toggle-button');
const sidePanel = document.querySelector('.side-panel');
const closeButton = document.querySelector('.close-panel');
const overlay = document.querySelector('.overlay');

toggleButton.addEventListener('click', () => {
    sidePanel.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
    sidePanel.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
    sidePanel.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Step link functionality
const stepLinks = document.querySelectorAll('.step-link');
stepLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.getAttribute('data-filter');
        // Close the side panel
        sidePanel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        // Scroll to products section and filter
        const productsSection = document.querySelector('.products-section');
        productsSection.scrollIntoView({ behavior: 'smooth' });
        // Trigger filter (you'll need to implement the filter functionality)
        // filterProducts(filter);
    });
});

// Sample product images data (replace with your actual data)
const productImages = {
    'Floral Summer Dress': [
        'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ],
    // Add more products as needed
};

// Sample delivery dates (replace with your actual logic)
function getDeliveryDates() {
    const today = new Date();
    const standardDelivery = new Date(today);
    standardDelivery.setDate(today.getDate() + 5);
    const expressDelivery = new Date(today);
    expressDelivery.setDate(today.getDate() + 2);
    
    return {
        standard: {
            start: formatDate(new Date(today.setDate(today.getDate() + 3))),
            end: formatDate(standardDelivery)
        },
        express: {
            start: formatDate(new Date(today.setDate(today.getDate() + 1))),
            end: formatDate(expressDelivery)
        }
    };
}

function formatDate(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 > 3) ? 0 : (day % 100 - day % 10 != 10) * day % 10];
    return `${month} ${day}${suffix}`;
}

// Enhanced Product Details Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    const popup = document.querySelector('.product-details-popup');
    const closePopup = document.querySelector('.close-popup');
    const mainImage = document.querySelector('.main-image img');
    const thumbnailContainer = document.querySelector('.thumbnail-scroll');
    const thumbnailImages = document.querySelector('.thumbnail-images');
    const prevThumbnail = document.querySelector('.prev-thumbnail');
    const nextThumbnail = document.querySelector('.next-thumbnail');
    const quantityInput = document.querySelector('.quantity-input');
    const decreaseBtn = document.querySelector('.quantity-btn.minus');
    const increaseBtn = document.querySelector('.quantity-btn.plus');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const imageZoom = document.querySelector('.image-zoom');
    const shippingOptions = document.querySelectorAll('input[name="shipping"]');

    // Open popup when clicking on a product card
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent opening popup if clicking on the add to cart button
            if (e.target.closest('.add-to-cart')) return;

            const productName = this.querySelector('h3').textContent;
            const productPrice = this.querySelector('.price').textContent;
            const productImage = this.querySelector('img').src;
            
            // Show loading spinner
            const spinner = document.createElement('div');
            spinner.className = 'loading-spinner';
            popup.appendChild(spinner);
            
            // Update popup content
            document.querySelector('.product-info-details h2').textContent = productName;
            document.querySelector('.product-info-details .price').textContent = productPrice;
            
            // Load main image with lazy loading
            mainImage.src = productImage;
            mainImage.onload = () => {
                spinner.remove();
            };
            
            // Update thumbnails
            updateThumbnails(productName);
            
            // Update delivery dates
            updateDeliveryDates();
            
            // Add animation classes to elements
            const animatedElements = popup.querySelectorAll('.product-images, .product-info-details > *');
            animatedElements.forEach((el, index) => {
                el.style.setProperty('--index', index);
            });
            
            // Show popup with animation
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Update delivery dates based on shipping option
    function updateDeliveryDates() {
        const dates = getDeliveryDates();
        const deliverySpan = document.getElementById('expected-delivery');
        const selectedShipping = document.querySelector('input[name="shipping"]:checked').id;
        
        if (selectedShipping === 'express-shipping') {
            deliverySpan.textContent = `${dates.express.start} - ${dates.express.end}`;
        } else {
            deliverySpan.textContent = `${dates.standard.start} - ${dates.standard.end}`;
        }
    }

    // Update delivery dates when shipping option changes
    shippingOptions.forEach(option => {
        option.addEventListener('change', updateDeliveryDates);
    });

    // Update thumbnails with lazy loading
    function updateThumbnails(productName) {
        thumbnailImages.innerHTML = '';
        const images = productImages[productName] || [];
        
        images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.className = 'thumbnail';
            thumbnail.loading = 'lazy';
            
            if (index === 0) {
                thumbnail.classList.add('active');
            }
            
            thumbnail.addEventListener('click', () => {
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
                mainImage.src = image;
            });
            
            thumbnailImages.appendChild(thumbnail);
        });

        // Show/hide navigation buttons based on thumbnail count
        const showNavigation = images.length > 4;
        prevThumbnail.style.display = showNavigation ? 'flex' : 'none';
        nextThumbnail.style.display = showNavigation ? 'flex' : 'none';
    }

    // Thumbnail navigation
    let scrollPosition = 0;
    const scrollAmount = 100;

    prevThumbnail.addEventListener('click', () => {
        scrollPosition = Math.max(0, scrollPosition - scrollAmount);
        thumbnailContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });

    nextThumbnail.addEventListener('click', () => {
        const maxScroll = thumbnailImages.scrollWidth - thumbnailContainer.clientWidth;
        scrollPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
        thumbnailContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });

    // Image zoom functionality with smooth transition
    let isZoomed = false;
    imageZoom.addEventListener('click', () => {
        isZoomed = !isZoomed;
        mainImage.style.transform = isZoomed ? 'scale(1.5)' : 'scale(1)';
        imageZoom.innerHTML = isZoomed ? 
            '<i class="fas fa-search-minus"></i>' : 
            '<i class="fas fa-search-plus"></i>';
    });

    // Pan zoomed image
    let isDragging = false;
    let startX, startY, initialX, initialY;

    mainImage.addEventListener('mousedown', (e) => {
        if (!isZoomed) return;
        isDragging = true;
        startX = e.clientX - initialX;
        startY = e.clientY - initialY;
        mainImage.style.cursor = 'grabbing';
    });

    mainImage.addEventListener('mousemove', (e) => {
        if (!isDragging || !isZoomed) return;
        e.preventDefault();
        const x = e.clientX - startX;
        const y = e.clientY - startY;
        mainImage.style.transform = `scale(1.5) translate(${x}px, ${y}px)`;
    });

    mainImage.addEventListener('mouseup', () => {
        isDragging = false;
        mainImage.style.cursor = isZoomed ? 'grab' : 'default';
    });

    mainImage.addEventListener('mouseleave', () => {
        isDragging = false;
        mainImage.style.cursor = 'default';
    });

    // Close popup with smooth animation
    function closePopupWithAnimation() {
        popup.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset image zoom
        isZoomed = false;
        mainImage.style.transform = 'scale(1)';
        imageZoom.innerHTML = '<i class="fas fa-search-plus"></i>';
        
        // Reset quantity
        quantityInput.value = '1';
        
        // Reset shipping option
        document.getElementById('standard-shipping').checked = true;
        updateDeliveryDates();
    }

    closePopup.addEventListener('click', closePopupWithAnimation);
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopupWithAnimation();
        }
    });

    // Quantity controls with smooth animation
    decreaseBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
            quantityInput.style.transform = 'scale(0.95)';
            setTimeout(() => {
                quantityInput.style.transform = 'scale(1)';
            }, 150);
        }
    });

    increaseBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
        quantityInput.style.transform = 'scale(1.05)';
        setTimeout(() => {
            quantityInput.style.transform = 'scale(1)';
        }, 150);
    });

    // Add to cart with enhanced animation
    addToCartBtn.addEventListener('click', () => {
        const productName = document.querySelector('.product-info-details h2').textContent;
        const quantity = parseInt(quantityInput.value);
        
        // Add to cart
        addToCart(productName, quantity);
        
        // Show animation
        addToCartBtn.classList.add('added');
        setTimeout(() => {
            addToCartBtn.classList.remove('added');
        }, 1000);
        
        // Show success message
        showNotification('Added to cart!');
    });

    // Prevent quantity input from accepting non-numeric values
    quantityInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value === '') this.value = '1';
    });

    // Add to cart function
    function addToCart(productName, quantity) {
        const product = products.find(p => p.name === productName);
        if (product) {
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ ...product, quantity });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }
    }
}); 
