//functioality to direct to hompage when logo is clicked
document.getElementById('cart-logo').addEventListener('click', ()=>{
    window.location.href = '/public/index.html'
})

//drop-down menu for the categories link
 const categoriesList = document.getElementById('categories-list');
document.getElementById('categories-link').addEventListener('click', ()=>{
    categoriesList.classList.toggle('hidden');

})

//search area functionality
document.getElementById('search').addEventListener('keypress', (event)=>{
    if(event.keyCode === 13){
        location.reload()
    }
})

//cart icon functionality
cartSummary = document.getElementById('cart-summary');
    document.getElementById('cart-icon').addEventListener('click',()=>{
        cartSummary.classList.remove('hidden')

    })

    //close cart button
    document.getElementById('remove-btn').addEventListener('click',()=>{
        cartSummary.classList.add('hidden')
    })

    //Add to cart button
    let numberOfCartItems = 0;
    const addToCartBtns = document.querySelectorAll('button[id="add-to-cart"]');
    const cartNumber = document.getElementById('cart-number');

    //array to keep track of already added items
   var cartItems = []


    addToCartBtns.forEach(button => {
        button.addEventListener('click', () => {
            // Get the parent cart item's ID
            var cartItemId = button.closest('.bg-white').id;
    
            // Use the cart item's ID to select its name
            var productName = document.querySelector(`#${cartItemId} h3`).textContent;
    
            if(cartItems.includes(productName)) {
                alert('Item already exists in the cart');
            } else {
                numberOfCartItems++;
                cartNumber.classList.remove('hidden');
                cartNumber.innerText = numberOfCartItems;
                cartItems.push(productName);
                console.log(cartItems)
            }
        });
    });
    
    
    



























document.getElementById('currentYear').textContent = new Date().getFullYear()