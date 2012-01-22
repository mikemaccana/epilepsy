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
		var fontname = fonts[Math.floor ( Math.random() * fontslength )];
		var color = colors[Math.floor ( Math.random() * colorslength )]; 
		titlearea.css({
			'font': '60px/68px '+fontname,
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

	var words = "Cred aesthetic food truck next level, letterpress hoodie before they sold out tattooed readymade shoreditch high life ethical banh mi butcher. Carles viral mcsweeney's mlkshk. Put a bird on it farm-to-table tofu biodiesel, raw denim fixie aesthetic sustainable. Leggings iphone put a bird on it retro, wayfarers cliche marfa scenester. Tofu etsy leggings, viral mustache carles 8-bit quinoa mcsweeney's DIY fixie. Marfa biodiesel gluten-free quinoa cardigan wes anderson. Master cleanse food truck you probably haven't heard of them, iphone PBR Austin blog irony shoreditch keytar vinyl brooklyn wes anderson cardigan american apparel.";
	var titles = words.split(' ');
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
	var titlearea = $('h1')
	var colors = ["whiteSmoke","blue","red"];
	var colorslength = colors.length;

	addmusic();
	
	var bpm = 140;
	
	var interval = 60 / bpm * 1000;
		
	showcredits(titles, fonts, bpm);
})

