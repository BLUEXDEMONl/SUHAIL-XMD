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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_13_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM5LFxuICAgICAgICA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgODMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1LFxuICAgICAgICA0NixcbiAgICAgICAgMTYyLFxuICAgICAgICA3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4LFxuICAgICAgICA1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NixcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQzLFxuICAgICAgICA5OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDczLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInNRR2NPL1ljVlB0USt3WTdYOG1wMmFuNWgrSHpUU1ZmZmpwZW5DenFwKzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIll4QU1xWEJhUnR5ekp6cU5mZTcxVGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzQ0NDQxMmYtOGEyNS00YmJmLTgxYzQtZjk4OWNmYTEyNmYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMCxcbiAgICAgIDEyLFxuICAgICAgMjA2LFxuICAgICAgMjUxLFxuICAgICAgMzYsXG4gICAgICAxMzIsXG4gICAgICA4NSxcbiAgICAgIDE3MyxcbiAgICAgIDEyNyxcbiAgICAgIDE1NCxcbiAgICAgIDY2LFxuICAgICAgMTA0LFxuICAgICAgMjIxLFxuICAgICAgNTMsXG4gICAgICAxNTIsXG4gICAgICAxNzEsXG4gICAgICAxODQsXG4gICAgICAxODgsXG4gICAgICAxMjIsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAxMTAsXG4gICAgICAyOSxcbiAgICAgIDIwNSxcbiAgICAgIDE2NCxcbiAgICAgIDE1MCxcbiAgICAgIDE0MyxcbiAgICAgIDY2LFxuICAgICAgMTczLFxuICAgICAgMTg2LFxuICAgICAgMCxcbiAgICAgIDcyLFxuICAgICAgMTMzLFxuICAgICAgMjUsXG4gICAgICA0NyxcbiAgICAgIDQ2LFxuICAgICAgMTk2LFxuICAgICAgODAsXG4gICAgICAwLFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjJOSk1QVzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjIxNjgzMzc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ1NDEwNjczMjQ2Mjk4OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2JWN29jSEVQbXd2THNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkMGF2Q09sZUNWT2pVZUtFZDRQcDR4aWc0Rml5cytRYWFmVWpSeVM0U0gwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZyaDdSd0Mzb01rSE1XeWQ0VHZwMEkydzVkRzB1RDluaEJXb1djc3g1azdTNDFQWVdOLzNnYW42RGphcXYzeDd4UnA0TXJ4RkROR0trSHRvTVV3cUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdnY0tSclZ5ajh2bVF4UGpzT1U0T3hxb1hjUTlualpvT3RjNmdsTk81LzliMW1Ea1ZVeTd1WEhaYVI0ckRreDU3bW52Y2p6RHpZOU9Zck5Zb3BvWENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjIxNjgzMzc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MzM0MDExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTBNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJME0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBV2krUzBuZHBDSHcyek5neXVUVFI4S0UzQm1zaTRraE1ud2VmZlZWeXlVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTU1NDE0NzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNTMzNDAxNzU0MlwifSIKfQ=="  // PUT your SESSION_ID 


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
