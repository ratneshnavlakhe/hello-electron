var pic = require('cat-picture');
var remote =  require('electron').remote;
var image = require('lightning-image-poly');
var fs =  require('fs');
var src = pic.src;

function save() {
	remote.getCurrentWindow().webContents.printToPDF({
		portrait: true
	}, function (err, data) {
		fs.writeFile('annotation.pdf', data, function (err) {
		if(err) alert('error generating pdf!'+ err.message);
		else alert('pdf saved!');
		})
	})
}

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

pic.remove();

window.addEventListener('keydown', function (e) {
	if(e.keyCode == 80) save()
})
