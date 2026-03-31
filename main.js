// Cart State
let cartQuantity = 2; // Mock cart quantity

// Update Cart Count
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartQuantity;
    }
}

// Global Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Mobile Navigation logic (To be expanded if we add a hamburger menu)
    // Add to wishlist logic (Mock)
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const icon = btn.querySelector('i');
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                icon.style.color = 'var(--cta-coral)';
                alert('Added to wishlist!');
            } else {
                icon.classList.add('fa-regular');
                icon.classList.remove('fa-solid');
                icon.style.color = '';
            }
        });
    });

    // Add to cart logic (Mock)
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(!window.location.href.includes('product.html')) {
                e.preventDefault();
                window.location.href = 'product.html';
                return;
            }
        });
    });
});
