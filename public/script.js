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





























document.getElementById('currentYear').textContent = new Date().getFullYear()