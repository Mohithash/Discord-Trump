"use strict";

console.log("LOADING LIBRARIES...");

const request = require("request");
const crypto = require("crypto");
const fs = require("fs");

const Discord = require("discord.js");
const client = new Discord.Client();

client.login("<SECRET-BOT-TOKEN>").catch(console.error);

function updateStatus() {
	const connections = client.voice && client.voice.connections;
	if (connections) {
		client.user.setActivity("with voices");
	} else {
		client.user.setActivity("with voices").catch(console.error);
	}
}

client.on("ready", function() {
	updateStatus();
	console.log("READY FOR ACTION!");
});

client.on("message", function(message) {
	if (message.author.bot || !message.guild) return;
	const content = message.content.toLowerCase();
	if (content === "tts-join") {
		if (message.member.voice && message.member.voice.channel) {
			message.member.voice.channel.join().then(updateStatus).catch(function() {
				message.channel.send("I need permission to join your voice channel! Believe me, it's true.").catch(console.error);
			});
		} else {
			message.channel.send("Join a voice channel first! You won't regret it, believe me.").catch(console.error);
		}
	} else if (content === "tts-leave") {
		const connection = message.guild.voice && message.guild.voice.connection;
		if (connection) {
			connection.disconnect();
			updateStatus();
		}
	} else if (content.startsWith("donald-trump-say")) {
		const utterance = message.content.slice(16).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "donald-trump",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("spongebob-squarepants-say")) {
		const utterance = message.content.slice(25).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "spongebob-squarepants",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("ben-shapiro-say")) {
		const utterance = message.content.slice(15).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "ben-shapiro",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("arnold-schwarzenegger-say")) {
		const utterance = message.content.slice(25).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "arnold-schwarzenegger",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("craig-ferguson-say")) {
		const utterance = message.content.slice(18).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "craig-ferguson",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("gilbert-gottfried-say")) {
		const utterance = message.content.slice(21).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "gilbert-gottfried",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("homer-simpson-say")) {
		const utterance = message.content.slice(17).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "homer-simpson",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("sir-david-attenborough_say")) {
		const utterance = message.content.slice(26).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "david-attenborough",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("sonic-say")) {
		const utterance = message.content.slice(9).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "sonic",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("tucker-carlson-say")) {
		const utterance = message.content.slice(18).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "tucker-carlson",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}				
	} else if (content.startsWith("alan-rickman-say")) {
		const utterance = message.content.slice(16).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "alan-rickman",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("bart-simpson-say")) {
		const utterance = message.content.slice(16).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "bart-simpson",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("betty-white-say")) {
		const utterance = message.content.slice(15).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "betty-white",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("bill-gates-say")) {
		const utterance = message.content.slice(14).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "bill-gates",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("bill-nye-say")) {
		const utterance = message.content.slice(12).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "bill-gates",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("spongebob-squarepants-15-say")) {
		const utterance = message.content.slice(28).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "SpongeBob",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("twilight-sparkle-say")) {
		const utterance = message.content.slice(20).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Twilight Sparkle",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("sans-say")) {
		const utterance = message.content.slice(8).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Sans",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("flowey-say")) {
		const utterance = message.content.slice(10).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Flowey",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("toriel-say")) {
		const utterance = message.content.slice(10).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Toriel",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("bryan-cranston-say")) {
		const utterance = message.content.slice(18).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "bryan-cranston",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("christopher-lee-say")) {
		const utterance = message.content.slice(19).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "christopher-lee",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("danny-devito-say")) {
		const utterance = message.content.slice(16).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "danny-devito",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("dr_phil_mcgraw_say")) {
		const utterance = message.content.slice(18).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "dr-phil-mcgraw",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("jk-simmons-say")) {
		const utterance = message.content.slice(13).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "j-k-simmons",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("judi-dench-say")) {
		const utterance = message.content.slice(14).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "judi-dench",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("leonard-nimoy-say")) {
		const utterance = message.content.slice(17).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "leonard-nimoy",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("lisa-simpson-say")) {
		const utterance = message.content.slice(16).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "lisa-simpson",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("michael-rosen-say")) {
		const utterance = message.content.slice(17).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "michael-rosen",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("neil-degrasse-tyson-say")) {
		const utterance = message.content.slice(17).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "neil-degrasse-tyson",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("palmer-luckey-say")) {
		const utterance = message.content.slice(17).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "palmer-luckey",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("peter-thiel-say")) {
		const utterance = message.content.slice(15).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://mumble.stream/speak",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					speaker: "peter-thiel",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("fluttershy-say")) {
		const utterance = message.content.slice(14).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Fluttershy",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("rarity-say")) {
		const utterance = message.content.slice(10).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Rarity",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("rainbow-dash-say")) {
		const utterance = message.content.slice(16).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Rainbow Dash",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("pinkie-pie-say")) {
		const utterance = message.content.slice(14).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Pinkie Pie",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("applejack-say")) {
		const utterance = message.content.slice(13).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Applejack",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("princess-celestia-say")) {
		const utterance = message.content.slice(21).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Princess Celestia",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("princess-luna-say")) {
		const utterance = message.content.slice(17).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Princess Luna",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("starlight-glimmer-say")) {
		const utterance = message.content.slice(21).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Starlight Glimmer",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("trixie-say")) {
		const utterance = message.content.slice(10).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Trixie",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("spike-say")) {
		const utterance = message.content.slice(9).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Spike",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("apple-bloom-say")) {
		const utterance = message.content.slice(15).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Apple Bloom",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("sweetie-belle-say")) {
		const utterance = message.content.slice(17).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Sweetie Belle",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("scootaloo-say")) {
		const utterance = message.content.slice(13).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Scootaloo",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("lyra-say")) {
		const utterance = message.content.slice(8).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Lyra",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("bon-bon-say")) {
		const utterance = message.content.slice(11).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Bon Bon",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("minuette-say")) {
		const utterance = message.content.slice(12).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Minuette",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("sunset-shimmer-say")) {
		const utterance = message.content.slice(18).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Sunset Shimmer",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("princess-cadance-say")) {
		const utterance = message.content.slice(20).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Princess Cadance",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("spitfire-say")) {
		const utterance = message.content.slice(12).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Spitfire",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("derpy-hooves-say")) {
		const utterance = message.content.slice(16).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Derpy Hooves",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("cheerilee-say")) {
		const utterance = message.content.slice(13).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Cheerilee",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}
	} else if (content.startsWith("zecora-say")) {
		const utterance = message.content.slice(10).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Zecora",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}	
	} else if (content.startsWith("coco-pommel-say")) {
		const utterance = message.content.slice(15).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Coco Pommel",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("sugar-belle-say")) {
		const utterance = message.content.slice(15).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Sugar Belle",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("vapor-trail-say")) {
		const utterance = message.content.slice(15).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Vapor Trail",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("moondancer-say")) {
		const utterance = message.content.slice(14).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Moondancer",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("cozy-glow-say")) {
		const utterance = message.content.slice(13).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Cozy Glow",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("queen-chrysalis-say")) {
		const utterance = message.content.slice(19).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Queen Chrysalis",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}		
	} else if (content.startsWith("lightning-dust-say")) {
		const utterance = message.content.slice(18).trim();
		if (utterance) {
			console.log("Playing " + utterance + "!");
			const fileName = crypto.randomBytes(48).toString("hex") + ".wav";
			request.post({
				url: "https://api.15.ai/app/getAudioFile",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					character: "Lightning Dust",
					emotion: "Medium",
					text: utterance
				}),
			}, function(error, response, body) {
				if (error) {
					console.error(error);
					fs.unlinkSync(fileName);
				} else if (response.statusCode !== 200) {
					message.channel.send(body).catch(console.error);
					fs.unlinkSync(fileName);
				} else {
					const connection = message.guild.voice && message.guild.voice.connection;
					if (connection) {
						connection.play(fs.createReadStream(fileName)).on("speaking", function(speaking) {
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
							fs.unlinkSync(fileName);
						}).catch(console.error);
					}
				}
			}).pipe(fs.createWriteStream(fileName));
		} else {
			message.channel.send("Give me something to say!").catch(console.error);
		}				
	}
});
