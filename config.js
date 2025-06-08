const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_52_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgMTE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICA4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDM0LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI4LFxuICAgICAgICA2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxODksXG4gICAgICAgIDExMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaTNZbjZ2TThuT1ZEK0toQW14UGFsbmJlZnVIbGNnc0F0SnBYb01zRURGND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRjRqTnUzeWFReEswcVRsSVJHbUN3Z1wiLFxuICBcInBob25lSWRcIjogXCJjOWFhYjBmNS0xMDlhLTRlMzQtYTM5OS1iYmFiYTdjYjhiYzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgOTEsXG4gICAgICA5OSxcbiAgICAgIDg3LFxuICAgICAgMTM4LFxuICAgICAgMjA0LFxuICAgICAgMjMsXG4gICAgICAyMDMsXG4gICAgICAxMixcbiAgICAgIDIwNyxcbiAgICAgIDIxNSxcbiAgICAgIDE3MyxcbiAgICAgIDEwNixcbiAgICAgIDI1MCxcbiAgICAgIDEwNyxcbiAgICAgIDE1MSxcbiAgICAgIDE5NCxcbiAgICAgIDIzMixcbiAgICAgIDQ4LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxMDYsXG4gICAgICAzMCxcbiAgICAgIDE5NCxcbiAgICAgIDIxLFxuICAgICAgNzksXG4gICAgICAxMDEsXG4gICAgICAxMzAsXG4gICAgICA0NyxcbiAgICAgIDI1MSxcbiAgICAgIDc1LFxuICAgICAgNzIsXG4gICAgICAyMzUsXG4gICAgICAyNCxcbiAgICAgIDEwMCxcbiAgICAgIDM0LFxuICAgICAgMjI3LFxuICAgICAgMTM2LFxuICAgICAgMzYsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcVVxLzRIRUxYWms4SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImx2VHd3THErUFg0RlFWbEYyVWZUSURyM1MwNW9pbHMyYWVnd1B4NTYxM2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK09mZGJHZjNFVms3dlVYOWVJaFNVZVVMakNXdndmLzlwcG02MkVvMm1IaW1nS3Vac3o1aEl2MlJzbEVqb2dUajYwS2haK3ZncTk1aFJoeGdjdnB5Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicCtLbG1kNVFjZXRTQXVXdEV2MnRmcTkzMU5ZNVl4RVBDd24ySHEzaC9yKytDckRCeTZlcFErWFgydytlQjN6SUpHaUloWmV3OGs3RXI2QnhDenp5aUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA0NjQ2NzY2OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjY5NzY0ODkwNjI2MzM6MTlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA0NjQ2NzY2OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDkzNDc1MTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKVnBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpWby5qc29uIjogIntcImtleURhdGFcIjpcIkY5VVJDM1Zwb2NEOEZKTWtwMGMyRktoVVc3clg2eXQrSmZNVEd6MVN3akU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjE0Mzk5NjQ3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlZwLmpzb24iOiAie1wia2V5RGF0YVwiOlwidFZDNHg5Ty8yaksraEhCOTAwYnJLRlhPaDBJSEhEUWcrTk1RUXFpWnY2ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTQzOTk2NDczLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKVnEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrUHUzenBsWElIY2VTM1A3QVJzMThaTlppYW9UWkdHSmkzMm1TOUJQOURrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxNDM5OTY0NzMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDkzNDc0MjU1MzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
