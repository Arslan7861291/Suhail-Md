const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_09_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTksXG4gICAgICAgIDg2LFxuICAgICAgICA3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMzLFxuICAgICAgICA0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4LFxuICAgICAgICA0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA5NixcbiAgICAgICAgMTU4LFxuICAgICAgICA5OSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzLFxuICAgICAgICA4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMixcbiAgICAgICAgMjE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyLFxuICAgICAgICAwLFxuICAgICAgICA2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU0LFxuICAgICAgICA0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyLFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3TVlPVFYvbm1sOFdRVUhIbGxFdUhTbUMzUEJzS29xVDVUV0x0T1Z4ejc0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ5MzQzNjk5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzU1QTEwM0E2M0JCMEJFMzY5RDI4QzdCQUNCN0MzM0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDQ1MzcwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDkzNDM2OTkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzREFDREU4NDRBMjNFMUQ3MkRGQzlCRjBFNkNFNkU2RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwNDUzNzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0OTM0MzY5OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZGNEMyQTcxNjA3RkU5QzQzMjY2QkUyRDRFNzc3N0VGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA0NTM3M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ5MzQzNjk5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDdCOThBM0I0RUQwNUQ4MjVEMDVGNzJDNjYwNDY0NzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDQ1MzczXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlIybzlwQ2xNU3BDbldlWDBYbHpiTFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmJkODRmMGQtZDEzOC00ZTdiLTlkYjctOGYyNTg0OTdkYmJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAxMixcbiAgICAgIDE5MyxcbiAgICAgIDY1LFxuICAgICAgNDMsXG4gICAgICAyMTUsXG4gICAgICAxMDcsXG4gICAgICAxMTksXG4gICAgICAyMjEsXG4gICAgICA4MyxcbiAgICAgIDEwOSxcbiAgICAgIDEyNCxcbiAgICAgIDk4LFxuICAgICAgMjM5LFxuICAgICAgMTEwLFxuICAgICAgMTI2LFxuICAgICAgMTQ2LFxuICAgICAgNjYsXG4gICAgICAyMDAsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNCxcbiAgICAgIDE5MSxcbiAgICAgIDIzMyxcbiAgICAgIDE1NixcbiAgICAgIDkwLFxuICAgICAgMTQyLFxuICAgICAgMjI3LFxuICAgICAgNTksXG4gICAgICA0NixcbiAgICAgIDE4OCxcbiAgICAgIDIzMCxcbiAgICAgIDE4NixcbiAgICAgIDExOCxcbiAgICAgIDEzOCxcbiAgICAgIDIyMixcbiAgICAgIDI0NyxcbiAgICAgIDEyNixcbiAgICAgIDEzLFxuICAgICAgMTIzLFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHlRK3lBUTg2TFV0QVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2eVRQZDFBN2RNckRmQXdKQkFNSVhOWU5rSHl4ZzB2WFA5WmNFYVNFcUZVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9ESEs5bVNsMXdJcXZPdExKU2VMQk8zbitKZ0FGMWV2cm9GZy9lWWcvVHg0Y09NT0hRcDlxNkxJR1NLV2hLUUVNMitqMmhqSHN5NkVuQXplcjFiREFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJUZnREdWNiR29EWVIxblVhTzhTaXE1S1dHMFFUSy9CQ1NITnB5ZCtRM21haXkrZ3pDNnJBOEYva1piM2Y0Vkt5OWtSZUZvcUp1TlFwNGU5dlROZ2p3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDkzNDM2OTkzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBcnNsYW4gQWtyYW1cIixcbiAgICBcImxpZFwiOiBcIjE2MTI4MDg3MDYwMDk1MDoyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDkzNDM2OTkzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTA0NTM2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURyK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHIrLmpzb24iOiAie1wia2V5RGF0YVwiOlwia1BGcHJpM3JHWll1SlZ6ZzJtK3haeEdTUkprWC9uSEJySEgvbkh2Nk5yaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTEyNjIwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDQ1MzQxODc2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
