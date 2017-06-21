function normal(text, beat, shadow, bg, color) {
	params = 'text=' + encodeURIComponent(text)
	params += '&beat=' + beat
	params += '&shadow=' + shadow
	params += '&bg=' + bg
	params += '&color=' + color

	url = 'view.html?' + params
	window.location = url
}

function obfuscated(text, beat, shadow, bg, color) {
	data = btoa(text) + '|'
	data += beat + '|'
	data += shadow + '|'
	data += bg + '|'
	data += color

	data = btoa(data)
	data = data.split('=')[0]	// Aesthetic reasons

	url = 'view.html?data=' + data
	window.location = url
}

function run() {
	text = $('input#text').get(0).value
	beat = $('input#beat').get(0).checked
	shadow = $('input#shadow').get(0).checked
	bg = $('input#bg').get(0).value
	color = $('input#color').get(0).value

	if(text == '') {
		alert('You have to enter a text!')
		return
	}

	obfuscate = $('input#obfuscate').get(0).checked
	if(!obfuscate) normal(text, beat, shadow, bg, color)
	else obfuscated(text, beat, shadow, bg, color)
}

$(document).ready(() => {
	document.addEventListener('keydown', function(e) {
		if(e.keyCode == 13) {
			run()
		}
	}, false)

	$('button').on('click', run)
})