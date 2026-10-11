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

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.bindPurchaseActions();
        });
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
    }
};

StoreFrontSystem.init();
