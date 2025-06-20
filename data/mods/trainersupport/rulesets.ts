export const Rulesets: {[k: string]: ModdedFormatData} = {
	trainersupportrule: {
		name: "Trainer Support Rule",
		effectType: "Rule",
		desc: `Naming your first Pokemon the name of certain trainers grants the team a boost.`,
		onBegin() {
			for (const side of this.sides) {
				switch (side.pokemon[0].name.toLowerCase()) {
					case 'miriam':
						this.add('-message', `${side.name}'s Trainer Support:`);
						this.add(`raw|<img src="https://play.pokemonshowdown.com/sprites/trainers/miriam.png" height="80" width="80">`);
						side.trainerBoost = 'miriam';
						break;
					case 'larry':
						this.add('-message', `${side.name}'s Trainer Support:`);
						this.add(`raw|<img src="https://play.pokemonshowdown.com/sprites/trainers/larry.png" height="80" width="80">`);
						side.trainerBoost = 'larry';
						break;
					case 'steven':
						this.add('-message', `${side.name}'s Trainer Support:`);
						this.add(`raw|<img src="https://play.pokemonshowdown.com/sprites/trainers/steven.png" height="80" width="80">`);
						side.trainerBoost = 'steven';
						break;
					case 'lance':
						this.add('-message', `${side.name}'s Trainer Support:`);
						this.add(`raw|<img src="https://play.pokemonshowdown.com/sprites/trainers/lance.png" height="80" width="80">`);
						side.trainerBoost = 'lance';
						break;
					case 'cynthia':
						this.add('-message', `${side.name}'s Trainer Support:`);
						this.add(`raw|<img src="https://play.pokemonshowdown.com/sprites/trainers/cynthia.png" height="80" width="80">`);
						side.trainerBoost = 'cynthia';
						break;
					case 'iris':
						this.add('-message', `${side.name}'s Trainer Support:`);
						this.add(`raw|<img src="https://play.pokemonshowdown.com/sprites/trainers/iris-gen5bw2.png" height="80" width="80">`);
						side.trainerBoost = 'iris';
						break;
					case 'roxie':
						this.add('-message', `${side.name}'s Trainer Support:`);
						this.add(`raw|<img src="https://play.pokemonshowdown.com/sprites/trainers/roxie.png" height="80" width="80">`);
						side.trainerBoost = 'roxie';
						break;
					case 'roxanne':
						this.add('-message', `${side.name}'s Trainer Support:`);
						this.add(`raw|<img src="https://play.pokemonshowdown.com/sprites/trainers/roxanne.png" height="80" width="80">`);
						side.trainerBoost = 'roxanne';
						break;
					case 'sidney':
						this.add('-message', `${side.name}'s Trainer Support:`);
						this.add(`raw|<img src="https://play.pokemonshowdown.com/sprites/trainers/sidney.png" height="80" width="80">`);
						side.trainerBoost = 'sidney';
						break;
					default:
						this.add('-message', `Note: ${side.name} does not a trainer support.`);
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.side.trainerBoost) return;
			switch(pokemon.side.trainerBoost) {
				case 'miriam':
					pokemon.addVolatile('ability:merciless');
					break;
				case 'larry':
					pokemon.addVolatile('larryboost');
					break;
				case 'steven':
					pokemon.addVolatile('stevenboost');
					break;
				case 'lance':
					pokemon.addVolatile('lanceboost');
					break;
				case 'cynthia':
					pokemon.addVolatile('cynthiaboost');
					break;
				case 'iris':
					pokemon.addVolatile('irisboost');
					break;
				case 'roxie':
					pokemon.addVolatile('roxieboost');
					break;
				case 'roxanne':
					pokemon.addVolatile('roxanneboost');
					break;
				case 'sidney':
					pokemon.addVolatile('sidneyboost');
					break;
			}
		}
	},
};