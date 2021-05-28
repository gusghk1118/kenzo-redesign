let sky = document.getElementById('sky');
let flower = document.getElementById('flower');
let city = document.getElementById('city');
let logo = document.getElementById('logo');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    flower.style.bottom = value * 0.8 + 'px';
    city.style.top = value * 0.3 + 'px';
    kenzologo.style.top = -value * 1 + 'px';
    header.style.top = value * 0.5 + 'px';
})