//functioality to direct to hompage when logo is clicked
document.getElementById('cart-logo').addEventListener('click', ()=>{
    window.location.href = '/public/index.html'
})

//drop-down menu for the categories link
 const categoriesList = document.getElementById('categories-list');
document.getElementById('categories-link').addEventListener('click', ()=>{
    categoriesList.classList.toggle('hidden');

})































document.getElementById('currentYear').textContent = new Date().getFullYear()