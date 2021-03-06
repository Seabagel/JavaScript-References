const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const client = new Discord.Client();

client.once("ready", () => {
    console.log("Ready!");
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/); // Splits empty face
    const command = args.shift().toLowerCase(); // Get first index

    if (command === "ping") {
        message.channel.send("Pong.");
    } else if (command === "beep") {
        message.channel.send("Boop.");
    }
    // other commands...
});

client.login(token);
