'use strict'

// Grey shadow

$('img[usemap]').maphilight()

$('img[usemap]').maphilight({
	fill: true,
	fillColor: '000000',
	fillOpacity: 0.2,
	stroke: false,
	strokeColor: 'ff0000',
	strokeOpacity: 1,
	strokeWidth: 1,
	fade: true,
	alwaysOn: false,
	neverOn: false,
	groupBy: false,
	wrapClass: true,
	shadow: false,
	shadowX: 0,
	shadowY: 0,
	shadowRadius: 6,
	shadowColor: '000000',
	shadowOpacity: 0.8,
	shadowPosition: 'outside',
	shadowFrom: false
});


// Underlining legend

let textPink = document.querySelector('.text--pink');
let textGreen = document.querySelector('.text--green');
let textGrey = document.querySelector('.text--grey');

function underline() {
    if((event.target).classList.contains('pink')) {
        textPink.classList.add('active--pink')
    }
    else if((event.target).classList.contains('green')) {
        textGreen.classList.add('active--green')
    }
    else if((event.target).classList.contains('grey')) {
        textGrey.classList.add('active--grey')
    }
}

function removeUnderline() {
    if((event.target).classList.contains('pink')) {
        textPink.classList.remove('active--pink')
    }
    else if((event.target).classList.contains('green')) {
        textGreen.classList.remove('active--green')
    }
    else if((event.target).classList.contains('grey')) {
        textGrey.classList.remove('active--grey')
    }
}

