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
	altman: "sam-altman",
	arnold: "arnold-schwarzenegger",
	attenborough: "david-attenborough",
	ayoade: "richard-ayoade",
	bart: "bart-simpson",
	ben_stein: "ben-stein",
	betty_white: "betty-white",
	bill_clinton: "bill-clinton",
	bill_gates: "bill-gates",
	bill_nye: "bill-nye",
	bob_barker: "bob-barker",
	boss: "the-boss",
	brimley: "wilford-brimley",
	broomstick: "boomstick",
	bush: "george-w-bush",
	carter: "jimmy-carter",
	christopher_lee: "christopher-lee",
	cooper: "anderson-cooper",
	craig_ferguson: "craig-ferguson",
	cramer: "jim-cramer",
	cranston: "bryan-cranston",
	crypt_keeper: "crypt-keeper",
	darth: "darth-vader",
	david_cross: "david-cross",
	degrasse: "neil-degrasse-tyson",
	dench: "judi-dench",
	devito: "danny-devito",
	dr_phil: "dr-phil-mcgraw",
	earl_jones: "james-earl-jones",
	fred_rogers: "fred-rogers",
	gottfried: "gilbert-gottfried",
	hillary_clinton: "hillary-clinton",
	homer: "homer-simpson",
	krabs: "mr-krabs",
	larry_king: "larry-king",
	lisa: "lisa-simpson",
	luckey: "palmer-luckey",
	mcconnell: "mitch-mcconnell",
	nimoy: "leonard-nimoy",
	nixon: "richard-nixon",
	obama: "barack-obama",
	oliver: "john-oliver",
	palin: "sarah-palin",
	paul_graham: "paul-graham",
	paula_deen: "paula-deen",
	penguinz0: "moistcr1tikal",
	reagan: "ronald-reagan",
	rickman: "alan-rickman",
	rosen: "michael-rosen",
	saruman: "saruman",
	scout: "scout",
	shapiro: "ben-shapiro",
	shohreh: "shohreh-aghdashloo",
	simmons: "j-k-simmons",
	snake: "solid-snake",
	snape: "severus-snape",
	sonic: "sonic",
	spongebob: "spongebob-squarepants",
	squidward: "squidward",
	takei: "george-takei",
	thiel: "peter-thiel",
	trevor: "trevor-philips",
	trump: "donald-trump",
	tucker: "tucker-carlson",
	tupac: "tupac-shakur",
	vegeta: "vegeta",
	wiseau: "tommy-wiseau",
	wizard: "wizard",
	yugi: "yami-yugi",
	zuckerberg: "mark-zuckerberg"
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
				const connection = message.guild && message.guild.voice && message.guild.voice.connection;
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
	if (message.author.bot) return;
	const content = message.content.toLowerCase();
	if (content.startsWith("tts_")) {
		const trimmedContent = content.slice(4);
		switch (trimmedContent) {
		case "join":
			if (!message.guild) {
				message.channel.send("This command only works on servers!").catch(console.error);
			} else if (message.member.voice && message.member.voice.channel) {
				message.member.voice.channel.join().then(updateStatus).catch(function() {
					message.channel.send("I need permission to join your voice channel!").catch(console.error);
				});
			} else {
				message.channel.send("Join a voice channel first!").catch(console.error);
			}
			break;
		case "leave":
			const connection = message.guild && message.guild.voice && message.guild.voice.connection;
			if (connection) {
				connection.disconnect();
				updateStatus();
			}
			break;
		default:
			const command = trimmedContent.split(" ")[0];
			const vocodeVoice = vocodesVoices[command];
			if (vocodeVoice) {
				vocodesSpeak(message, message.content.slice(4 + command.length).trim(), vocodeVoice);
			} else {
				message.channel.send("No voice named " + command + "!").catch(console.error);
			}
		}
	}
});