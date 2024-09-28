//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0kzRVZMV01mWFQwOWF1YnI1WVc4Skh0dDR4SWt5UjhBYnFIbG8yQkJHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2xaYjBJY0NrUERuRjRzMFY4aG1kRWZrbWg2QUppbE13RkhSVFJVMHZ4ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQjA0MTN1d3VWMisxUm54Zi91clpBWENmK3hnaExKMHkxcSs5ZDVOeG00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2YnVreE5yUnFVam04RGNXUkR3c3VzSGpTckpZSHlxVTBEMkZKVHVwMFhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFcnpZYlRQOWlVYlFaRGEzZkxINVl6UUQ2ZjYwUG9qMUhYR3dKS0U0MTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRxS3FGeElNVy9VL0FwQ1ArblVIYWdnMUVYUmdmdjJHN3h4UGZPZUs5VVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpIbTBKeGwzcS9XUGd3V1B5VG5JSExsa1Vwc1BuVFFrZTFqYktMMTEwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVhGOVBqRTFwL3JaaEY3MUZBMHhpSWRreVA5VTFEMVhFaElxVmlvNmhEOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQrd1BFR2xMN0tZdHpZMDFVVi9lNUh4ODVGWDhqS3JjbE8xdjlEVkE2MER3Ui9OT3RoT0xjclNDVy9ySDM2VjdtNXNiZVQxZEN6L1gxbFREcmEwbERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkdlNlY3JldEtleSI6InNxdUJTYi9TMXpGaFNPZmY2SUdFeEdCekIrcGFkc2ZCMVorZW5hR1JWNWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBqRHVLRGtaUnlTZ3FOY1RIV2s0ZVEiLCJwaG9uZUlkIjoiMTA5ZTdhZTMtM2EzNC00M2ZlLTlhNDEtYTRiZTg0ZjA3MDZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ3UmRPd2hmNUR2cFE5MFFHN1F5a0ZJU3V2Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZmphZ3pnZHdUODVQQU5NUGZxWGoxZkRwRG89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWlBCTFhMN1ciLCJtZSI6eyJpZCI6IjIzNDgxNTU4NDkyOTI6NTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWljayBDb2xl4a2E4bS/4bSx4bSw4bS44bS14bS84bS6In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKS0t5NVVERU5EUTRiY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBeTI2c1lseVNLa1hNVlJmeUlSZEZWNXgrdTRPWmg1WnZWV3drYzJpM1Q4PSIsImFjY291bnRTaWduYXR1cmUiOiJhOEtxOTZVcmFVNllqcEtFQVhCZzI5cU5Ucm45czFaRWx6OXdOVEtEL1VoaDFZTy9Da3hGTEtsd0tsci9TK1VHekU0SlA3TWdhalRUaXdCVmYweFFCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQit1c0VnZUFjRG95dytyQXdELzM5REovemEwRXhMU25zK1l5Q3diSWdLRnV4UUIwaFRKUFBpMkpyQ0Y2V3FTODg0dGpZbGNxRlBkOG9qbitjb3NsQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTU1ODQ5MjkyOjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFNdHVyR0pja2lwRnpGVVg4aUVYUlZlY2ZydURtWWVXYjFWc0pITm90MC8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc1NTU2NzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSjRaIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
