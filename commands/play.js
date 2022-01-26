module.exports = {
    name: 'play',

   async execute(client, message, args) {

const ytdl = require('ytdl-core');
const {
	AudioPlayerStatus,
	StreamType,
	createAudioPlayer,
	createAudioResource,
	joinVoiceChannel,
} = require('@discordjs/voice');

// ...
const  voiceChannel = ('786239006450647100')
const guild = ('779213432389107742'),

const connection = joinVoiceChannel({
	channelId: voiceChannel,
	guildId: guild,
	adapterCreator: guild.voiceAdapterCreator,
});

const stream = ytdl('https://www.youtube.com/watch?v=60ItHLz5WEA', { filter: 'audioonly' });
const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
const player = createAudioPlayer();

player.play(resource);
connection.subscribe(player);

player.on(AudioPlayerStatus.Idle, () => connection.destroy());

}}