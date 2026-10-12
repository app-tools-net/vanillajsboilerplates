/**
 * storefront/js/store.js
 * Main checkout routing core for your public storefront.
 */

const StoreFrontSystem = {
    // BUSINESS SETUP: Drop your new Lemon Squeezy or Stripe Checkout URLs here.
    // Ensure you replace these placeholders with your actual published checkout paths.
    checkoutUrls: {
        saasLauncher: "https://lemonsqueezy.com",
        portfolioHub: "https://lemonsqueezy.com",
        fullStack: "https://lemonsqueezy.com",
        completeBundle: "https://lemonsqueezy.com"
    },

    // Demo URLs for live boilerplate previews
    demoUrls: {
        saasLauncher: "https://app-tools-net.github.io/demo-saas-launcher/",
        portfolioHub: "https://app-tools-net.github.io/demo-portfolio-blog/",
        fullStack: "https://app-tools-net.github.io/demo-fullstack-auth-key/",
        completeBundle: "https://github.com/app-tools-net/vanillajsboilerplates"
    },

    init() {
        this.bindPurchaseActions();
        this.bindDemoActions();
    },

    bindPurchaseActions() {
        const purchaseButtons = document.querySelectorAll('[data-boilerplate]');
        
        purchaseButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedKey = button.getAttribute('data-boilerplate');
                this.routeToPaymentGateway(selectedKey, button);
            });
        });
    },

    bindDemoActions() {
        const demoButtons = document.querySelectorAll('[data-demo]');
        
        demoButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedKey = button.getAttribute('data-demo');
                this.routeToDemoSite(selectedKey, button);
            });
        });
    },

    routeToPaymentGateway(boilerplateKey, buttonElement) {
        const targetPaymentUrl = this.checkoutUrls[boilerplateKey];
        
        if (targetPaymentUrl) {
            // Apply instant user interaction feedback indicators
            buttonElement.innerText = "Opening Secure Checkout...";
            buttonElement.disabled = true;
            buttonElement.style.opacity = "0.6";
            
            // Instantly forward the developer off to your secure payment workspace
            window.location.href = targetPaymentUrl;
        } else {
            console.error(`Checkout asset routing key "${boilerplateKey}" was not found.`);
        }
    },

    routeToDemoSite(boilerplateKey, buttonElement) {
        const targetDemoUrl = this.demoUrls[boilerplateKey];
        
        if (targetDemoUrl) {
            // Apply instant user interaction feedback indicators
            buttonElement.innerText = "Opening Demo...";
            buttonElement.disabled = true;
            buttonElement.style.opacity = "0.6";
            
            // Open the demo in a new tab
            window.open(targetDemoUrl, '_blank');
            
            // Reset button state after a brief delay
            setTimeout(() => {
                buttonElement.innerText = "View Demo";
                buttonElement.disabled = false;
                buttonElement.style.opacity = "1";
            }, 500);
        } else {
            console.error(`Demo routing key "${boilerplateKey}" was not found.`);
        }
    }
};

// Initialize immediately when the module loads
StoreFrontSystem.init();
