function findGetParameter(parameterName) {	// Source: https://goo.gl/gtahpc
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function set(text, beat, shadow, bg, color) {
	if(text == null || beat == null || bg == null || color == null || text == '' || beat == '' || bg == '' || color == '') {
		document.write('Hmm... something went wrong.')
		return
	}

	$('h1').text(text);

	if(beat == 'true') $('h1').get(0).style.animation = 'beating 3s infinite 0s'
	if(shadow == 'true') $('h1').get(0).style.textShadow = '3px 3px 6px grey'

	$('body').get(0).style.backgroundColor = '#'+bg

	$('h1').get(0).style.color = '#'+color
}

function normal() {
	text = findGetParameter('text')
	beat = findGetParameter('beat')
	shadow = findGetParameter('shadow')
	bg = findGetParameter('bg')
	color = findGetParameter('color')

	set(text, beat, shadow, bg, color)
}

function obfuscated() {
	data = findGetParameter('data')
	if(data == '') {
		document.write('Hmm... something went wrong.')
		return
	}

	data = atob(data)

	text = atob(data.split('|')[0])
	beat = data.split('|')[1]
	shadow = data.split('|')[2]
	bg = data.split('|')[3]
	color = data.split('|')[4]

	set(text, beat, shadow, bg, color)
}

$(document).ready(() => {
	data = findGetParameter('data')

	if(data == null) normal()
	else obfuscated()
})