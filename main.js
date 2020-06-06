let copyright = document.getElementById('copyright');
let om = document.getElementById('om');
let registred = document.getElementById('registred');
let trademark = document.getElementById('trademark');
let music = document.getElementById('music');
let swastika = document.getElementById('swastika');
let communist = document.getElementById('communist');
let movies = document.getElementById('movies')

let copyrightSymbol = document.getElementById('copyright-symbol');
let omSymbol = document.getElementById('om-symbol');
let registredSymbol = document.getElementById('registred-symbol');
let trademarkSymbol = document.getElementById('trademark-symbol');
let musicSymbol = document.getElementById('music-symbol');
let swastikaSymbol = document.getElementById('swastika-symbol');
let communistSymbol = document.getElementById('communist-symbol');

copyright.onclick = async function() {
   navigator.clipboard.writeText(copyrightSymbol.innerHTML).then(function() {
  console.log('copyright symbol copied') /* clipboard successfully set */
}, function() {
	console.log('failed to copy the copyright symbol')  /* clipboard write failed */
});
}

om.onclick = async function() {
   navigator.clipboard.writeText(omSymbol.innerHTML).then(function() {
  console.log('om symbol copied') /* clipboard successfully set */
}, function() {
	console.log('failed to copy the om symbol')  /* clipboard write failed */
});
}

registred.onclick = async function() {
   navigator.clipboard.writeText(registredSymbol.innerHTML).then(function() {
  console.log('registred symbol copied') /* clipboard successfully set */
}, function() {
	console.log('failed to copy the registred symbol')  /* clipboard write failed */
});
}

trademark.onclick = async function() {
   navigator.clipboard.writeText(trademarkSymbol.innerHTML).then(function() {
  console.log('trademark symbol copied') /* clipboard successfully set */
}, function() {
	console.log('failed to copy the trademark symbol')  /* clipboard write failed */
});
}

music.onclick = async function() {
   navigator.clipboard.writeText(musicSymbol.innerHTML).then(function() {
  console.log('music symbol copied') /* clipboard successfully set */
}, function() {
	console.log('failed to copy the music symbol')  /* clipboard write failed */
});
}

swastika.onclick = async function() {
   navigator.clipboard.writeText(swastikaSymbol.innerHTML).then(function() {
  console.log('swastika symbol copied') /* clipboard successfully set */
}, function() {
	console.log('failed to copy the swastika symbol')  /* clipboard write failed */
});
}

communist.onclick = async function() {
   navigator.clipboard.writeText(communistSymbol.innerHTML).then(function() {
  console.log('communist symbol copied') /* clipboard successfully set */
}, function() {
	console.log('failed to copy the communist symbol')  /* clipboard write failed */
});
}

movies.onclick = function() {
	console.log('function working')
	window.open('F:/Movies')	
}
