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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349122168337";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_32_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDMzLFxuICAgICAgICA2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYyLFxuICAgICAgICA3NixcbiAgICAgICAgMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDAsXG4gICAgICAgIDczLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDkwLFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTczLFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYxLFxuICAgICAgICA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICA5MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS1pNVjVpM2hBVHVNNDV6L2haTzViN002Z3dvdXBsOThabU5qQUUzQm1xRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRVNJdU9ZRUNTLWk5TjRWYnBCZ1dfUVwiLFxuICBcInBob25lSWRcIjogXCIwYzk2ZTliOC1iOWUyLTRjNDctOGM5Yy1kMjM0NDM0ODIyMzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgNjMsXG4gICAgICAyMjEsXG4gICAgICAyMDQsXG4gICAgICAyNDAsXG4gICAgICAxMDQsXG4gICAgICA3NixcbiAgICAgIDkxLFxuICAgICAgNDAsXG4gICAgICAyMDgsXG4gICAgICAyMjgsXG4gICAgICAxMDgsXG4gICAgICAxMzUsXG4gICAgICAzNixcbiAgICAgIDE4NCxcbiAgICAgIDIwOSxcbiAgICAgIDgsXG4gICAgICAxNzgsXG4gICAgICA5MSxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDIwMixcbiAgICAgIDE4OSxcbiAgICAgIDY1LFxuICAgICAgMjQ4LFxuICAgICAgMTM2LFxuICAgICAgMjA5LFxuICAgICAgMTcwLFxuICAgICAgMjQ1LFxuICAgICAgMTIwLFxuICAgICAgMTI4LFxuICAgICAgMjAsXG4gICAgICAxNjYsXG4gICAgICA2MyxcbiAgICAgIDcsXG4gICAgICAxMjksXG4gICAgICAxNTEsXG4gICAgICAxNTcsXG4gICAgICAxMjgsXG4gICAgICA1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHTUdEUTYyUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyMjE2ODMzNzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDU0MTA2NzMyNDYyOTg6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLKgOG0gOG0oOG0gMmi4bSH44CG76O/XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWpTb1pjSEVMbU1sN3NHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkMGF2Q09sZUNWT2pVZUtFZDRQcDR4aWc0Rml5cytRYWFmVWpSeVM0U0gwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNFNUZsR0dCTTNaczNjVDd6WThncDJHcUdWSGF5WFpYejYzVWFJYWFSWUNlalhrYmNnamV0MUlIejI5ZC9qZTlROFlhZ2VZaHFXUllWSmsxZzZLVURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIml3Y05PT3pLdVZ2OS9jRHUzbWg1dXpJblRYTWFveC9nTDk4S0JMWStsT0IxM20wcWNyRUd6QnVKQXB1cnJDSEpMK0dNNm5RaGt4K2lKanhQeU5kdEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjIxNjgzMzc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NzIzMTMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjVwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGNXAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIWk43Nk14K09vVGMwQmZ1dStXVnZHS2xqMjFIbDF4WFp2YzI5U054cXN3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5Mjc4MzM4NjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjgwNTMxODIwOFwifSIKfQ=="  // PUT your SESSION_ID 


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
