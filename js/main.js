let ulEl = document.querySelector('.links');
let ulLinks = document.querySelectorAll('.main_link');
let toggler = document.getElementById('toggler');

toggler.addEventListener('click', ()=> {
  ulEl.classList.toggle('active');
  toggler.classList.toggle('active');
})

ulLinks.forEach(item => {
  item.addEventListener('click', ()=>{
    ulEl.classList.toggle('active');
  })
})