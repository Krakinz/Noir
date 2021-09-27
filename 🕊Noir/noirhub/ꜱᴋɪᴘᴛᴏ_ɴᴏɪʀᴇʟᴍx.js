try {
  const {
    canModifyQueue,
    ʙᴏᴛꜰɪx,
    ɴᴏɪʀᴄʟᴇᴀɴᴇʀ,
  } = require("../noirtem/noir_env");
  const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ/src");
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // Copyright (C) 2007 Free Software Foundation
  // Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
  // of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
  // 🤍Noir
  // Discord Music YouTube player
  // has been licensed under GNU General Public License
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
  // =============================================================================================================================
  module.exports = {
    name: "skipto",
    cooldown: 3,
    // ==================================================================
    // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    execute(message, args) {
      if (
        message.content.startsWith(ʙᴏᴛꜰɪx + "skipto") &&
        message.channel.name !== "🤍noir"
      ) {
        message.react("❌");
        message.react("🔥");
        const embedfactor = new MessageEmbed()
          .setColor("#E0D268")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`🤍Noir\`
*Please use 👆🏻 channel for any* **ɴᴏɪʀ** *commands.*`
          );
        message.channel.send(embedfactor).catch(console.error);
        // .then((message) => {
        // message.delete({
        // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
        // });
        // });
        return;
      }
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      if (
        message.content.startsWith(ʙᴏᴛꜰɪx + "skipto") &&
        message.channel.name === "🤍noir"
      ) {
        if (!args.length || isNaN(args[0])) {
          const embedskpto1 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
            .setDescription(
              `
**User:** ${message.author}
=========:radio_button:=========

⚓️**usage:**${ʙᴏᴛꜰɪx}{name} <Queue Number>`
            );
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedskpto1).catch(console.error);
          // .then((message) => {
          // message.delete({
          // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          // });
          // });
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        const NoirQueue = message.client.NoirQueue.get(message.guild.id);
        if (!NoirQueue) {
          const embedskpto2 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
            .setDescription(
              `
**User:** ${message.author}
=========:radio_button:=========

There is nothing playing that I could skip for you.`
            );
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedskpto2).catch(console.error);
          // .then((message) => {
          // message.delete({
          // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          // });
          // });
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        if (!canModifyQueue(message.member)) {
          const embedskpto3 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
            .setDescription(
              `
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`
            );
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedskpto3).catch(console.error);
          // .then((message) => {
          // message.delete({
          // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          // });
          // });
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        if (args[0] > NoirQueue.songs.length) {
          const embedshp1 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
            .setDescription(
              `
**User:** ${message.author}
=========:radio_button:=========

There is nothing playing that I could skip for you.`
            );
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedshp1).catch(console.error);
          // .then((message) => {
          // message.delete({
          // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          // });
          // });
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        NoirQueue.playing = true;
        if (NoirQueue.loop) {
          for (let i = 0; i < args[0] - 2; i++) {
            NoirQueue.songs.push(NoirQueue.songs.shift());
          }
        } else {
          NoirQueue.songs = NoirQueue.songs.slice(args[0] - 2);
        }
        NoirQueue.connection.NoirDispatcher.end();
        message.react("✅");
        message.react("🍧");
        NoirQueue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#6272a4")
              .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
              .setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔴 stopped the music!`)
          )
          .catch(console.error);
        // .then((message) => {
        // message.delete({
        // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
        // });
        // });
      }
    },
  };
} catch (ErrorNoir) {
  const ErrorInNoir = new MessageEmbed()
    .setColor("#DB4434")
    .setTitle("🔺ERROR CAUGHT🔻")
    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
    .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
    .setDescription(`
**Noir** has encountered an error.

Please either report to **https://discord.gg/ucPpXWFK**  in discord channel
or
Report to **@hypevoids** in telegram group


**🔺Error Caught🔻**
*${ErrorNoir}*`);
  message.channel.send(ErrorInNoir);
  console.error(ErrorNoir);
}
