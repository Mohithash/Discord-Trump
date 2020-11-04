<img src="icon.png?raw=true" width="75" align="left">

# [Discord Text to Speech Bot](https://discordapp.com/oauth2/authorize?client_id=484622857041608705&scope=bot)
Text to speech Discord bot using [Vocodes](https://vo.codes) and [15.ai](https://15.ai).

Massive thanks to [NamesJoeyWheeler](https://github.com/NamesJoeyWheeler) for adding so many new voices!

(This bot originally only worked with Donald Trump's voice.)

## Commands
### Join
`tts_join`

*Joins the voice channel you are currently in.*

### Leave
`tts_leave`

*Leaves the voice channel.*

### Say
*The following commands make the characters say anything you want.*

*If the bot is in a voice channel, the speech will play through this channel.*

*If not, the speech will be sent as an attachment.*

#### [Vocodes voices](https://vo.codes)

Alan Rickman - `tts_rickman`

Anderson Cooper - `tts_cooper`

Arnold Schwarzenegger - `tts_arnold`

Bart Simpson - `tts_bart`

Ben Shapiro - `tts_shapiro`

Ben Stein - `tts_ben_stein`

Betty White - `tts_betty_white`

Bill Gates - `tts_bill_gates`

Bill Nye - `tts_bill_nye`

Bob Barker - `tts_bob_barker`

Boomstick (Death Battle!) - `tts_broomstick`

Bryan Cranston - `tts_cranston`

Christopher Lee - `tts_christopher_lee`

Craig Ferguson - `tts_craig_fergusson`

Crypt Keeper - `tts_crypt_keeper`

Danny Devito - `tts_devito`

Darth Vader - `tts_darth`

David Cross - `tts_david_cross`

Dr. Phil McGraw - `tts_dr_phil`

George Takei - `tts_takei`

Gilbert Gottfried - `tts_gottfried`

Hillary Clinton - `tts_hillary_clinton`

Homer Simpson - `tts_homer`

J. K. Simmons - `tts_simmons`

James Earl Jones - `tts_earl_jones`

Jim Cramer - `tts_cramer`

John Oliver - `tts_oliver`

Judi Dench - `tts_dench`

Larry King - `tts_larry_king`

Leonard Nimoy - `tts_nimoy`

Lisa Simpson - `tts_lisa`

Mark Zuckerberg - `tts_zuckerberg`

Michael Rosen - `tts_rosen`

Mitch McConnell - `tts_mcconnell`

moistcr1tikal - `tts_penguinz0`

Mr. Fred Rogers - `tts_fred_rogers`

Mr. Krabs - `tts_krabs`

Neil deGrasse Tyson - `tts_degrasse`

Palmer Luckey - `tts_luckey`

Paul Graham - `tts_paul_graham`

Paula Deen - `tts_paula_deen`

Peter Thiel - `tts_thiel`

President #37 Richard Nixon - `tts_nixon`

President #39 Jimmy Carter - `tts_carter`

President #40 Ronald Reagan - `tts_reagan`

President #42 Bill Clinton - `tts_bill_clinton`

President #43 George W. Bush - `tts_bush`

President #44 Barack Obama - `tts_obama`

President #45 Donald Trump - `tts_trump`

Richard Ayoade - `tts_ayoade`

Sam Altman - `tts_altman`

Sarah Palin - `tts_palin`

Saruman - `tts_saruman`

Scout - `tts_scout`

Severus Snape - `tts_snape`

Shohreh Aghdashloo - `tts_shohreh`

Sir David Attenborough - `tts_attenborough`

Solid Snake - `tts_snake`

Sonic - `tts_sonic`

SpongeBob SquarePants - `tts_spongebob`

Squidward Tentacles - `tts_squidward`

The Boss - `tts_boss`

Tommy Wiseau - `tts_wiseau`

Trevor Philips - `tts_trevor`

Tucker Carlson - `tts_tucker`

Tupac Shakur (acapella lyrics) - `tts_tupac`

Vegeta - `tts_vegeta`

Wilford Brimley - `tts_brimley`

Wizard (Death Battle!) - `tts_wizard`

Yami Yugi - `tts_yugi`

#### 15.ai voices

These will be added again once the 15.ai website goes back online.

## Setup
1. [Create your app with a Bot](https://discordapp.com/developers/applications/me).
2. Copy your bot's secret token and [paste it on this line](ttsbot.js#L8).
3. Go to `https://discordapp.com/oauth2/authorize?client_id=<CLIENT_ID>&scope=bot`, with `<CLIENT_ID>` as your app's client ID.
4. [Install Node.js](https://nodejs.org/en/download): `brew install node`
5. [Install FFmpeg](https://www.ffmpeg.org/download.html): `brew install ffmpeg`
6. [Install the dependencies](package.json#L37-L40): `npm install`
7. [Run the bot](ttsbot.js): `npm start`
