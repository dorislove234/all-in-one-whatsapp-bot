const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "2348110572387" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349118181352";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_07_09_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzksXG4gICAgICAgIDYxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDc5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDM2LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYxLFxuICAgICAgICA2MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NixcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRExIYWJqSnFPZ2VrL3RvQytJU0tQR0RFcFM5VzdxT2ZjS1I2VDBvSy9hRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTE4MTgxMzUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0RjZDMkI4QTM5NzhFN0M3REIxQzg0Rjk2ODlBNjFBMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjU5OTUyMzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSnBoRTQwaXpTZzZIR1FyOG9yOXlmUVwiLFxuICBcInBob25lSWRcIjogXCJkNjliZGJlNS1lMGUwLTRkZTktOGZmMi1iZDA1NDYyZDNiNjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMTE2LFxuICAgICAgMTMyLFxuICAgICAgNjksXG4gICAgICA2MSxcbiAgICAgIDE3NyxcbiAgICAgIDE5OSxcbiAgICAgIDkyLFxuICAgICAgODQsXG4gICAgICAxNDYsXG4gICAgICAyNTAsXG4gICAgICA0MyxcbiAgICAgIDkxLFxuICAgICAgODYsXG4gICAgICA4MixcbiAgICAgIDE4MCxcbiAgICAgIDk4LFxuICAgICAgMTA4LFxuICAgICAgMTY4LFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMjIyLFxuICAgICAgMTA2LFxuICAgICAgMTE3LFxuICAgICAgODAsXG4gICAgICA4NixcbiAgICAgIDIxOCxcbiAgICAgIDE3MSxcbiAgICAgIDE5OSxcbiAgICAgIDE5NyxcbiAgICAgIDEyMyxcbiAgICAgIDQzLFxuICAgICAgMTQyLFxuICAgICAgMTAwLFxuICAgICAgMjQyLFxuICAgICAgMzUsXG4gICAgICAxMTcsXG4gICAgICA4OSxcbiAgICAgIDE2OSxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3UE5GSzVaR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExODE4MTM1MjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE5NjA2MzkyMjc5MjM4OjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x5MzUvc0dFTm14Z3JjR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWTJjbEhNWHp6NzJ4bmgwNjE0eUlxNjJlR3BsRy95OTN2L3hveS9lby9rcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0dFFQazQ1S3FrdUE5Mld5ajVSMXNnZi9oN3FiV1h3dXpXWFppWkNHQmJDYmJtSm9ZZGdWSXFFVnVrdU1KaW5Eb3BpSnVLdVN6MEM0M3JoQ3QzMnRDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJObXpKUXdqQTMwcUNTZE1DandoYXpKa2hsM0NFZlFSN3p1QXRpR0tiTFpoQkdqZUtBTDZwR1JzTUJ3V2NxYnI1elpTVzBDWWFyaG5oYXF2UjhXMUNCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE4MTgxMzUyOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1OTk1MjMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnhqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCeGouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPbS9xQXZhejNOQ05vVHNCNHN2NllDVTJHRWp1OEVzZzN1N1psc0FQaWJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NzAyNTcwODQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTk5NTIwMjcwM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


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
