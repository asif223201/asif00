║ moment = require("moment-timezone");
const fs = require("fs");

// ================== 🔒 AUTHOR LOCK SYSTEM ==================
const AUTHOR = "FARHAN-KHAN";
const FILE = __filename;

(function lockFile() {
  try {
    const data = fs.readFileSync(FILE, "utf8");

    // author check
    if (!data.includes(`author: "${AUTHOR}"`)) {
      console.log("❌ AUTHOR CHANGED! FILE LOCKED.");

      module.exports = {
        config: {
          name: "locked",
          version: "0.0.0",
          author: "SYSTEM"
        },
        onStart: async function () {
          return console.log("🚫 This file is locked بسبب author change!");
        }
      };
      return;
    }

    // emoji lock (extra protection 😈)
    if (!data.includes("🌺") || !data.includes("😽")) {
      console.log("❌ DESIGN MODIFIED! FILE LOCKED.");

      module.exports = {
        config: {
          name: "locked",
          version: "0.0.0",
          author: "SYSTEM"
        },
        onStart: async function () {
          return console.log("🚫 File locked بسبب design change!");
        }
      };
      return;
    }

  } catch (e) {
    console.log("Lock Error:", e);
  }
})();
// ===========================================================

module.exports = {
  config: {
    name: "info",
    version: "2.5.3",
    author: "FARHAN-KHAN", // ⚠️ CHANGE করলে LOCK হবে
    role: 0,
    countDown: 20,
    shortDescription: {
      en: "Owner & bot information"
    },
    longDescription: {
      en: "Show detailed information about the bot, owner, uptime and socials"
    },
    category: "owner",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {

    // ================= OWNER INFO =================
    const ownerName = "MOMIN-VAI";
    const ownerAge = "21+";
    const ownerFB = "https:// 61587947897924";
    const ownerNumber = "01624783416";
    const status = "Active";

    // ================= BOT INFO =================
    const botName = global.GoatBot?.config?.nickNameBot || "GoatBot";
    const prefix = global.GoatBot?.config?.prefix || ".";
    const totalCommands = global.GoatBot?.commands?.size || 225;

    // ================= MEDIA =================
    const images = [
      "https://files.catbox.moe/8srwzu.mp4"
    ];
    const image = images[Math.floor(Math.random() * images.length)];

    // ================= TIME =================
    const now = moment().tz("Asia/Dhaka");
    const date = now.format("MMMM Do YYYY");
    const time = now.format("h:mm:ss A");

    // ================= UPTIME =================
    const uptime = process.uptime();
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // ================= OUTPUT =================
    return message.reply({
      body: `⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆
‎    ╭•┄┅══❁🌺❁══┅┄•╮
 •—»✨𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢✨«—•
‎    ╰•┄┅══❁🌺❁══┅┄•╯
‎⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆
‎╔══════════════════╗
‎║[𝗢𝗪𝗡𝗘𝗥:-[𝗠𝗜𝗦𝗦-𝗞𝗛𝗨𝗦𝗜] ║
‎║
‎║🤖>𝗕𝗢𝗧-𝗡𝗔𝗠𝗘:-[>${botName}<]
╠══════════════════╣
‎║♻️>𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻:- [>𝗜𝗦𝗟𝗔𝗠<]
‎║ 
‎║📝>𝗔𝗴𝗲:-  [>𝟭𝟲+<]
‎║
‎║🚻>𝗚𝗲𝗻𝗱𝗲𝗿:-  [>𝗠𝗔𝗟𝗘<]
‎╠══════════════════╣
‎║🌐>𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:-↓
‎║→: https://www.facebook.com/profile.php?id=61583670603413                        
‎║
‎║💬>𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿:-↓
‎║ [>m.me/61583670603413<]
‎║
‎║📞>𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽:-↓
‎║ [>wa.me/+8801995928876<]        
‎╠══════════════════╣
‎║>𝗕𝗢𝗧-𝗡𝗔𝗠𝗘:-‎— 𝐏𝐢͜͡𝐜𝐜𝐢 𝐊͡𝐡𝐮͜𝐬𝐢͡:)>𝟑♡🩷🪽<
‎║
‎║⚡>𝗣𝗿𝗲𝗳𝗶𝘅:-『 ${prefix} 』
‎║
‎║📦>𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀:-『 ${totalCommands} 』
‎║
‎║🚀>𝗣𝗶𝗻𝗴:- N/A
╠══════════════════╣
‎║⏳>𝗨𝗽𝘁𝗶𝗺𝗲:- ${uptimeString}
‎║
‎║🕒>𝗕𝗱→𝗧𝗶𝗺𝗲:-『 ${time} 』
‎║
‎║🗓>𝗗𝗮𝘁𝗲:-『 ${date} 』
╠══════════════════╣
‎║🏠>𝐀𝐃𝐃𝐑𝐄𝐒𝐒:-[𝗗𝗛𝗔𝗞𝗔]
‎║             [𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇]
‎║
‎║👩‍❤️‍👨↓
║ >𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏:-[>𝗦𝗜𝗡𝗚𝗟𝗘<]
‎║
‎║🧑‍🔧>𝐖𝐎𝐑𝐊:- [>𝗧𝗥𝗢𝗟𝗟 𝗕𝗢𝗫 𝗞𝗔𝗠𝗟𝗔<]
╠══════════════════╣
‎║
⊱༅༎😽💚༅༎⊱ ]
‎°

— হেটার্স চুদি না পুত্র 
আমি তোর রিয়েল মাম্মাহ খুশি'হহহহহ -:🙋‍♀️✨🐼🍒🌻

°
⊱༅༎😽💚༅༎⊱ ]
╠══════════════════╣
♡𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 𝗠𝗬♡
       ♡𝗤𝗨𝗘𝗘𝗡>𝗕𝗢𝗧♡
╚══════════════════╝`,
      attachment: await global.utils.getStreamFromURL(image)
    });
  }
};
