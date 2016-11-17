var clientHeight = document.documentElement.clientHeight;
var clientWidth = document.documentElement.clientWidth;

var prop = clientHeight/clientWidth;

var leftBlock = document.getElementsByClassName('js-left-block')[0];
var centerBlock = document.getElementsByClassName('js-center-block')[0];
var additionalBlock = document.getElementsByClassName('js-additional-block')[0];

if (clientWidth > 768){
    if ( prop < 0.5625 ){
        console.log('default');
    } else if ( prop < 0.75 ) {
        leftBlock.style.left = '-17%';
        centerBlock.style.left = '9.21%';
        centerBlock.style.width = '65.26%';
        additionalBlock.style.left = '9.21%';
        additionalBlock.style.width = '65.26%';
    } else if ( prop < 1 ) {
        leftBlock.style.left = '-19%';
        centerBlock.style.left = '11.21%';
        centerBlock.style.width = '63.26%';
        additionalBlock.style.left = '11.21%';
        additionalBlock.style.width = '63.26%';
    }
}