let line = document.querySelector('.line');
let sliderWidth = document.querySelector('.slider').offsetWidth;
let slides = document.querySelectorAll('.slide');
let widthArray = [0];
let lineWidth =0;
let offset =0;
let step =0;
//console.log(sliderWidth);

for(let i =0;i < slides.length; i++){
   widthArray.push(slides[i].offsetWidth);
   lineWidth += slides[i].offsetWidth;
}
line.style.width = lineWidth + 'px';
console.log(widthArray);

document.onclick = function(){
    offset = offset + widthArray[step];
    line.style.left = - offset + 'px';
    step++;
}