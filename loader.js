'use strict';

// Loader progress
let prgoressBar = document.getElementsByClassName('progress')[0],
    progress = 0;

setInterval(()=>{
  if(progress < 100) {
    progress++;
    prgoressBar.textContent = progress;
  }

}, 100);

// Rainbow loader
let gradients =
  [
    ['#41295a', '#2F0743'],
    ['#de6161', '#2657eb'],
    ['#8E0E00', '#1F1C18'],
    ['#D38312', '#A83279'],
    ['#83a4d4', '#b6fbff'],
    ['#FDFC47', '#24FE41']
  ]

let gradient = gradients[(Math.floor(Math.random() * (gradients.length-1 - 0 + 1)) + 0)];

let loader = document.getElementsByClassName('loader')[0];
let loaderSpan = loader.getElementsByTagName('span');

for (let i=0; i < loaderSpan.length; i++) {
  loaderSpan[i].style.background = `linear-gradient(${gradient[0]},${gradient[1]})`;
}
