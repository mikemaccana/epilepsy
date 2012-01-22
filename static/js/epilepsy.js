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
	
	function vary_around_zero(variance) {
		// Return a random number in the range of +-variance
		return Math.floor( Math.random() * (variance*2) ) - variance; 
	}
	
	function lighten_or_darken_color(hsl_color, amount) {
		// Lighten or darken hex color by amount (in int)
		bits = hsl_color.split(',')
		hue = bits[0]
		saturation = bits[1]
		lightness = parseFloat(bits[2])
		lightness += amount;
		lightness == lightness || 1
		lightness = lightness+'%'
		newcolor = [hue, saturation, lightness].join(',')
		console.log('newcolor:');
		console.log(newcolor);
	    return newcolor;
	}
	
	function maketexteffects(title) {
		// Set the text effects on a JQ selector named title then show it
		var font = getrandomfont();
		var color = getrandomcolor();
		var css = {
			'font-size': '120pt',
			'font-family': font,
			'color':'hsl('+color+')',
			'text-align':'center',
		}
		css['margin-left'] = vary_around_zero(200);
		css['margin-top'] = vary_around_zero(200);
		var effects = {
			glow: function() {
				// Add a glow
				glowcolor = lighten_or_darken_color(color, -5);
				css['text-shadow'] = '0 0 30px hsl('+glowcolor+'), 0 0 70px hsl('+glowcolor+')'
			},
			texture: function() {
				// Add a texture to the text
				css['background'] = 'url(/static/img/paint.png) repeat, white'
				css['-webkit-text-fill-color'] = 'transparent'
				css['-webkit-background-clip'] = 'text'
			},
			bounce: function() {
				// Bounce the text multiple times
				var shadows = []
				var current = 1
				var max = 40
				var shadowcolor = color;
				while ( current < max ) {
					shadowcolor = lighten_or_darken_color(shadowcolor, -5);
					shadows.push(current+'px '+current+'px hsl('+shadowcolor+')');
					current += 5;
				}
				css['text-shadow'] = shadows.join(', ');
				console.log('shadow');
				console.log(css['text-shadow']);
			},	
			textoutline: function() {
				// Add an outline to the text 
				css['-webkit-text-stroke'] = '1px hsl('+color+')';
				css['-webkit-text-fill-color'] = 'transparent';
			},
			bordertopbottom: function () {
				// Add a border
				css['border-top'] = '1px solid hsl('+color+')';
				css['border-bottom'] = '1px solid hsl('+color+')';
			},
			border: function () {
				// Add a border
				css['border'] = '1px solid hsl('+color+')'
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
		"american apparel.",
		"etsy",
	    "vice",
	    "wayfarers.",
	    "odio",
	    "aliquip",
	    "art party",
	    "echo park",
	    "brunch",
	    "gluten-free",
	    "quinoa",
	    "freegan",
	    "messenger bag",
	    "Tumblr",
	    "jean shorts",
	    "bicycle rights",
	    "readymade",
	    "pitchfork",
	    "retro,",
	    "artisan",
	    "hoodie"
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
		'etvred':'351, 98%, 22',
		'etvyellow':'28, 64%, 50%',
		'darkgreen':'120, 47%, 29%',
		'purple':'287, 59%, 22%',
		'sexypink':'352, 41%, 71%',
		'pink':'322, 100%, 40%',
		'green':'120, 100%, 33%',
		'blue':'240, 100%, 44%',
		'neonaqua':'180, 100%, 56%',
		'dildopurple':'275, 82%, 17%',
		'orange':'16, 74%, 50%'
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

