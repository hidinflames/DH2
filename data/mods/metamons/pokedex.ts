export const Pokedex: {[speciesid: string]: SpeciesData} = {
	whimsicott: {
		num: 547,
		name: "Whimsicott",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 50, atk: 67, def: 115, spa: 97, spd: 95, spe: 106},
		abilities: {0: "Prankster", 1: "Infiltrator", H: "Cotton Down"},
		heightm: 0.7,
		weightkg: 6.6,
		color: "Green",
		prevo: "Cottonee",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Fairy", "Grass"],
	},
	salazzle: {
		num: 758,
		name: "Salazzle",
		types: ["Poison", "Flying"],
		gender: "F",
		baseStats: {hp: 68, atk: 84, def: 60, spa: 111, spd: 60, spe: 127},
		abilities: {0: "Corrosion", H: "Oblivious"},
		heightm: 1.2,
		weightkg: 22.2,
		color: "Black",
		evoLevel: 33,
		eggGroups: ["Monster", "Dragon"],
	},
	kingler: {
		num: 99,
		name: "Kingler",
		types: ["Water", "Ice"],
		baseStats: {hp: 60, atk: 140, def: 60, spa: 95, spd: 60, spe: 80},
		abilities: {0: "Hyper Cutter", 1: "Sheer Force", H: "Swift Swim"},
		heightm: 1.3,
		weightkg: 60,
		color: "Red",
		evoLevel: 28,
		eggGroups: ["Water 3"],
	},
	ariados: {
		num: 168,
		name: "Ariados",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 70, atk: 90, def: 70, spa: 90, spd: 70, spe: 120},
		abilities: {0: "Swarm", 1: "Insomnia", H: "Dragon's Maw"},
		heightm: 1.1,
		weightkg: 33.5,
		color: "Red",
		evoLevel: 22,
		eggGroups: ["Bug"],
	},
	sandslash: {
		num: 28,
		name: "Sandslash",
		types: ["Ground"],
		baseStats: {hp: 85, atk: 120, def: 80, spa: 35, spd: 95, spe: 65},
		abilities: {0: "Unnerve", 1: "Immunity", H: "Iron Barbs"},
		heightm: 1,
		weightkg: 29.5,
		color: "Yellow",
		prevo: "Sandshrew",
		evoLevel: 22,
		eggGroups: ["Field"],
	},
	bastiodon: {
		num: 411,
		name: "Bastiodon",
		types: ["Rock", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 52, def: 168, spa: 47, spd: 138, spe: 30},
		abilities: {0: "Sturdy", H: "Bulletproof"},
		heightm: 1.3,
		weightkg: 149.5,
		color: "Gray",
		prevo: "Shieldon",
		evoLevel: 30,
		eggGroups: ["Monster"],
	},
	slowbrogalar: {
		num: 80,
		name: "Slowbro-Galar",
		baseSpecies: "Slowbro",
		forme: "Galar",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 80, atk: 130, def: 95, spa: 90, spd: 95, spe: 30},
		abilities: {0: "Quick Draw", 1: "Analytic", H: "Regenerator"},
		heightm: 1.6,
		weightkg: 70.5,
		color: "Pink",
		prevo: "Slowpoke-Galar",
		evoType: "useItem",
		evoItem: "Galarica Cuff",
		eggGroups: ["Monster", "Water 1"],
	},
	sableye: {
		num: 302,
		name: "Sableye",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 85, atk: 70, def: 100, spa: 60, spd: 100, spe: 30},
		abilities: {0: "Magic Guard", H: "Prankster"},
		heightm: 0.5,
		weightkg: 11,
		color: "Purple",
		eggGroups: ["Human-Like"],
	},
	grapploct: {
		num: 853,
		name: "Grapploct",
		types: ["Fighting", "Water"],
		baseStats: {hp: 100, atk: 118, def: 90, spa: 60, spd: 90, spe: 42},
		abilities: {0: "Limber", 1: "Abyssal Boost", H: "Technician"},
		heightm: 1.6,
		weightkg: 39,
		color: "Blue",
		prevo: "Clobbopus",
		evoType: "levelMove",
		evoMove: "Taunt",
		eggGroups: ["Water 1", "Human-Like"],
	},
	tauros: {
		num: 128,
		name: "Tauros",
		types: ["Normal"],
		gender: "M",
		baseStats: {hp: 80, atk: 90, def: 70, spa: 90, spd: 70, spe: 100},
		abilities: {0: "Sheer Force", H: "Adaptability"},
		heightm: 1.4,
		weightkg: 88.4,
		color: "Brown",
		eggGroups: ["Field"],
	},
	arcanine: {
		num: 59,
		name: "Arcanine",
		types: ["Fire", "Ground"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 100, atk: 110, def: 80, spa: 85, spd: 80, spe: 100},
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Justified"},
		heightm: 1.9,
		weightkg: 155,
		color: "Brown",
		prevo: "Growlithe",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	eelektross: {
		num: 604,
		name: "Eelektross",
		types: ["Electric"],
		baseStats: {hp: 85, atk: 115, def: 80, spa: 105, spd: 80, spe: 75},
		abilities: {0: "Levitate", H: "Type Suction"},
		heightm: 2.1,
		weightkg: 80.5,
		color: "Blue",
		prevo: "Eelektrik",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Amorphous"],
	},
	perrserker: {
		num: 863,
		name: "Perrserker",
		types: ["Steel", "Ghost"],
		baseStats: {hp: 85, atk: 110, def: 70, spa: 60, spd: 100, spe: 65},
		abilities: {0: "Unnerve", 1: "Tough Claws", H: "Steely Spirit"},
		heightm: 0.8,
		weightkg: 28,
		color: "Brown",
		prevo: "Meowth-Galar",
		evoLevel: 28,
		eggGroups: ["Field"],
	},
	tsareena: {
		num: 763,
		name: "Tsareena",
		types: ["Grass", "Ghost"],
		gender: "F",
		baseStats: {hp: 72, atk: 120, def: 98, spa: 50, spd: 98, spe: 72},
		abilities: {0: "Leaf Guard", 1: "Queenly Majesty", H: "Sweet Veil"},
		heightm: 1.2,
		weightkg: 21.4,
		color: "Purple",
		prevo: "Steenee",
		evoType: "levelMove",
		evoMove: "Stomp",
		eggGroups: ["Grass"],
	},
	sylveon: {
		num: 700,
		name: "Sylveon",
		types: ["Fairy", "Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60},
		abilities: {0: "Galvanize", 1: "Surge Surfer", H: "Pixilate"},
		heightm: 1,
		weightkg: 23.5,
		color: "Pink",
		prevo: "Eevee",
		evoType: "levelExtra",
		evoCondition: "with a Fairy-type move and two levels of Affection",
		eggGroups: ["Field"],
	},
	mantine: {
		num: 226,
		name: "Mantine",
		types: ["Water", "Fairy"],
		baseStats: {hp: 95, atk: 55, def: 95, spa: 80, spd: 100, spe: 50},
		abilities: {0: "Water Absorb", 1: "Immunity", H: "Water Veil"},
		heightm: 2.1,
		weightkg: 220,
		color: "Purple",
		prevo: "Mantyke",
		evoType: "levelExtra",
		evoCondition: "with a Remoraid in party",
		eggGroups: ["Water 1"],
		canHatch: true,
	},
	persianalola: {
		num: 53,
		name: "Persian-Alola",
		baseSpecies: "Persian",
		forme: "Alola",
		types: ["Dark", "Ice"],
		baseStats: {hp: 95, atk: 85, def: 80, spa: 75, spd: 65, spe: 115},
		abilities: {0: "Fur Coat", 1: "Technician", H: "Rattled"},
		heightm: 1.1,
		weightkg: 33,
		color: "Blue",
		prevo: "Meowth-Alola",
		evoType: "levelFriendship",
		eggGroups: ["Field"],
	},
	druddigon: {
		num: 621,
		name: "Druddigon",
		types: ["Dragon", "Steel"],
		baseStats: {hp: 87, atk: 120, def: 100, spa: 60, spd: 100, spe: 38},
		abilities: {0: "Rough Skin", 1: "Heatproof", H: "Mold Breaker"},
		heightm: 1.6,
		weightkg: 139,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
	},
	duraludon: {
		num: 884,
		name: "Duraludon",
		types: ["Steel", "Dark"],
		baseStats: {hp: 80, atk: 70, def: 95, spa: 135, spd: 80, spe: 60},
		abilities: {0: "Sturdy", 1: "Magnet Pull", H: "Stalwart"},
		heightm: 1.8,
		weightkg: 40,
		color: "White",
		eggGroups: ["Mineral", "Dragon"],
		canGigantamax: "G-Max Depletion",
	},
	stunfisk: {
		num: 618,
		name: "Stunfisk",
		types: ["Ground", "Electric"],
		baseStats: {hp: 109, atk: 66, def: 84, spa: 101, spd: 109, spe: 32},
		abilities: {0: "Static", 1: "Intimidate", H: "Electric Surge"},
		heightm: 0.7,
		weightkg: 11,
		color: "Brown",
		eggGroups: ["Water 1", "Amorphous"],
		otherFormes: ["Stunfisk-Galar"],
		formeOrder: ["Stunfisk", "Stunfisk-Galar"],
	},
	houndoom: {
		num: 229,
		name: "Houndoom",
		types: ["Dark", "Fire"],
		baseStats: {hp: 115, atk: 90, def: 100, spa: 70, spd: 80, spe: 75},
		abilities: {0: "Flash Fire", H: "Tough Claws"},
		heightm: 1.4,
		weightkg: 35,
		color: "Black",
		prevo: "Houndour",
		evoLevel: 24,
		eggGroups: ["Field"],
		otherFormes: ["Houndoom-Mega"],
		formeOrder: ["Houndoom", "Houndoom-Mega"],
	},
};