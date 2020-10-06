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
	} else if (content.startsWith("richard-nixon-say")) {
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
					speaker: "richard-nixon",
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
	} else if (content.startsWith("jimmy-carter-say")) {
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
					speaker: "jimmy-carter",
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
	} else if (content.startsWith("ronald-reagan-say")) {
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
					speaker: "ronald-reagan",
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
	} else if (content.startsWith("george-w-bush-say")) {
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
					speaker: "george-w-bush",
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
	} else if (content.startsWith("richard-ayoade-say")) {
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
					speaker: "richard-ayoade",
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
	} else if (content.startsWith("sam-altman-say")) {
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
					speaker: "sam-altman",
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
	} else if (content.startsWith("shohreh-aghdashloo-say")) {
		const utterance = message.content.slice(22).trim();
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
					speaker: "shohreh-aghdashloo",
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
	} else if (content.startsWith("wilford-brimley-say")) {
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
					speaker: "wilford-brimley",
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
	} else if (content.startsWith("anderson-cooper-say")) {
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
					speaker: "anderson-cooper",
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
	} else if (content.startsWith("ben-stein-say")) {
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
					speaker: "ben-stein",
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
	} else if (content.startsWith("boomstick-say")) {
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
					speaker: "boomstick",
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
	} else if (content.startsWith("david-cross-say")) {
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
					speaker: "david-cross",
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
	} else if (content.startsWith("hilary-clintson-say")) {
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
					speaker: "hilary-clinton",
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
	} else if (content.startsWith("james-earl-jones-say")) {
		const utterance = message.content.slice(20).trim();
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
					speaker: "james-earl-jones",
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
	} else if (content.startsWith("john-oliver-say")) {
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
					speaker: "john-oliver",
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
	} else if (content.startsWith("larry-king-say")) {
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
					speaker: "larry-king",
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
	} else if (content.startsWith("mark-zuckerberg-say")) {
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
					speaker: "mark-zuckerberg",
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
	} else if (content.startsWith("mr-fred-rogers-say")) {
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
					speaker: "fred-rogers",
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
	} else if (content.startsWith("mr-krabs-say")) {
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
					speaker: "mr-krabs",
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
	} else if (content.startsWith("sarah-palin-say")) {
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
					speaker: "sarah-palin",
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
	} else if (content.startsWith("scout-say")) {
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
					speaker: "scout",
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
	} else if (content.startsWith("snake-say")) {
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
					speaker: "snake",
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
	} else if (content.startsWith("squidward-tentacles-say")) {
		const utterance = message.content.slice(23).trim();
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
					speaker: "squidward-tentacles",
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
	} else if (content.startsWith("trevor-philips-say")) {
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
					speaker: "trevor-philips",
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
	} else if (content.startsWith("tupac-shakur-say")) {
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
					speaker: "tupac-shakur",
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
	} else if (content.startsWith("vegeta-say")) {
		const utterance = message.content.slice(10).trim();
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
					speaker: "vegeta",
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
	} else if (content.startsWith("wizard-say")) {
		const utterance = message.content.slice(10).trim();
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
					speaker: "wizard",
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
	} else if (content.startsWith("george-takei")) {
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
					speaker: "george-takei",
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
	} else if (content.startsWith("paul-graham-say")) {
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
					speaker: "paul-graham",
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
	} else if (content.startsWith("barack-obama-say")) {
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
					speaker: "barack-obama",
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
	} else if (content.startsWith("the-boss-say")) {
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
					speaker: "the-boss",
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
	} else if (content.startsWith("yami-yugi-say")) {
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
					speaker: "yami-yugi",
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
