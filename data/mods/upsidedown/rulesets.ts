	export const Rulesets: {[k: string]: ModdedFormatsData} = {

	standard: {
		effectType: 'ValidatorRule',
		name: 'Standard',
		desc: "The standard ruleset for all offical Smogon singles tiers (Ubers, OU, etc.)",
			  ruleset: [
			    'Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', '!Team Preview'
		],
	},
	batonpassmod: {
		effectType: 'Rule',
		name: 'Baton Pass Mod',
		desc: "Positive stat boosts are reset upon using Baton Pass.",
		onBegin() {
			this.add('rule', 'Baton Pass Mod: Positive stat boosts are reset upon using Baton Pass');
		},
		onHit(source, target, move) {
			if (source.positiveBoosts() && move.id === 'batonpass') {
				this.add('-clearpositiveboost', source);
				this.hint("Baton Pass Mod activated: Stat Boosts cannot be passed");
			}
		},
	},
};
