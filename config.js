lconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_24_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDYwLFxuICAgICAgICA5LFxuICAgICAgICA2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkzLFxuICAgICAgICAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MixcbiAgICAgICAgMjExLFxuICAgICAgICA2OSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDkwLFxuICAgICAgICA5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3TzYxVEo2MGxPdUFpNVpwOHBDc09MalpuUW9rWVA5bThTcUdXOEdtaTc4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnQ1lKN1RiUFFVMk5hX2RrTXBXVnVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNkNzA4NTdiLWIyZmYtNGQ1Zi1hZWEyLTQ0NzhkYjYyOTViN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDIyMixcbiAgICAgIDc2LFxuICAgICAgODksXG4gICAgICAyNSxcbiAgICAgIDIzNCxcbiAgICAgIDc5LFxuICAgICAgMjAyLFxuICAgICAgNjcsXG4gICAgICA1NCxcbiAgICAgIDI0NixcbiAgICAgIDExMixcbiAgICAgIDExLFxuICAgICAgMTMxLFxuICAgICAgMTE5LFxuICAgICAgMjEzLFxuICAgICAgMTQ4LFxuICAgICAgNTEsXG4gICAgICA1NyxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDExOSxcbiAgICAgIDExOCxcbiAgICAgIDIxMixcbiAgICAgIDMwLFxuICAgICAgMTc4LFxuICAgICAgMTc5LFxuICAgICAgMTA2LFxuICAgICAgNzQsXG4gICAgICA5NCxcbiAgICAgIDc0LFxuICAgICAgMTk5LFxuICAgICAgMjQwLFxuICAgICAgMjUxLFxuICAgICAgNDEsXG4gICAgICAxNjgsXG4gICAgICA4LFxuICAgICAgMTgsXG4gICAgICAxOCxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaMTZERlZFVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyMjE2ODMzNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDU0MTA2NzMyNDYyOTg6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMNnJ0YUlIRUxpMTBMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQwYXZDT2xlQ1ZPalVlS0VkNFBwNHhpZzRGaXlzK1FhYWZValJ5UzRTSDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaWFrV2lubmVqRkJoTDZxek1kUkc4cGszOFV4SDdWZCtsNDluZ0tqelNaSTdaVm0rRUwxcGM4QWlGclpZNnR4QldEODJoYW5qbVEzQlgrNkNZM2JrQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZUY4VFV0dVQ2VWxJOGJWMmtHbEtGeWNKMXRCOVVpNlpQOGgwY0NLR29sdmNPTkNUa0NabVFURGxmU2dvYW95WGlRLzdOU2VMSjJnclUxeW9VanlDQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyMjE2ODMzNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU2NjIyNjdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
