export const TypeChart: {[k: string]: ModdedTypeData} = {
	Bug: {
		inherit: true,
		damageTaken: {
			confusion: 3,
         Bug: 0,
			Dark: 2,
			Dragon: 0,
			Electric: 0,
			Fairy: 2,
			Fighting: 2,
			Fire: 1,
			Flying: 1,
			Ghost: 0,
			Grass: 2,
			Ground: 2,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 2,
			Rock: 1,
			Steel: 0,
			Water: 0,
		},
		HPivs: {atk: 30, def: 30, spd: 30},
		HPdvs: {atk: 13, def: 13},
	},
	Fairy: {
		inherit: true,
		damageTaken: {
			Bug: 1,
			Dark: 2,
			Dragon: 3,
			Electric: 0,
			Fairy: 0,
			Fighting: 2,
			Fire: 0,
			Flying: 0,
			Ghost: 0,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 1,
			Psychic: 0,
			Rock: 0,
			Steel: 1,
			Water: 0,
		},
	},
};
