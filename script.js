console.log(document.documentElement.clientHeight);
console.log(document.documentElement.clientWidth);

// console.log(document.body);
const ele2 = document.getElementsByClassName('image_a1')[0];
const ele3 = document.getElementsByClassName('image_a2')[0];
const ele1 = document.getElementsByClassName('image_a4')[0];


console.log(ele2.width);
console.log(ele3.width);
console.log(ele1.width);

const nav_cross = document.getElementsByClassName('a3')[0];
const a = document.getElementsByClassName('a')[0];

nav_cross.onclick = function(){
    a.classList.toggle('show');
    console.log(a.classList);
}

