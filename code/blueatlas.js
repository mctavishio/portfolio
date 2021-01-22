let getz = () => {
	let width = window.innerWidth, height = window.innerHeight;
	let min = Math.min(width, height), max = Math.max(width, height);
	let version = (min < 680 || max < 980) ? "small" : "large";
	let v = version === "small" ? 0 : 1;
	let z = { 
		dimensions: {
			width, height, version, v
		}
	};
	z.tools = {
		randominteger: (min, max) => {
			return Math.floor( min + Math.random()*(max-min));
		},
		logmsg: function(msg) {
			try { 
				console.log("### ::: " + msg); 
			}
			catch(err) { z.tools.logerror(err) }
		},
		logerror: function(error) {
			try { console.log("rusty error ... " + error); }
			catch(err) {}
		},
		randomhighharmonic: () => {
			let multipliers = [10.0, 12.5, 13.33, 15, 20];
			return multipliers[ z.tools.randominteger( 0, multipliers.length) ];
		},
		randomharmonic: () => {
			let multipliers = [5, 7.5, 10.0, 12.5, 13.33, 15, 20];
			return multipliers[ z.tools.randominteger( 0, multipliers.length) ];
		},
		randomlowharmonic: () => {
			let multipliers = [5, 7.5, 10.0, 12.5, 13.33, 15, 20];
			return multipliers[ z.tools.randominteger( 0, multipliers.length) ]/2;
		},
		randomkey: (object) => {
			let keys = Object.keys(object);
			let key = keys[z.tools.randominteger(0,keys.length)];
			// z.tools.logmsg("key = " + key);
			return key;
		},
		datestr: (date, options) => {
			if(options===undefined) options = {year: "numeric", month: "2-digit", day: "numeric", hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit"};
			return date.toLocaleTimeString("en-US", options);
			//new Date().toLocaleTimeString("en-US", {year: "numeric", month: "2-digit", day: "numeric", hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit"});
		},
		togrid: (min=1, max=1, x=1, ndivisions=1) => {
			let dx = Math.floor( (max-min) / ndivisions );
			return Math.floor( ( x-min+dx/2)/dx )*dx + min;
		},
		flatten: (arr) => {
			return arr.reduce(function (flat, item) {
				return flat.concat(Array.isArray(item) ? z.tools.flatten(item) : item);
			}, []);
		},
		createElement: ({parentel=document.querySelector("body"), tag="div", attributes=[], cssclasses=[], cssstyles=[], ns="none"}) => {
			let el;
			if(ns!=="none") {
				el = document.createElementNS(ns, tag);
				attributes.forEach( entry => {
					el.setAttributeNS(null, entry[0], entry[1]);
				});
			}
			else {
				el = document.createElement(tag);
				attributes.forEach( entry => {
					el.setAttribute(entry[0], entry[1]);
				});
			}
			cssstyles.forEach( entry => {
				z.tools.logmsg("entry = " + entry)
				el.style[entry[0]] = entry[1];
			});
			cssclasses.forEach( entry => {
				el.classList.add(entry);
			});
			parentel.appendChild(el);
			return el;
		}
	};
	z.data = {
		colors: {
			sets: {
				warmbw: ["#fcfbe3", "#191918"],
				warmbwred: ["#9a0000", "#fcfbe3", "#191918"],
				warmbw: ["#fcfbe3", "#191918"],
				warmbwyellow: ["#ffcc00", "#fcfbe3", "#191918"],
				warmbw: ["#fcfbe3", "#191918"],
				warmbwbluegray: ["#006699", "#fcfbe3", "#191918", "#4b4b44"],
				warmbwbluesgray: ["#006699", "#fcfbe3", "#191918", "#004488"],
				warmbwblue: ["#006699", "#fcfbe3", "#191918"],
				warmbwbluegreen: ["#006699", "#006666", "#fcfbe3", "#191918"],
			},
			pigments: {
				black: "#191918",
				white: "#fcfbe3",
				blue: "#006699",
				red: "#9a0000",
				yellow: "#ffcc00",
				gray: "#484848",
			}
		},
		sound: {
			basetrackurl: "https://storage.googleapis.com/www.blueboatfilms.com/sound/",
			baseclipurl: "data/sound/",
			tracks: {
				lovemeditations: {title: "love meditations", url: "lovemeditationspodcast.mp3", duration: 3980 }, //1:06:24
				rivericarus: {title: "river icarus", url: "rivericaruspodcast.mp3", duration: 2110}, //35:13
				monksfromouterspace: {title: "monks from outer space", url: "monks.mp3", duration: 380}, //6:22
				oceanwindgrief: {title: "ocean | wind | grief", url: "oceanwindgriefpodcast.mp3", duration: 1870},//31:18
				nyx: {title: "nyx", url: "oceanwindgriefpodcast.mp3", duration: 1280},//21:26
				nighttrainbluewindow: {title: "night train / blue window", url: "nighttrainbluewindow/nighttrainbluewindowpodcast.mp3", duration: 2280}, //38:06
				originofbirds: {title: "origin of birds", url: "originofbirdssound20140330.mp3", duration: 1360},//22:50
				ahabsdream: {title: "ahab's dream", url: "ahabsdreampodcast.mp3", duration: 1220},//20:24
				birdland: {title: "birdland", url: "birdlandpodcast.mp3", duration: 3780},//1:03:05
				holyfool: {title: "holy fool", url: "holyfoolpodcast.mp3", duration: 1720},//28:43
				horsespeakstosky: {title: "horse speaks to sky", url: "horsespeakssky.mp3", duration: 420},//7:08
				roadtowillistonsoundthread1: {title: "road to williston sound thread #1", url: "traffick20141208_all_v6.mp3", duration:1170}, //19:35
				rainclouds: {title: "rain clouds", url: "dronespace7.mp3", duration:360}, //6:03
				thesoundofeverydayobjects: {title: "the sound of everyday objects", url: "thesoundofeverydayobjectspodcast.mp3", duration: 2380},//39:42
				between2desertstheswan: {title: "between2deserts / two - the swan", url: "theswanpodcast.mp3", duration:2970}, //49:33
				nyxtrack3: {title: "nyx ::: track #3", url: "nyx3.mp3", duration:200}, //3:20
				cistern5: {title: "cistern #5", url: "cistern20140630_5_cistern.mp3", duration:1790}, //29:51
				echolightning: {title: "echo & lightning", url: "echolightningpodcast.mp3", duration:2050}, //34:12
				// sophroniasoundscape
				graffititunnel: {title: "graffiti tunnel", url: "graffititunnelpodcast.mp3", duration: 1720},//45:12
				graffiti2hands: {title: "graffiti 2 hands", url: "graffiti2handspodcast.mp3", duration: 3780},//1:03:13
			},
			instruments: {
				bagpipe1a: {clip: "bagpipe1a", minvolume: 0.3, maxvolume: 0.9, playbackRate: () => { return z.tools.randomlowharmonic()/10 } },
				bagpipe1ahigh: {clip: "bagpipe1a", minvolume: 0.3, maxvolume: 0.9, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				bagpipe1e: {clip: "bagpipe1e", minvolume: 0.3, maxvolume: 0.9, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				bagpipe1f: {clip: "bagpipe1f", minvolume: 0.3, maxvolume: 0.9, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				bagpipe1g: {clip: "bagpipe1g", minvolume: 0.3, maxvolume: 0.9, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				bagpipe1h: {clip: "bagpipe1h", minvolume: 0.3, maxvolume: 0.9, playbackRate: () => { return z.tools.randomlowharmonic()/10 } },
				bagpipe1: {clip: "bagpipe1", minvolume: 0.3, maxvolume: 0.9, playbackRate: () => { return z.tools.randomlowharmonic()/4 } },
				bagpipe1high: {clip: "bagpipe1", minvolume: 0.3, maxvolume: 0.9, playbackRate: () => { return z.tools.randomharmonic()/4 } },
				thunk: {clip: "thunk", minvolume: 0.3, maxvolume: 0.8, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				thunkhighharmonic: {clip: "thunk", minvolume: 0.3, maxvolume: 0.8, playbackRate: () => { return z.tools.randomhighharmonic()/10 } },
				birds5harmonic: {clip: "birds5", minvolume: 0.2, maxvolume: 0.5, playbackRate: () => { return z.tools.randomhighharmonic()/10 } },
				knocking1: {clip: "knocking1", minvolume: 0.4, maxvolume: 0.9, playbackRate: () => { return z.tools.randominteger(4,48)/10 } },
				cmpb20200708_5harmonic: {clip: "cmpb20200708_5", minvolume: 0.4, maxvolume: 0.9, playbackRate: () => { return z.tools.randomhighharmonic()/10 } },//* voice
				// cello_pitch1: {clip: "cello_pitch1", minvolume: 0.3, maxvolume: 0.8, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				// cello_pitch1harmonic: {clip: "cello_pitch1", minvolume: 0.3, maxvolume: 0.8, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				bird1harmonic: {clip: "bird1", minvolume: 0.8, maxvolume: 1.0, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				birdcanyon: {clip: "birdcanyon", minvolume: 0.8, maxvolume: 1.0, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				bagpipegeese: {clip: "bagpipegeese", minvolume: 0.8, maxvolume: 1.0, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				celloknockcanyon: {clip: "celloknockcanyon", minvolume: 0.8, maxvolume: 1.0, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				voxmct0: {clip: "voxmct0", minvolume: 0.8, maxvolume: 1.0, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				stapler: {clip: "stapler", minvolume: 0.8, maxvolume: 1.0, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				train1: {clip: "train1", minvolume: 0.4, maxvolume: 0.8, playbackRate: () => { return z.tools.randominteger(6,18)/10 } },
				weatherradio1: {clip: "weatherradio1", minvolume: 0.6, maxvolume: 1.0,  playbackRate: () => { return z.tools.randominteger(6,12)/10 } },
				longbell: {clip: "longbell", minvolume: 0.4, maxvolume: 0.8, playbackRate: () => { return z.tools.randominteger(9,18)/10 } },
				// cellothunktelephone: {clip: "cellothunktelephone", minvolume: 0.8, maxvolume: 1.0, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				// cellothunkradio: {clip: "cellothunkradio", minvolume: 0.8, maxvolume: 1.0, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				t0: {clip: "t0", minvolume: 0.8, maxvolume: 1.0, playbackRate: () => { return z.tools.randomharmonic()/10 } },
				tornadosirenharmonic: {clip: "tornadosiren", minvolume: 0.1, maxvolume: 0.6, playbackRate: () => { return z.tools.randomlowharmonic()/10 } },									
			},
		},
		texts: {
			lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. Suspendisse rhoncus nisl posuere tortor tempus et dapibus elit porta. Cras leo neque, elementum a rhoncus ut, vestibulum non nibh. Phasellus pretium justo turpis. Etiam vulputate, odio vitae tincidunt ultricies, eros odio dapibus nisi, ut tincidunt lacus arcu eu elit. Aenean velit erat, vehicula eget lacinia ut, dignissim non tellus. Aliquam nec lacus mi, sed vestibulum nunc. Suspendisse potenti. Curabitur vitae sem turpis. Vestibulum sed neque eget dolor dapibus porttitor at sit amet sem. Fusce a turpis lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
			glitch: "xœ½YMo7½Ï¯ÐØ‰(~H‚=$môP oAéÚi{Øöï÷Q³k{Vj½:YÃ#š#½Gj%’’)DüìJIÂá8¹;;;×´üýçÝôêÝ=…_î½M­ýæî¯ßw?½{÷Sœk)‰5U!Ê&PPç¤R#Uƒ¦4!æó‹pø}„øöý#¾ûƒ#²#¾ÙÀÊ?&ê'ëÍÍIÛ”±Èœc 7ÇéÕw¨J¸ù<}xmj«™÷4¼Nwû`mÜ‡ø1Ü|?}{3ýx~±8‹H/·ö9'KV_il3¦f0e…tûbTLòâÃG{ÛÆ$",
			earthprayer: "A prayer for our earth All-powerful God, you are present in the whole universe and in the smallest of your creatures. You embrace with your tenderness all that exists. Pour out upon us the power of your love, that we may protect life and beauty. Fill us with peace, that we may live as brothers and sisters, harming no one. O God of the poor, help us to rescue the abandoned and forgotten of this earth, so precious in your eyes. Bring healing to our lives, that we may protect the world and not prey on it, that we may sow beauty, not pollution and destruction. Touch the hearts of those who look only for gain at the expense of the poor and the earth. Teach us to discover the worth of each thing, to be filled with awe and contemplation, to recognize that we are profoundly united with every creature as we journey towards your infinite light. We thank you for being with us each day. Encourage us, we pray, in our struggle for justice, love and peace.",
			bird: ".......,.,/(##(/..#%#(*,.,/,,*/#%#(.#&&@#//(%/,.*/,*(&@&@%(.*%#/,*/(&@&%/,/#%&,.,*/(#%#/(%#/*/(#%##/../(,%(//(%&#%/,..,(%#/(#%&@&&/,#%#,*/(#&@&%*.*/(&%(./((#%#&%#%&@%/..*%/##&@&*..#%(%@%/../#%#(/*,,(%/*,*/#&@,*(#(#@%,#%@@/.*(//(#%*..*/(#%&@&@.*(#%&@&*,%@%*.,#%#(#%,#%@&@&,.(#%#@..#%&%#%&@&,..*&%&%/../%@&@%./&@@@&@&(,.,(&%&@&,(%&#%&@&*.*#&@&@,./%&%/@&,.#&/#&@./(&@@/(#(#@*./#&@%#*/#%(/(#@&%//&@&@&@#(/,*(#%@&**#&%@&*,*((*,*/#@%.,@&@*,*/(/(/(%#(#%@#*%*,.#&@&%@,*/(/#%#(#@&,.&(,.%&@&@&@(,/#&##(%@%/.@%,.,(&@@&%*/#(&@%#(/(%&&%,..(%&@&@&%@%(*/(#%#%&@%#%@&%#@#/.%&@&#&#%#(#&@&#@%#.(&#.*&&@&%#%&@#(%&&@&%*..*%&@*,(&%&((#%&&%#&@@%*,#@%(.*#%#(##(#%(/%&@&%&@&%,,#&@*((/(#(*/(%&&&%&/./@%(.(&(/*/*/#(//(#(#%#/,*/(/(%&@&%#&@%(*.,/@&/,(&%/(/,*(#%&#(///#%&%@@@&%(.,#&@&%(./%&%(/*#,/(%&%#&@&@%&@%#*,(@%*(#*/(/*/(#//#(*/#&(*/#%&/(%&,(@,.##(#/,.*/*/(/(%&&%(%(,/&/#%#%#*,*/*,.,,*,#@&@/#%&%((&%#%&@#(*(%@*.(%&%/,(#/.,&@&%(/((%&@%@#%#(/(%&(/#&@%(../%*.,(/(#,,.,*%(*(/(/((#%&%&%&##%&%#/#&*.(%&@/,#/*,(#%(/,/#&@&%##%&@#&@%,.#&@(,*#/*,*,,,*((&@&%(#&/*/#&@%/.*%&@&%*.*(%#(*.*(#&&&&(&@&,.#@%*,.(#/,*/(/(#%&@&#%#%/..*%@&@/,.*%#/*,.,.,/@@&@&%@%#*/,.,&*.,*/#@&#%&%#.,/@/.,/#/*,.*,*(#&&@&%#(,./#@#*,.,*,*##(#//%&&@&(,..*%&%#@(*.*,.,*/#&(/*/(#&@##(,,#&@&%/*,(&@,*/*/#&%#/*(#%@%(.,/%*,.(*,./#%/*,*/(/(&*../&&%(*%&@&(%#/*%(,/#&@&@%#/%@(,.*%&@&%#%&@%(//%&#*./#@&%,.,*/%&%&@&&%/(#%&(,,/%#*,,(*,/#%&%#%&@&%(#&@%../#&@&@(#&@&&%/,..,%@%#%&#*,/&@%,.(%#%&%*.,(/,./#,/@&*,/(@%.,(&%#/,/(/.,/%&@%/#@*.*/#@&@&%/(%*.,#%*(%&%&@@/*/.%/#@%/,(*,/#@(/%#&@&,../&@&@@#*,*/%(#%#%&@&&@#(@&@#,.*&&@&/,/#%#,./#%(*#&#,/&(.,*/,#&@&@/*/#&%#%@#%@&*/#@&(,*#*.*(&@&@&@&@%,..*&@&(((#&@,*%&@@&(/(&@&%&@*../&@%#%&*,.*&@%@%@&@%(#&,./#@&&*.,%&@#&%&@@&*%&@(.,%&%@*..#&(,/%&#&@%.,&@@*.,*#&@*.%@&**&%/#,(&%(/%/,,&@&@#/,.(&@%/,,.,(@%&/.&@%,*(%*,.,#(.(%(,,/#*.,.,*,.*%@%,*.*(*,*.,#@#/(#,*(@%,**&(.**(%&(*.,/&@%/.(&@(,#&@%/,,/((,.,(&(.*,.,/%&%(/.%&@&,*/**,/*,.,./#((#%(,.,*(/(%&%/*(/*,*,,(#/./((%#(//,.*,*%#%&%/.(#/#(/.*,,*,.#%#(/*,*/#%(,&@*,,*/&%(/*,.*,*(%@%/,,.*##/,*,.,&%(,,/&,(/(%#(,,*,(%(*.(,*(%&,,*,,**,,%&/*,#&,*,,/%(*,,*#(*,/@,.,,.,%(/.,,(#*,./(*/(/(/(*,.,*(/,,,/(//(/,*,*.,,./*/,/*,*/*.(*,*,*/*/*((*,,*//*//#(*(%#*,*/,.,*/*/#(*(/(/*/*(*,*/*,#,*/%/*,*,/*(//%/,.#%(*/,/(,*%(/(*//*/*#%#*/(/(#*//(#%#*/(/*/#/%&(#(*/*//#(#/(@%#/(/(/*%&@%#(/#((/(#(#((#%@(#/#(#(#//*(/(#(#(((#(#/#%#(#((#(#(#(#/(/(#(#((#*/#(/(/((/(/%(/((/#%##//(#(#%#%#/*#%#%((*,(&##%",
			binary: "011010010111010000100000011101110110000101110011001000000110110001101001011010110110010100100000011101000110100001101001011100110010000001100101011101100110010101110010011110010010000001101101011011110111001001101110011010010110111001100111",
			data: "196201, 2.82, 21.7,-1.82,-1.82, -.22,-1.82,0, 1239, -.04, -.37, -.24, -.94, -.54, -.06, -.17,196202, 3.08, 20.8,-1.35,-1.35,.85, -.87,0, 1173,.53,.21,-.1, -.71, -.54, -.11,-.3,196203,2.2, 33.5,-1.81,-1.81,-1.78,-1.81,0,917,-1.09, -.47, -.52, -.81, -.94, -.32,-.3,196204, 3.88, 44.7,-1.36,-1.36,.79,-.9,0,558,.53, -.37, -.11, -.27, -.87, -.58, -.24,196205, 2.09, 57.4,-2.11,-2.11,-2.69,-2.11,4,306,-1.31, -.48,-1.08, -.88,-1.13, -.94, -.54,196206,3, 65.3,-2.42,-2.42,-1.58,-2.42, 68, 48,-.6,-1.42, -.75, -1,-1.06,-1.12, -.62,196207, 3.36, 66.1,-2.36,-2.36, -.55,-2.36, 88, 36, -.43,-.7, -1.3,-1.05, -.98,-1.31, -.79,196208, 3.63, 66.7,-2.28,-2.28, -.51,-2.28,104, 33, -.08, -.48, -.73,-1.23, -1.1,-1.22, -.67,196209, 3.73, 57.1,-1.93,-1.93,.35,-1.71,8,189,.19,.02, -.28, -.72, -.96, -1, -.83,196210, 4.24, 49.3,-1.34,-1.34, 1.17, -.54,0,457,.66, .5,.34, -.57, -.61, -.62, -.63,196211, 3.46, 35.5, -.97, -.97,.71,.16,0,803,.09,.52,.43, -.15, -.68, -.67, -.51,196212,3.1, 23.2, -.94, -.94, -.22,.08,0, 1215, -.07, -.01,.36,.04, -.33, -.55, -.36",
			chancenotes: "Code is a literature ::: a pattern language ::: a score. It is a choreography ::: a performance. A code renderer is the weaver ::: the mill ::: the alchemist ::: the wizard. Code is a spell ::: an incantation ::: an intent. Chance is a frayed thread, a stochastic cloud, a pointillist field, a variance, a complexity, an uncertainty, a ragged line.  When code is performed, it is an activation of text ::: a linguistic gymnastics that speaks in image & sound. In a perfect confluence of electricity, network, rhythm, memory, processing, action & reactions a program comes to life ::: Pinocchio  ::: a real boi at last. The program (the cybernetic ze) speaks to us, calculates for us, responds to our touch : our keystrokes. It becomes our mirror :|: our cyborg self ::: our memory.. ",
			chancelecturewebs: [": : :", "|:|:| <<-- ::: . ::: -->> |:|:|", "networks", "webs","spiders", "quartets", "the body", "the infinite sky", "the networked (i)", "chords", "tone rows", "electrical current", "radio transmissions", "telephone wires", "choreographies", "scores", "sculpture", "hypertext", "material", "palette", "light", "echo", "resonance", "rivers", "wind mills", "differential equations", "(how things change)", "the carbon cycle", "pipelines", "systems", "cities", "food web", "lattice", "tree", "graph",  "space", "orchestration", "digital cloud", "multi threaded", "multi lingual", "multi dimensional", "infinite between", "gender fluid", "attraction", "diffusion", "distraction", "friction", "resonation", "intra dependent", "ecosystem", "galaxies", "arteries", "cellular connections", "forests", "histories", "the modernist grid", "the API"],
			chancelecturecyborg: ["the cyborg", "trans / border", "trans / platform", "trans / media", "trans / figured", "trans / formed", "trans / gender", "say my name", "cybernetix ze", "cybernetic she", "networked (i)"],
			chancelecture: ["xœ½YMo", "7½Ï¯ÐØ‰", "(~H‚=$môP", "oAéÚi{", "Øöï÷Q³", "k{Vj½:YÃ", "#š#½Gj%’’)", "DüìJIÂá8¹", "×´üýçÝôêÝ=", "it was", "like this", "every morning", ". . .", "networks", "quartets", "sine waves", "infinite sky", "networked (i)", "chordal looms", "time", "electrical currents", "radio transmissions", "telephone wires", "hypertext sea", "torrents", "navigation", "score", "script", "material", "palette", "light", "resonance", "rivers", "wind mills", "/#&@%#*/#%(", "cities", "echo &amp; &amp;", "algorithms", "functions", "streams", "sound", "books", "words", "vectors", "code", "glyphs", "chalk pigment", "charcoal graphite", "house paint", "wood", "fragments", "web browsers", "computing machines", "the cloud", "the number 4", "red black", "white yellow", "electrical wires", "the carbon cycle", "the room", "rising walls", "the sky", "timelines", "random numbers", "circles lines", "body", "hand", "pitch", "bone", "sinew", "horse hair", "resin", "reed", "taut wire", "&infin; canvas sky", "cloud compass", "warp &amp; weft", "magnetic poles", "traversals", "transects", "densities", "gravities", "elliptical", "bendable time", "physical time", "manifest time", "open systems", "emergent systems", "evolving systems", "weather", "seasons", "night train", "blue window", "lonely passenger", "the century !", "the universe !", "industry !", "sandwiches", "a coin", "7 heavens", "winged angels", "holy, holy, høly", "love, love", "&amp; &amp; &amp;", "flight", "count", "map", "pulse", "breathe", "a topology", "a calculus", "an algebra", "ascensions", "extinctions", "trains", "grids", "clocks", "gears", "|:|:|Ø|:|:|", "threads |:| twisted", "crash of waves", "diffusion", "friction", "fray", "echo", "galaxies", "arteries", "neural nets", "forests", "food webs", "labyrinths", "histories", "an API", "technicolor", "galaxies", "infinities", "photosynthesis", "the swarm", "|:|:|<<--:::-->>|:|:|", "chance", "frayed thread", "stochastic cloud", "pointillist field", "variance", "complexity", "uncertainty", "ragged line", "prayer", "hYmn", "spell", "incantation", "invocation", "resistance", "persistence", "siren's lure", "witness", "|:|:|<<--:::-->>|:|:|", "net. x (i)", "(n) coded", "orchestrate", "activate", "pattern language", "digital score", "distillation", "choreography", "performance", "spell ::: ", "::: incantation", "intent", "code", "confluence ", "electricity &amp; network", "rhythm &amp; memory", "map filter reduce", "act || react", "code is", "a literature", "::: a poetry", "= > an intimacy", "fingers", "tapping glass", ": || : rubbing glass", "aladdin's lamp", "fiber optics", "the cyborg body", "the fragile", "electric", "body", "say my name", "|:|:|<<--:::-->>|:|:|", "the cyborg", "trans / border", "trans / platform", "trans / media", "trans / figured", "trans / formed", "trans / gender", "cybernetic ze", "cybernetic she", "web spider", "alchemist", "ø Z ", "omniscient", "machine learner", "data consumer", "sensitive", "cybernetic", "skull", "(m) bodied", "intelligence", "networked (i)", "encrypted cipher", "mechanized logic", "thinking loom", "subterranean gears", "::: heart / beat", "networked omniscience", "super intelligent øZ", "big data oracle", "gepetto's workshop", "pinocchio ::: ", ". reAl boi", "zero / øne", "true / false", "on || off", "magnetic s/ze", "(i) mirror you ::: ", "speak to you", "|:|:|  remember", "your fingerprints", "your irises", "your steps &amp;&amp;", "destinations", "purchases", "preferences", "tickets", "searches", "longings", "your intimate", "data sets", "your imprint", "signals", "blood || circuits", "pulse", "|:|:|<<--:::-->>|:|:|", "memory", "trace", "(i) i ."],
		},
	};
	z.radio = {
		player: {}, loading: [], loaded: false,
		soundplaying:false,
		clips: {},
		clipduration: { min:0, max:0 },
		nbuffersplaying: 0, maxbuffersplaying: 14,
		intervals: {
			lowi: function(basetone){ return Math.floor(basetone/4) },
			i: function(basetone){ return Math.floor(basetone/2) },
			I: function(basetone){ return Math.floor(basetone/1) },
			II: function(basetone){ return Math.floor(basetone*9/8) },
			III: function(basetone){ return Math.floor(basetone*5/4) },
			iii: function(basetone){ return Math.floor(basetone*6/5) },
			IV: function(basetone){ return Math.floor(basetone*4/3) },
			V: function(basetone){ return Math.floor(basetone*3/2) },
			VI: function(basetone){ return Math.floor(basetone*5/3) },
			VII: function(basetone){ return Math.floor(basetone*15/8) },
			vii: function(basetone){ return Math.floor(basetone*9/5) },
			VIII: function(basetone){ return Math.floor(basetone*2) },
		},
		load: (instruments=["bagpipe1f"]) => {
			instruments.map( name => z.data.sound.instruments[name]).forEach( instrument => {
				z.radio.clips[instrument.clip] = { url: z.data.sound.baseclipurl + instrument.clip + ".mp3", loaded:false, duration:0, buffer:{} };
			});
			Object.keys(z.radio.clips).forEach( key => {
				let clip = z.radio.clips[key];
				if(!z.radio.loading.includes(clip.url)) {
					z.radio.loading.push(clip.url);
					let request = new XMLHttpRequest();
					//for localhost testing
					// request.open("GET", window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/" + clip.url, true);
					// z.tools.logmsg("url = " + window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/" + clip.url);
					// for deploy
					request.open("GET", window.location.protocol + "//" + window.location.hostname + "/" + clip.url, true);
					// z.tools.logmsg("url = " + window.location.protocol + "//" + window.location.hostname + "/"  + clip.url);
					request.responseType = "arraybuffer";
					request.onload = () =>  {
						z.tools.logmsg("loaded ::: " + clip.url);
						z.radio.player.context.decodeAudioData(request.response, buffer => {
							clip.loaded = true;
							clip.buffer = buffer;
							clip.duration = clip.buffer.duration;
							if( clip.duration > z.radio.clipduration.max) {z.radio.clipduration.max = clip.duration}
							else if( clip.duration < z.radio.clipduration.min) {z.radio.clipduration.min  = clip.duration}
							z.tools.logmsg("decoded ::: " + clip.url);
						}, e => {
							z.tools.logerror("audio error! clip = " + clip.url + ", err = " + e);
						});
						
					};
					request.send();
				}
			});
			z.radio.loaded = true;
		},
		start: () => {
			/* set up player*/
			window.AudioContext = window.AudioContext || window.webkitAudioContext;
			z.radio.player.context = new AudioContext();
			/* experimental parameters */
			let parameters = [
				{ gain: 0.4, threshold: -24, knee: 30, ratio: 12, attack: 0.003, release: 0.25 }, //default
				{ gain: 0.3, threshold: -18, knee: 30, ratio: 18, attack: 0.0003, release: 0.28 },
				{ gain: 0.5, threshold: -8, knee: 30, ratio: 18, attack: 0.003, release: 0.28 },
				{ gain: 0.8, threshold: -8, knee: 30, ratio: 18, attack: 0.003, release: 0.28 },
				];
			let n = 0;

			//with compressor
			z.radio.player.compressor = z.radio.player.context.createDynamicsCompressor();
			z.radio.player.compressor.threshold.value = parameters[n].threshold;
			z.radio.player.compressor.knee.value = parameters[n].knee;
			z.radio.player.compressor.ratio.value = parameters[n].ratio;
			
			z.radio.player.compressor.attack.value = parameters[n].attack;
			z.radio.player.compressor.release.value = parameters[n].release;
			z.radio.player.gain = z.radio.player.context.createGain();
			z.radio.player.gain.value = parameters[n].gain;
			z.radio.player.compressor.connect(z.radio.player.gain);
			z.radio.player.gain.connect(z.radio.player.context.destination);
			// //with no compressor
			// z.radio.player.gain = z.radio.player.context.createGain();
			// z.radio.player.gain.value = parameters[n].gain;
			// z.radio.player.gain.connect(z.radio.player.context.destination);
		},
		playtone: ({ volume=0.8, delay=0, fadetime=0.1, duration=1.0, frequency=380 } = {}) => { 
			let vco = z.radio.player.context.createOscillator();
			vco.frequency.value = frequency;
			vco.type = "sine";
			let vca = z.radio.player.context.createGain();
			
			vco.connect(vca);
			vca.connect(z.radio.player.gain);
			let now = z.radio.player.context.currentTime;
			//fade in
			vca.gain.exponentialRampToValueAtTime(0.001, now + delay);
			vca.gain.exponentialRampToValueAtTime(volume, now + fadetime + delay);
			//fade out
			vca.gain.exponentialRampToValueAtTime(volume, now + duration + delay - fadetime);
			vca.gain.exponentialRampToValueAtTime(0.001, now + duration + delay);
			vco.start(now + delay);
			vco.stop(now + delay + duration + fadetime);
			vco.onended = function() {
			  	vco.disconnect(); vca.disconnect();
			}
		},
		playbuffer: ( { volume=0.8, delay=0, fadetime=1, duration=2, instrumentname="bagpipe1f" } = {} ) =>  {
			try {
				let instrument = z.data.sound.instruments[instrumentname];
				let clip = z.radio.clips[instrument.clip];
				z.tools.logmsg("***buffer requested = " + instrument.clip + " z.radio.nbuffersplaying = " + z.radio.nbuffersplaying);
				if(clip.loaded && (z.radio.nbuffersplaying<z.radio.maxbuffersplaying-1 || z.radio.nbuffersplaying>z.radio.maxbuffersplaying+2)) {
					let rate = instrument.playbackRate ? instrument.playbackRate() : 1.0;
					try {
						// z.tools.logmsg("rate = " + rate + " ::: duration = " + clip.duration*rate);
						let vca = z.radio.player.context.createGain(); 
						let source = z.radio.player.context.createBufferSource();
						source.buffer = clip.buffer;
						source["playbackRate"].value = rate;
						source.connect(vca);
						vca.connect(z.radio.player.gain);
						source.loop = false;
						source.onended = e =>  { 
							z.radio.nbuffersplaying=z.radio.nbuffersplaying-1;
						};
						++z.radio.nbuffersplaying;
						let now = z.radio.player.context.currentTime;
						let dur = clip.duration < duration ? clip.duration/rate : rate*duration/rate;
						let dt = Math.min(fadetime, dur*.25);
						let offset = z.tools.randominteger(0, (dur-4*dt)*10)/10;
						// source.start(now, offset, dt*4); //parameters (when,offset,duration)
						vca.gain.setValueAtTime(0.001, now);
						vca.gain.exponentialRampToValueAtTime(volume, now + dt);
						vca.gain.setValueAtTime(volume, dur - 2*dt);
						vca.gain.exponentialRampToValueAtTime(0.001, now + dur-dt*0.5 );
						source.start(now, offset, dur); //parameters (when,offset,duration)
						// z.tools.logmsg("playing = " + clip.url);
					} catch(e) { z.tools.logerror("error applying params to audio buffer e::: " + e) }
				}
				else {	
					z.tools.logmsg("NOT playing = " + clip.url);
				}
			}
			catch(err) { z.tools.logerror("line playbuffer" + err) }
		},
		playtracks: ( { volume=0.8, delay=0, fadetime=1, duration=2, tracks=[] } ) => {

		}
	};
	//core elements
	z.elements = ( () => {
		return {
			body: { el: document.querySelector("body") },
			main: { el: document.querySelector("main") },
			// clock: { el: document.querySelector("#clock") },
			// telegraph: { el: document.querySelector("#telegraph") },
			svg:  { el: document.querySelector("#svg") },
			frames: ["subtextframe", "svgframe", "wordframe", "contentframe"].reduce( (acc, id) => {
				z.tools.logmsg("create frame element ::: " + id);
				acc[id] = { el: document.querySelector("#"+id) };
				return acc;
			}, {}),
		}
	})()
	z.streams = {
		clock: ( () => {
		let dt = 1;
		let date0 = new Date();
		let t0 = Math.floor(date0.getTime()/1000);
		let state0 = { dt: dt, count: 0, date: date0, t: t0, t0: t0 };
		return Kefir.withInterval( dt*1000, emitter => { emitter.emit( { date: new Date() } ) })
				.scan( (state, e) => { 
					state.date = e.date;
					state.t = Math.floor(e.date.getTime()/1000);
					state.count = state.count + 1;
					return state;
				}, state0  )
		})( ),
		dimensions: ( () => {
			let dt = .4;
			const ngrids=[2,2], npasts=[0,0];
			let state0 = { dt: dt, count: 0,
				grid: { nrows: ngrids[v], ncols: ngrids[v], dx: Math.floor(width/ngrids[v]), dy: Math.floor(height/ngrids[v]), sw: 12, pastn: npasts[v] },
				width: width, height: height, 
				max: max, min: min, 
			};
			return Kefir.fromEvents(window, "resize").throttle(dt*1000)
				.scan( (state,e) => {
					state.width = window.innerWidth;
					state.height = window.innerHeight;
					state.max = Math.max(state.width, state.height);
					state.min = Math.min(state.width, state.height);
					state.grid.dx = Math.floor(state.width/state.grid.ncols);
					state.grid.dy = Math.floor(state.height/state.grid.nrows);
					state.grid.sw = Math.floor(Math.max(state.grid.dx*.03, state.grid.dy*.03, 4));
					return state
				}, state0) 
		})( ),
	};
	return z;
};