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


fetch(' https://www.mp3quran.net/api/v3/reciters?language=eng&reciter=168').then(res=>{
  console.log(JSON.stringify(res));
})