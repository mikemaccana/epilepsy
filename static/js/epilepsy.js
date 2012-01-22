$( function() {
	
	function addmusic(){
		// Add the music to the page
		console.log('Adding music');
		audio = $('audio').get(0);
		audio.play();
	}
	
	function pickRandomProperty(obj) {
		// Pick a random key from an object
	    var result;
	    var count = 0;
	    for (var prop in obj)
	        if (Math.random() < 1/++count)
	           result = prop;
	    return result;
	}
	
	function maketexteffects(title) {
		// Set the text effects on a JQ selector named title then show it
		var font = getrandomfont();
		var color = getrandomcolor();
		var css = {
			'font-size': '120pt',
			'font-family': font,
			'color':color
		}
		
		var effects = {
			glow: function() {
				// Add a glow
				css['text-shadow'] = '0 0 30px '+color+', 0 0 70px '+color
			},
			texture: function() {
				// Add a texture to the text
				css['background'] = 'url(/static/img/paint.png) repeat, white'
				css['-webkit-text-fill-color'] = 'transparent'
				css['-webkit-background-clip'] = 'text'
			},
			textoutline: function() {
				// Add an outline to the text 
				css['-webkit-text-stroke'] = '1px '+color;
				css['-webkit-text-fill-color'] = 'transparent';
			},
			border: function () {
				// Add a border
				css['border-top'] = '1px solid '+color
				css['border-bottom'] = '1px solid '+color
			},
			rotate: function () {
				// Rotate a little
				css['-webkit-transform'] = 'rotate(-3deg)'
			}
		};
		
		effect_to_apply = pickRandomProperty(effects)	
		console.log('effect_to_apply')
		console.log(effect_to_apply)
		console.log(css)
		effects[effect_to_apply]()
		// For individual letters
		// Adjust colors 
		// Adjust sizes

		newtitle = $('<h1></h1>')
		newtitle.text(title);
		newtitle.css(css)
		

		$('h1').replaceWith(newtitle);
	}

	function showcredits(titles, fonts, interval) {
		// Show some 'Enter the Void' style titles 
		console.log('Starting credits');
		var count = 0
		var interval = setInterval( function() { 
			var title = (titles[count]);
			maketexteffects(title)
			count++; 
			if ( count >= titles.length) { 
				clearInterval(interval); 
				audio.pause();
			}
		}, interval);
	}

	var titles = [
		"Cred", 
		"aesthetic",
		"food truck",
        "next level",
        "letterpress",
        "hoodie",
        "before they sold out",
        "tattooed",
        "readymade",
        "shoreditch",
        "high life",
        "ethical",
        "banh mi",
        "butcher",
        "viral",
        "mcsweeney's",
        "mlkshk",
        "Put a bird on it",
        "farm-to-table",
        "tofu",
        "biodiesel",
        "raw denim",
        "fixie",
        "aesthetic",
        "sustainable. Leggings",
        "iphone",
        "put a bird on it",
        "wayfarers",
        "cliche",
        "marfa",
        "scenester",
        "Tofu",
        "etsy",
        "leggings",
        "viral",
        "mustache",
		"carles",
        "8-bit",
        "quinoa",
        "mcsweeney's",
        "DIY",
        "fixie",
        "Marfa",
        "biodiesel",
        "gluten-free",
        "quinoa",
        "cardigan",
        "wes anderson",
		"Master cleanse",
        "food truck",
        "you probably haven't heard of them",
        "iphone",
        "PBR",
        "Austin",
        "blog",
        "irony",
        "shoreditch",
        "keytar",
        "vinyl",
        "brooklyn",
        "wes anderson",
        "cardigan ",
		"american apparel."
	];
	var fonts = [
	    'BallparkWeiner',
	    'AirstreamRegular',
	    'BebasRegular',
	    'FontleroyBrownRegular',
	    'Lobster13Regular',
	    'MolotRegular',
	    'NeoRetroDrawRegular',
	    'NeoRetroFillRegular',
	    'NeoRetroShadowRegular',
	    'PacificoRegular',
	    'PincoyablackBlack',
	    'SeasideResortNFRegular'
	];
	var fontslength = fonts.length;
	var colortable = {
		'etvred':'#6d0111',
		'etvyellow':'#d07a2d',
		'darkgreen':'#286e28',
		'purple':'#4b1759',
		'sexypink':'#d3969e',
		'pink':'#cc0082',
		'green':'#00a701',
		'blue':'#0000e1',
		'neonaqua':'#1fffff',
		'dildopurple':'#320850',
		'orange':'#de5423'
	}
	var GOLDENRATIO = 1.618;
	var colors = [];
	for ( colorname in colortable) {
		colors.push(colortable[colorname])
	}
	var colorslength = colors.length;
	
	
	var getrandomfont = function() {return fonts[Math.floor ( Math.random() * fontslength )] };
	var getrandomcolor = function() {return colors[Math.floor ( Math.random() * colorslength )] }; 

	addmusic();
	
	var BPM = 135;
	
	var interval = 60 / BPM * 1000;
	showcredits(titles, fonts, interval);
})

