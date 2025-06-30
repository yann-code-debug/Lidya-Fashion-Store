let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-button').innerText = `Cart (${cartCount})`;
        alert('Item added to cart!');
    });
});
