var clients = document.getElementById('clients');

clients.addEventListener('click', function() {
  $(clients).toggleClass("active");
  $(".parent:not(#clients)").toggleClass("invisible");
}, false);

document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigationWrapper');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}