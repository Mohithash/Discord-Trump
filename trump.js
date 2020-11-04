"use strict";

console.log("LOADING LIBRARIES...");

const request = require("request");
const crypto = require("crypto");
const fs = require("fs");

const Discord = require("discord.js");
const client = new Discord.Client();

client.login("<SECRET_BOT_TOKEN>").catch(console.error);

function updateStatus() {
	const connections = client.voice && client.voice.connections;
	if (connections) {
		client.user.setActivity(connections.size + " voice" + (connections.size === 1 ? "" : "s")).catch(console.error);
	} else {
		client.user.setActivity("0 voices").catch(console.error);
	}
}

client.on("ready", function() {
	updateStatus();
	console.log("READY FOR ACTION!");
});

const vocodesVoices = {
	tts_altman: "sam-altman",
	tts_arnold: "arnold-schwarzenegger",
	tts_attenborough: "david-attenborough",
	tts_ayoade: "richard-ayoade",
	tts_bart: "bart-simpson",
	tts_ben_stein: "ben-stein",
	tts_betty_white: "betty-white",
	tts_bill_clinton: "bill-clinton",
	tts_bill_gates: "bill-gates",
	tts_bill_nye: "bill-nye",
	tts_bob_barker: "bob-barker",
	tts_boss: "the-boss",
	tts_brimley: "wilford-brimley",
	tts_broomstick: "boomstick",
	tts_bush: "george-w-bush",
	tts_carter: "jimmy-carter",
	tts_christopher_lee: "christopher-lee",
	tts_cooper: "anderson-cooper",
	tts_craig_ferguson: "craig-ferguson",
	tts_cramer: "jim-cramer",
	tts_cranston: "bryan-cranston",
	tts_crypt_keeper: "crypt-keeper",
	tts_darth: "darth-vader",
	tts_david_cross: "david-cross",
	tts_degrasse_tyson: "neil-degrasse-tyson",
	tts_dench: "judi-dench",
	tts_devito: "danny-devito",
	tts_dr_phil: "dr-phil-mcgraw",
	tts_earl_jones: "james-earl-jones",
	tts_fred_rogers: "fred-rogers",
	tts_gottfried: "gilbert-gottfried",
	tts_hillary_clinton: "hillary-clinton",
	tts_homer: "homer-simpson",
	tts_krabs: "mr-krabs",
	tts_larry_king: "larry-king",
	tts_lisa: "lisa-simpson",
	tts_luckey: "palmer-luckey",
	tts_mcconnell: "mitch-mcconnell",
	tts_nimoy: "leonard-nimoy",
	tts_nixon: "richard-nixon",
	tts_obama: "barack-obama",
	tts_oliver: "john-oliver",
	tts_palin: "sarah-palin",
	tts_paul_graham: "paul-graham",
	tts_paula_deen: "paula-deen",
	tts_penguinz0: "moistcr1tikal",
	tts_reagan: "ronald-reagan",
	tts_rickman: "alan-rickman",
	tts_rosen: "michael-rosen",
	tts_saruman: "saruman",
	tts_scout: "scout",
	tts_shapiro: "ben-shapiro",
	tts_shohreh: "shohreh-aghdashloo",
	tts_simmons: "j-k-simmons",
	tts_snake: "solid-snake",
	tts_snape: "severus-snape",
	tts_sonic: "sonic",
	tts_spongebob: "spongebob-squarepants",
	tts_squidward: "squidward",
	tts_takei: "george-takei",
	tts_thiel: "peter-thiel",
	tts_trevor: "trevor-philips",
	tts_trump: "donald-trump",
	tts_tucker: "tucker-carlson",
	tts_tupac: "tupac-shakur",
	tts_vegeta: "vegeta",
	tts_wiseau: "tommy-wiseau",
	tts_wizard: "wizard",
	tts_yugi: "yami-yugi",
	tts_zuckerberg: "mark-zuckerberg"
}

function vocodesSpeak(message, utterance, speaker) {
	if (utterance) {
		console.log("Playing " + utterance + "!");
		// Generate random temporary filename to avoid overwriting other speech recordings
		const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
		request.post({
			url: "https://mumble.stream/speak",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				speaker: speaker,
				text: utterance
			}),
		}, function(error, response, body) {
			if (error) {
				console.error(error);
				// Delete temporary file upon error
				fs.unlinkSync(fileName);
			} else if (response.statusCode !== 200) {
				// Send error description to user
				message.channel.send(body).catch(console.error);
				// Delete temporary file upon error
				fs.unlinkSync(fileName);
			} else {
				const connection = message.guild.voice && message.guild.voice.connection;
				if (connection) {
					connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
						// Delete file when speaking has finished
						if (!speaking) {
							fs.unlinkSync(fileName);
						}
					}).on("error", console.error);
				} else {
					message.channel.send({
						files: [{
							attachment: fileName,
							name: utterance.replace(/[^a-z0-9]/gi, "_") + ".wav"
						}]
					}).then(function() {
						// Delete temporary file after sending
						fs.unlinkSync(fileName);
					}).catch(console.error);
				}
			}
		}).pipe(fs.createWriteStream(fileName));
	} else {
		message.channel.send("Give me something to say!").catch(console.error);
	}
}

client.on("message", function(message) {
	if (message.author.bot || !message.guild) return;
	const content = message.content.toLowerCase();
	if (content === "tts_join") {
		if (message.member.voice && message.member.voice.channel) {
			message.member.voice.channel.join().then(updateStatus).catch(function() {
				message.channel.send("I need permission to join your voice channel!").catch(console.error);
			});
		} else {
			message.channel.send("Join a voice channel first!").catch(console.error);
		}
	} else if (content === "tts_leave") {
		const connection = message.guild.voice && message.guild.voice.connection;
		if (connection) {
			connection.disconnect();
			updateStatus();
		}
	} else {
		const command = content.split(" ")[0];
		const vocodeVoice = vocodesVoices[command];
		if (vocodeVoice) {
			vocodesSpeak(message, message.content.slice(command.length).trim(), vocodeVoice);
		}
	}
});