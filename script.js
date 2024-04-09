
const nav_cross = document.getElementsByClassName('a3')[0];
const a = document.getElementsByClassName('a')[0];
const b = document.getElementsByClassName('banner1')[0];
const btn1 = document.getElementsByClassName('btn1')[0];

btn1.onclick = function(){
    document.getElementsByTagName('body')[0].style.overflow='hidden';
    // console.log(b.classList);
}

nav_cross.onclick = function(){
    a.classList.toggle('show');
    document.getElementsByTagName('body')[0].style.overflow='scroll';
    // console.log(a.classList);
    // console.log(b.classList);
}

