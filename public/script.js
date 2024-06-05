// dynamically generate products with API

let productsHTML = '';

// Loop to generate the HTML using data from the products array
products.forEach((product) => {
    productsHTML +=  ` <div class="bg-white rounded-lg overflow-hidden shadow-md" id="item-${product.id}">
        <img src="${product.image}" alt="Product" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
          <p class="text-gray-700 mb-2">&#8373;${product.price}</p>
          <div class="flex items-center mb-4"></div>
          <!-- Add to Cart Button -->
          <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" id="add-to-cart">Add to Cart</button>
        </div>
      </div>`;
});

console.log(productsHTML);
// Append the generated HTML to the products container
document.querySelector('.products-bar').innerHTML = productsHTML;














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
let cartSummary = document.getElementById('cart-summary');
    document.getElementById('cart-icon').addEventListener('click',()=>{
        cartSummary.classList.remove('hidden')

    })

    //close cart button
    document.getElementById('remove-btn').addEventListener('click',()=>{
        cartSummary.classList.add('hidden')
    })



    //variable to keep track of the number of items in the cart
    let numberOfCartItems = 0;

    const addToCartBtns = document.querySelectorAll('button[id="add-to-cart"]');
    const cartNumber = document.getElementById('cart-number');
   
    var cartItems = [];
    //functionality to add items to the cart and update the cart number
    addToCartBtns.forEach(button => {
        button.addEventListener('click', () => {

            //let the remove all button appear after an item has been added
            document.getElementById('remove-all-btn').classList.remove('hidden');

            //cariables to hold the name, price and image of the selected item
            var cartItemId = button.closest('.bg-white').id;
            var productName = document.querySelector(`#${cartItemId} h3`).textContent;
            var productPrice = document.querySelector(`#${cartItemId} p`).textContent;
            var productImage = document.querySelector(`#${cartItemId} img`).getAttribute('src');

            //if item already exists in the cart,give the user an alert else update the cart number and output it 
            //also update the cartitems array to keep track of that particular item 

            if (cartItems.includes(productName)) {
                alert('Item already exists in the cart');
            } else {
                numberOfCartItems++;
                cartNumber.classList.remove('hidden');
                cartNumber.innerText = numberOfCartItems;
                cartItems.push(productName);
                console.log(cartItems);
    
                // Create a new cart item div
                const newCartItemDiv = document.createElement('div');
                newCartItemDiv.classList.add('py-2', 'flex', 'justify-between', 'items-center', 'cart-item');
                newCartItemDiv.innerHTML = `
                    <div class="flex items-center">
                        <img src="${productImage}" alt="${productName}" class="w-12 h-12 object-cover mr-2">
                        <div>
                            <div class="font-semibold">${productName}</div>
                            <div class="text-sm text-gray-500">Price: ${productPrice}</div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <button class="text-gray-500 hover:text-gray-700">-</button>
                        <span class="mx-2">1</span>
                        <button class="text-gray-500 hover:text-gray-700">+</button>
                    </div>
                    <button class="text-red-500 hover:text-red-700 cart-item-btn" >Remove</button>
                `;
                

                
    
                // Append the new cart item div to the cart summary
                cartSummary.querySelector('.divide-y').appendChild(newCartItemDiv);



    

            }
        });
    });
    

    
    

//functionality to remove all items from the cart
    document.getElementById('remove-all-btn').addEventListener('click', ()=>{
        //clear all items originally added to the cart
        cartSummary.querySelector('.divide-y').innerHTML = '';
        //reset the array keeping track of the added items
        cartItems = [];
        //hide the cart number
        cartNumber.classList.add('hidden')
        numberOfCartItems = 0;
        document.getElementById('remove-all-btn').classList.add('hidden');

    })



 
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('cart-item-btn')) {
            const itemDiv = event.target.closest('.cart-item');
            if (itemDiv) {
                itemDiv.remove();
                // Remove the item from the cartItems array
                const productName = itemDiv.querySelector('.font-semibold').textContent;
                const index = cartItems.indexOf(productName);
                if (index !== -1) {
                    cartItems.splice(index, 1);
                   
                    numberOfCartItems--;
                  
                    if (numberOfCartItems <= 0) {
                    
                        cartNumber.classList.add('hidden');
                    } else {
                        // Update the cart number display if it's greater than zero
                        cartNumber.innerText = numberOfCartItems;
                    }
                }
            }
        }
    });
    


    
   

    
    


    
    
   


   
    


   
    
    



























document.getElementById('currentYear').textContent = new Date().getFullYear()