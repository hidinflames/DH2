export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	/*
	name: {
		fusion: ['P1', 'P2'],
		num: x.5,
		name: "Name",
		types: [""],
		baseStats: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
		abilities: {0: ""},
		weightkg: ,
	},
	
	*/
	//Set 1
	volquag: {
		fusion: ['Volcanion', 'Quagsire'],
		num: 1,
		name: "Volquag",
		types: ["Fire", "Water"],
		baseStats: {hp: 90, atk: 97, def: 111, spa: 97, spd: 83, spe: 65},
		abilities: {0: "Porous"},
		weightkg: 135,
	},
	toxalure: {
		fusion: ['Toxapex', 'Chandelure'],
		num: 2,
		name: "Toxalure",
		types: ["Ghost", "Water"],
		baseStats: {hp: 55, atk: 79, def: 121, spa: 109, spd: 116, spe: 67},
		abilities: {0: "Despicable"},
		weightkg: 24.4,
	},
	kingtsar: {
		fusion: ['Kingler', 'Tsareena'],
		num: 3,
		name: "Kingtsar",
		types: ["Water", "Grass"],
		baseStats: {hp: 79, atk: 130, def: 115, spa: 50, spd: 74, spe: 83},
		abilities: {0: "King's Guard"},
		weightkg: 40.7,
	},
	tanette: {
		fusion: ['Tangela', 'Floette'],
		num: 4,
		name: "Tanette",
		types: ["Fairy", "Grass"],
		baseStats: {hp: 60, atk: 50, def: 100, spa: 95, spd: 80, spe: 57},
		abilities: {0: "Growth Veil"},
		weightkg: 17.9,
		evos: ["Tangrowth", "Florges"],
	},
	slowton: {
		fusion: ['Slowking-Galar', 'Magneton'],
		num: 5,
		name: "Slowton",
		types: ["Poison", "Electric"],
		baseStats: {hp: 92, atk: 62, def: 97, spa: 115, spd: 100, spe: 50},
		abilities: {0: "Surgeon Eye"},
		weightkg: 69.7,
	},
	
	//Set 2
	flaant: {
		fusion: ['Flapple', 'Durant'],
		num: 6,
		name: "Flaant",
		types: ["Grass", "Bug"],
		baseStats: {hp: 76, atk: 114, def: 109, spa: 76, spd: 79, spe: 109},
		abilities: {0: "Hustle"},
		weightkg: 17,
	},
	umbat: {
		fusion: ['Umbreon', 'Crobat'],
		num: 7,
		name: "Umbat",
		types: ["Flying", "Dark"],
		baseStats: {hp: 115, atk: 82, def: 110, spa: 70, spd: 110, spe: 112},
		abilities: {0: "Inner Focus"},
		weightkg: 51,
	},
	chomplim: {
		fusion: ['Garchomp', 'Drifblim'],
		num: 8,
		name: "Chomplim",
		types: ["Ground", "Ghost"],
		baseStats: {hp: 129, atk: 105, def: 79, spa: 105, spd: 79, spe: 91},
		abilities: {0: "Rough Result"},
		weightkg: 55,
		otherFormes: ["Chomplim-Mega"],
		formeOrder: ["Chomplim", "Chomplim-Mega"],
	},
	chomplimmega: {
		fusion: ['Garchomp', 'Drifblim'],
		num: 8,
		name: "Chomplim-Mega",
		baseSpecies: "Chomplim",
		forme: "Mega",
		types: ["Ground", "Ghost"],
		baseStats: {hp: 129, atk: 145, def: 99, spa: 145, spd: 89, spe: 81},
		abilities: {0: "Sand Force"},
		weightkg: 55,
		requiredItem: "Chomplimite",
	},
	xotalion: {
		fusion: ['Xatu', 'Cobalion'],
		num: 9,
		name: "Xotalion",
		types: ["Psychic", "Steel"],
		baseStats: {hp: 78, atk: 102, def: 99, spa: 102, spd: 71, spe: 111},
		abilities: {0: "Eye for an Eye"},
		weightkg: 132.5,
	},
	miemie: {
		fusion: ['Mienshao', 'Starmie'],
		num: 10,
		name: "Miemie",
		types: ["Fighting", "Psychic"],
		baseStats: {hp: 70, atk: 109, def: 72, spa: 109, spd: 72, spe: 121},
		abilities: {0: "Natural Heal"},
		weightkg: 57.8,
	},
	dusking: {
		fusion: ['Dusknoir', 'Slowking-Galar'],
		num: 11,
		name: "Dusking",
		types: ["Ghost", "Psychic"],
		baseStats: {hp: 80, atk: 85, def: 125, spa: 90, spd: 125, spe: 40},
		abilities: {0: "King of Power Points"},
		weightkg: 93.1,
	},
	jelliswine: {
		fusion: ['Jellicent', 'Mamoswine'],
		num: 12,
		name: "Jelliswine",
		types: ["Ghost", "Ground"],
		baseStats: {hp: 105, atk: 95, def: 85, spa: 97, spd: 87, spe: 75},
		abilities: {0: "Porous Fat"},
		weightkg: 213,
	},
	
	//Set 3
	pigapult: {
		fusion: ['Pignite', 'Dragapult'],
		num: 13,
		name: "Pigapult",
		types: ["Fire", "Dragon"],
		baseStats: {hp: 89, atk: 106, def: 65, spa: 105, spd: 65, spe: 118},
		abilities: {0: "Inthicktrator"},
		weightkg: 52.8,
	},
	silvino: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino",
		types: ["Normal"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
		otherFormes: [
			"Silvino-Bug", "Silvino-Dark", "Silvino-Dragon", "Silvino-Electric", "Silvino-Fairy", "Silvino-Fighting", "Silvino-Fire", "Silvino-Flying", "Silvino-Ghost", "Silvino-Grass", "Silvino-Ground", "Silvino-Ice", "Silvino-Poison", "Silvino-Psychic", "Silvino-Rock", "Silvino-Steel", "Silvino-Water",
			"Silvino-Bug-Mega", "Silvino-Dark-Mega", "Silvino-Dragon-Mega", "Silvino-Electric-Mega", "Silvino-Fairy-Mega", "Silvino-Fighting-Mega", "Silvino-Fire-Mega", "Silvino-Flying-Mega", "Silvino-Ghost-Mega", "Silvino-Grass-Mega", "Silvino-Ground-Mega", "Silvino-Ice-Mega", "Silvino-Poison-Mega", "Silvino-Psychic-Mega", "Silvino-Rock-Mega", "Silvino-Steel-Mega", "Silvino-Water-Mega"
		],
		formeOrder: [
			"Silvino", "Silvino-Fighting", "Silvino-Flying", "Silvino-Poison", "Silvino-Ground", "Silvino-Rock", "Silvino-Bug", "Silvino-Ghost", "Silvino-Steel",
			"Silvino-Fire", "Silvino-Water", "Silvino-Grass", "Silvino-Electric", "Silvino-Psychic", "Silvino-Ice", "Silvino-Dragon", "Silvino-Dark", "Silvino-Fairy",
			"Silvino-Mega", "Silvino-Fighting-Mega", "Silvino-Flying-Mega", "Silvino-Poison-Mega", "Silvino-Ground", "Silvino-Rock-Mega", "Silvino-Bug-Mega", "Silvino-Ghost-Mega", "Silvino-Steel-Mega",
			"Silvino-Fire-Mega", "Silvino-Water-Mega", "Silvino-Grass-Mega", "Silvino-Electric-Mega", "Silvino-Psychic-Mega", "Silvino-Ice-Mega", "Silvino-Dragon-Mega", "Silvino-Dark-Mega", "Silvino-Fairy-Mega",
		],
	},
	silvinomega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Mega",
		baseSpecies: "Silvino",
		forme: "Mega",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino",
	},
	lycanserkerdusk: {
		fusion: ['Lycanroc-Dusk', 'Perrserker'],
		num: 15,
		name: "Lycanserker-Dusk",
		types: ["Rock", "Steel"],
		baseStats: {hp: 77, atk: 118, def: 87, spa: 57, spd: 87, spe: 105},
		abilities: {0: "Tough Claws"},
		weightkg: 26.5,
	},
	tapulop: {
		fusion: ['Lopunny', 'Tapu Lele'],
		num: 16,
		name: "Tapu Lop",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 80, atk: 80, def: 95, spa: 98, spd: 105, spe: 105},
		abilities: {0: "Magic Surge"},
		weightkg: 26,
	},
	tapulopmega: {
		fusion: ['Lopunny', 'Tapu Lele'],
		num: 16,
		name: "Tapu Lop-Mega",
		baseSpecies: "Tapu Lop",
		forme: "Mega",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 80, atk: 140, def: 105, spa: 98, spd: 105, spe: 135},
		abilities: {0: "Scrappy"},
		weightkg: 23.5,
	},
	dragontler: {
		fusion: ['Stantler', 'Dragonite'],
		num: 17,
		name: "Dragontler",
		types: ["Normal", "Flying"],
		baseStats: {hp: 85, atk: 125, def: 80, spa: 95, spd: 85, spe: 100},
		abilities: {0: "Multi Antlers"},
		weightkg: 140.6,
	},
	eternabat: {
		fusion: ['Eternatus', 'Woobat'],
		num: 18,
		name: "Eternabat",
		types: ["Flying", "Dragon"],
		baseStats: {hp: 103, atk: 73, def: 73, spa: 123, spd: 73, spe: 101},
		abilities: {0: "Concussion"},
		weightkg: 476.1,
	},
	//new set
	grimmlurk: {
		fusion: ['Grimmsnarl', 'Golurk'],
		num: 19,
		name: "Grimmlurk",
		types: ["Fairy", "Ghost"],
		baseStats: {hp: 95, atk: 125, def: 90, spa: 75, spd: 90, spe: 60},
		abilities: {0: "Open-Handed"},
		weightkg: 195.5,
	},
	manicunogalar: {
		fusion: ['Articuno-Galar', 'Darmanitan-Galar'],
		num: 20,
		name: "Manicuno-Galar",
		types: ["Ice", "Psychic"],
		baseStats: {hp: 100, atk: 112, def: 74, spa: 97, spd: 88, spe: 97},
		abilities: {0: "Fowl Behavior"},
		weightkg: 85.5,
	},
	yaciancrowned: {
		fusion: ['Yamask-Galar', 'Zacian'],
		num: 21,
		name: "Yacian-Crowned",
		types: ["Ground", "Steel"],
		baseStats: {hp: 66, atk: 125, def: 100, spa: 66, spd: 105, spe: 89},
		abilities: {0: "Pillage"},
		weightkg: 178.3,
	},
	cryogolem: {
		fusion: ['Cryogonal', 'Golem-Alola'],
		num: 22,
		name: "Cryogolem",
		types: ["Ice", "Electric"],
		baseStats: {hp: 80, atk: 105, def: 90, spa: 75, spd: 100, spe: 95},
		abilities: {0: "Magnetic Waves"},
		weightkg: 232,
	},
	stoudrago: {
		fusion: ['Stoutland', 'Regidrago'],
		num: 23,
		name: "Stoudrago",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 150, atk: 120, def: 70, spa: 85, spd: 70, spe: 85},
		abilities: {0: "Doggy's Maw"},
		weightkg: 130.5,
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	silvinobug: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Bug",
		baseSpecies: "Silvino",
		forme: "Bug",
		types: ["Bug"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinobugmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Bug-Mega",
		baseSpecies: "Silvino",
		forme: "Bug-Mega",
		types: ["Bug", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Bug",
	},
	silvinodark: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Dark",
		baseSpecies: "Silvino",
		forme: "Dark",
		types: ["Dark"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinodarkmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Dark-Mega",
		baseSpecies: "Silvino",
		forme: "Dark-Mega",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Dark",
	},
	silvinodragon: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Dragon",
		baseSpecies: "Silvino",
		forme: "Dragon",
		types: ["Dragon"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinodragonmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Dragon-Mega",
		baseSpecies: "Silvino",
		forme: "Dragon-Mega",
		types: ["Dragon", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Dragon",
	},
	silvinoelectric: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Electric",
		baseSpecies: "Silvino",
		forme: "Electric",
		types: ["Electric"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinoelectricmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Electric-Mega",
		baseSpecies: "Silvino",
		forme: "Electric-Mega",
		types: ["Electric", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Electric",
	},
	silvinofairy: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Fairy",
		baseSpecies: "Silvino",
		forme: "Fairy",
		types: ["Fairy"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinofairymega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Fairy-Mega",
		baseSpecies: "Silvino",
		forme: "Fairy-Mega",
		types: ["Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Fairy",
	},
	silvinofighting: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Fighting",
		baseSpecies: "Silvino",
		forme: "Fighting",
		types: ["Fighting"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinofightingmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Fighting-Mega",
		baseSpecies: "Silvino",
		forme: "Fighting-Mega",
		types: ["Fighting", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Fighting",
	},
	silvinofire: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Fire",
		baseSpecies: "Silvino",
		forme: "Fire",
		types: ["Fire"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinofiremega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Fire-Mega",
		baseSpecies: "Silvino",
		forme: "Fire-Mega",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Fire",
	},
	silvinoflying: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Flying",
		baseSpecies: "Silvino",
		forme: "Flying",
		types: ["Flying"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinoflyingmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Flying-Mega",
		baseSpecies: "Silvino",
		forme: "Flying-Mega",
		types: ["Flying", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Flying",
	},
	silvinoghost: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Ghost",
		baseSpecies: "Silvino",
		forme: "Ghost",
		types: ["Ghost"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinoghostmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Ghost-Mega",
		baseSpecies: "Silvino",
		forme: "Ghost-Mega",
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Ghost",
	},
	silvinograss: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Grass",
		baseSpecies: "Silvino",
		forme: "Grass",
		types: ["Grass"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinograssmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Grass-Mega",
		baseSpecies: "Silvino",
		forme: "Grass-Mega",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Grass",
	},
	silvinoground: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Ground",
		baseSpecies: "Silvino",
		forme: "Ground",
		types: ["Ground"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinogroundmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Ground-Mega",
		baseSpecies: "Silvino",
		forme: "Ground-Mega",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Ground",
	},
	silvinoice: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Ice",
		baseSpecies: "Silvino",
		forme: "Ice",
		types: ["Ice"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinoicemega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Ice-Mega",
		baseSpecies: "Silvino",
		forme: "Ice-Mega",
		types: ["Ice", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Ice",
	},
	silvinopoison: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Poison",
		baseSpecies: "Silvino",
		forme: "Poison",
		types: ["Poison"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinopoisonmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Poison-Mega",
		baseSpecies: "Silvino",
		forme: "Poison-Mega",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Poison",
	},
	silvinopsychic: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Psychic",
		baseSpecies: "Silvino",
		forme: "Psychic",
		types: ["Psychic"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinopsychicmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Psychic-Mega",
		baseSpecies: "Silvino",
		forme: "Psychic-Mega",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Psychic",
	},
	silvinorock: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Rock",
		baseSpecies: "Silvino",
		forme: "Rock",
		types: ["Rock"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinorockmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Rock-Mega",
		baseSpecies: "Silvino",
		forme: "Rock-Mega",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Rock",
	},
	silvinosteel: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Steel",
		baseSpecies: "Silvino",
		forme: "Steel",
		types: ["Steel"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinosteelmega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Steel-Mega",
		baseSpecies: "Silvino",
		forme: "Steel-Mega",
		types: ["Steel", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Steel",
	},
	silvinowater: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Water",
		baseSpecies: "Silvino",
		forme: "Water",
		types: ["Water"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 90, spd: 95, spe: 75},
		abilities: {0: "Null System"},
		weightkg: 65.8,
	},
	silvinowatermega: {
		fusion: ['Audino', 'Silvally'],
		num: 14,
		name: "Silvino-Water-Mega",
		baseSpecies: "Silvino",
		forme: "Water-Mega",
		types: ["Water", "Fairy"],
		baseStats: {hp: 100, atk: 90, def: 135, spa: 110, spd: 135, spe: 75},
		abilities: {0: "Healer"},
		weightkg: 66.3,
		battleOnly: "Silvino-Water",
	},
	

};