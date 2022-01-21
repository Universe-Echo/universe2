module.exports = {
    name: 'ping',
    execute(client, message) {
        message.channel.send('Calculating ping.......').then(m => {
            const apiPing = client.ws.ping
            const botPing = m.createdTimestamp - message.createdTimestamp
            m.edit(`Api Latency: ${apiPing}ms\nBot Latency: ${botPing}ms`)
        }

        )

    }
}