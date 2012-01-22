$( function() {
	
	function addmusic(){
		// Add the music to the page
		console.log('Adding music');
		audio = $('audio').get(0);
		audio.play();
	}
	
	function maketexteffects(title) {
		// Set the text effetcs on a JQ selector named title then show it
		titlearea.text(title);
		var font = getrandomfont();
		var color = getrandomcolor();
		titlearea.css({
			'font-family': font,
			'letter-spacing': '0',
			'color':color
		})
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
        "put a bird on it ,retro",
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
	var titlearea = $('h1');
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
	var colors = [];
	for ( colorname in colortable) {
		colors.push(colortable[colorname])
	}
	var colorslength = colors.length;
	
	
	var getrandomfont = function() {return fonts[Math.floor ( Math.random() * fontslength )] };
	var getrandomcolor = function() {return colors[Math.floor ( Math.random() * colorslength )] }; 
	// var size = 
	

	addmusic();
	
	var bpm = 140;
	
	var interval = 60 / bpm * 1000;
		
	showcredits(titles, fonts, bpm);
})

