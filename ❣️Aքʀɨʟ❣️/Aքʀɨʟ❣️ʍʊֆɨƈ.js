const os = require("os");
const express = require("express");
const { readdirSync } = require("fs");
const { join } = require("path");
const { Client, Collection } = require("./ӄʀǟӄɨռʐʟǟɮ/src");
const Aքʀɨʟʍʊֆɨƈ = new Client({ disableEveryone: false });
const { Aքʀɨʟӄɛռ, AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ } = require("./Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ.js");
const Aքʀɨʟֆɛʀʋɛʀ = express();
const PORT = process.env.PORT || 8080;
Aքʀɨʟֆɛʀʋɛʀ.listen(PORT);
Aքʀɨʟʍʊֆɨƈ.login(Aքʀɨʟӄɛռ);
Aքʀɨʟʍʊֆɨƈ.prefix = AքʀɨʟʄɨӼ;
Aքʀɨʟʍʊֆɨƈ.queue = new Map();
Aքʀɨʟʍʊֆɨƈ.commands = new Collection();
const AprilEngineOil = new Collection();
const { MessageEmbed } = require("./ӄʀǟӄɨռʐʟǟɮ/src");
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const commandFiles = readdirSync(join(__dirname, "Aքʀɨʟɦʊɮ")).filter((file) =>
  file.endsWith("_ӄʀǟӄɨռʐʟǟɮ.js")
);
for (const file of commandFiles) {
  const command = require(join(__dirname, "Aքʀɨʟɦʊɮ", `${file}`));
  Aքʀɨʟʍʊֆɨƈ.commands.set(command.name, command);
}
try {
  Aքʀɨʟʍʊֆɨƈ.on("warn", (ᴀᴘʀɪʟ_WARN) => console.log(ᴀᴘʀɪʟ_WARN));
  Aքʀɨʟʍʊֆɨƈ.on("error", console.error);
  Aքʀɨʟʍʊֆɨƈ.on("ready", () => {
    Aքʀɨʟʍʊֆɨƈ.user.setActivity(`❣️ ${AքʀɨʟʄɨӼ}april && ${AքʀɨʟʄɨӼ}play`, {
      type: "WATCHING",
    });
    console.log(`
♥️--------------- Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️ ---------------♥️
🔱Bot-Name:~~> ${Aքʀɨʟʍʊֆɨƈ.user.username}
🔱Bot-Os:~~> ${os.platform().toUpperCase()}
🔱Bot-Port:~~> ${PORT}

♥️--------------- Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️ ---------------♥️
GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
♥️ Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️ ♥️
Discord Music YouTube player
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁

♥️--------------- Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️ ---------------♥️`);
  });
} catch (ErrorApril) {
  console.error(ErrorApril);
}
try {
  Aքʀɨʟʍʊֆɨƈ.on(`guildCreate`, (guild) => {
    const channel = guild.channels.cache.find(
      (channel) =>
        channel.type === `text` &&
        channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
    );
    channel.send("@everyone");
    channel
      .send(
        new MessageEmbed()
          .setColor("#ff0000")
          .setAuthor(`😲 Warning! ⚠️`)
          .setURL("https://github.com/Krakinz?tab=repositories")
          .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
          .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
          .setDescription(
            `𝗗𝗲𝗮𝗿: @everyone
---------------:lady_beetle:---------------


ᴀ channel ɴᴀᴍᴇ **Aքʀɨʟ❣️ʍʊֆɨƈ** inside **🔱Krakinz** has been successfully created.
Please use the channel for any **ᴀᴘʀɪʟ❣️ᴘʟᴀʏᴇʀ** commands..

---------------:lady_beetle:---------------`
          )
      )
      .catch(console.error);
    channel
      .send(
        new MessageEmbed()
          .setColor("#ff0000")
          .setAuthor(`😲 Warning! ⚠️`)
          .setURL("https://github.com/Krakinz?tab=repositories")
          .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
          .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
          .setDescription(`❤️‍🔥 **Hey there MUSIC lovers !**
I got you all covered with direct music streaming from ʏᴏᴜᴛᴜʙᴇ to discord voice channel.
Please use the channel **Aքʀɨʟ❣️ʍʊֆɨƈ** for any **ᴀᴘʀɪʟ_ᴘʟᴀʏᴇʀ** commands.
---------------:lady_beetle:---------------

:candy:**ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ** 
*Please use* = **${AքʀɨʟʄɨӼ}April**  | **${AքʀɨʟʄɨӼ}play** | **${AքʀɨʟʄɨӼ}help** *to know more.*
---------------:lady_beetle:---------------

:star:**ɴᴏᴛᴇ to** @everyone:
ᴀ channel ɴᴀᴍᴇ **Aքʀɨʟ❣️ʍʊֆɨƈ** inside **🔱Krakinz** has been successfully created.
Please use only that channel for any **ᴀᴘʀɪʟ_ᴘʟᴀʏᴇʀ** commands..
---------------:lady_beetle:---------------`)
      )
      .catch(console.error);
    guild.channels
      .create("🔱𝗞𝗥𝗔𝗞𝗜𝗡𝗭𝗟𝗔𝗕™", {
        type: "category",
        permissionOverwrites: [
          { id: guild.id, deny: ["VIEW_CHANNEL"] },
          { id: guild.id, allow: ["VIEW_CHANNEL"] },
        ],
      })
      .then((parent) => {
        guild.channels
          .create("ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ", {
            type: "text",
            parent,
            permissionOverwrites: [
              {
                id: guild.id,
                deny: [
                  "MANAGE_ROLES",
                  "MANAGE_NICKNAMES",
                  "MANAGE_CHANNELS",
                  "KICK_MEMBERS",
                  "BAN_MEMBERS",
                ],
              },
              {
                id: guild.id,
                allow: [
                  "VIEW_CHANNEL",
                  "SEND_MESSAGES",
                  "READ_MESSAGE_HISTORY",
                ],
              },
            ],
          })
          .catch(console.error);
        return;
      });
  });
} catch (ErrorApril) {
  console.error(ErrorApril);
}
Aքʀɨʟʍʊֆɨƈ.on("message", async (message) => {
  try {
    if (message.author.bot) {
      return;
    }
    if (!message.guild) {
      message.react("❌");
      message.react("🔥");
      message.reply(
        new MessageEmbed()
          .setColor("#e69138")
          .setTitle("Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️")
          .setAuthor(`😲 Warning! ⚠️`)
          .setURL("https://github.com/Krakinz?tab=repositories")
          .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
          .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
          .setDescription(`**Ú§êr >** ${message.author}
---------------:lady_beetle:---------------


Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️
🔆-𝘔𝘶𝘴𝘪𝘤 𝘉𝘰𝘵 𝘧𝘰𝘳 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 𝘸𝘪𝘵𝘩 𝘠𝘰𝘶𝘛𝘶𝘣𝘦_𝘋𝘭, 𝘣𝘶𝘪𝘭𝘵 𝘸𝘪𝘵𝘩 𝘋𝘪𝘴𝘤𝘰𝘳𝘥.𝘫𝘴
• You are currently in a **DMChannel** and so you have been **restricted** using any **April 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
• Add me in your channel and then all commands will be automatically accepted.
🔰- https://github.com/HypeVoidSoul/April

---------------:lady_beetle:---------------`)
      );
      return;
    }
    const prefixRegex = new RegExp(
      `^(<@!?${Aքʀɨʟʍʊֆɨƈ.user.id}>|${escapeRegex(AքʀɨʟʄɨӼ)})\\s*`
    );

    if (!prefixRegex.test(message.content)) {
      return;
    }
    const [matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command =
      Aքʀɨʟʍʊֆɨƈ.commands.get(commandName) ||
      Aքʀɨʟʍʊֆɨƈ.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );
    if (!command) {
      return;
    }
    if (!AprilEngineOil.has(command.name)) {
      AprilEngineOil.set(command.name, new Collection());
    }
    const now = Date.now();
    const timestamps = AprilEngineOil.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 1000;
    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#e69138")
              .setTitle("Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️")
              .setAuthor(`😲 Warning! ⚠️`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
              .setDescription(`
**Ú§êr >** ${message.author}
---------------:lady_beetle:---------------


Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the '${
              command.name
            }' command.      

---------------:lady_beetle:---------------`)
          )
          .catch(console.error);
        return;
      }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    try {
      command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.react("❌");
      message.react("🔥");
      message.channel
        .send(
          new MessageEmbed()
            .setColor("#e69138")
            .setTitle("Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️")
            .setAuthor(`😲 Warning! ⚠️`)
            .setURL("https://github.com/Krakinz?tab=repositories")
            .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
            .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
            .setDescription(
              `
**Ú§êr >** ${message.author}
---------------:lady_beetle:---------------


There was an error executing that command.`
            )
        )
        .catch(console.error)
        .then((message) => {
          message.delete({ timeout: `${Aքʀɨʟքʊʀɢɛʀ}` });
          return;
        });
    }
  } catch (ErrorApril) {
    message.channel.send(
      new MessageEmbed()
        .setColor("#DB4434")
        .setAuthor("Error🔺Caught")
        .setTitle("Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️")
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
        .setThumbnail("https://i.postimg.cc/5tgjvj1y/A.png")
        .setDescription(`**Aքʀɨʟ❣️ʍʊֆɨƈ** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns


**Error🔻Caught**
*${ErrorApril}*`)
    );
    console.error(ErrorApril);
  }
});
