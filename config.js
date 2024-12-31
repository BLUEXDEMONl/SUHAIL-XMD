const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349122168337,2347041039367";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349122168337,2347041039367";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_08_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICA2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICA4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNkVjQwT1loaG9MRWN1UFoxZ2xkMDNPY21GUm1NTnZ6UHJ0bG9Hc2c4Tm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJFVkhuNlNiUVkyWTc3a3V4RFFxelFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGQ4MjcxY2QtZGY5YS00ZjNkLWI1ZjAtNzM2OTVlYTlkMjg0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMTMxLFxuICAgICAgMjI3LFxuICAgICAgMzMsXG4gICAgICAyNDgsXG4gICAgICAxNjMsXG4gICAgICAyMDYsXG4gICAgICAxMjgsXG4gICAgICA1MixcbiAgICAgIDkwLFxuICAgICAgMzYsXG4gICAgICA5MSxcbiAgICAgIDE4MCxcbiAgICAgIDE4NyxcbiAgICAgIDExOSxcbiAgICAgIDk2LFxuICAgICAgMzQsXG4gICAgICAxNzMsXG4gICAgICA0NyxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMTg4LFxuICAgICAgODUsXG4gICAgICA3NyxcbiAgICAgIDE0MixcbiAgICAgIDY0LFxuICAgICAgMzQsXG4gICAgICA3OSxcbiAgICAgIDE0MixcbiAgICAgIDI0MCxcbiAgICAgIDIyLFxuICAgICAgODMsXG4gICAgICAxNTQsXG4gICAgICA3LFxuICAgICAgNTksXG4gICAgICAxMDksXG4gICAgICAxMjMsXG4gICAgICAzMixcbiAgICAgIDY3LFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFE5NUdHUVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjIxNjgzMzc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ1NDEwNjczMjQ2Mjk4OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2JWN29jSEVLQ2h6N3NHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkMGF2Q09sZUNWT2pVZUtFZDRQcDR4aWc0Rml5cytRYWFmVWpSeVM0U0gwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlN0bUFYQWF2QkJNcHVsaGJzWTQxTXEyQVJUSyt1a2J6UEJ0Tmo5RjhHMTVMNXRsT2NKRlhWQVkyeExzeENGYnpMV1M5My92cjVVNmdlb3hRSDVTTEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjV3TW14YkZaWGZwWDkrRTEyZVBETm02eVRRZHRYcDMwcFZsVXYrbmpEclErOTgwOWEzWTZ3a1FjTlZyNGJ1dk1VWFVFamdSN1ZkQzhScDRqbGxkNkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjIxNjgzMzc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NjQzMzAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTBNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJME0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBV2krUzBuZHBDSHcyek5neXVUVFI4S0UzQm1zaTRraE1ud2VmZlZWeXlVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTU1NDE0NzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTMzNDAxNzU0MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
