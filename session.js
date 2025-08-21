//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hTNE5OSERrclBIWmdKK3U0UzBBMGlFNTNtOFZvV3Z3RWdwWllZVHYxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1pCaUdpUEJkMWI2cnpKRFI4emEyMU9YNnZwd0NCMUxLcEVvRHlMUnNrYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSjNnanUveVg0RVVQTXh0dXJZNUpGcFBwZ0hvanZrcVVCUDJHRkJGYzJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnazVQNit6SG45ZEdoZEU2aTJPd0ZwUThxSnp3QVdqZTNSOXNSRGppbERVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HeDY0OWpTVnpSZ1QydnFOVDl2RFZXNlB0bmJxM0dZOXNKeC9qK2dPM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtQRWxXZ0s0dkdwbTVPbzdoY0h0cWt2Z1RvT3NlTUs2NUZtVTEwZllRejA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUlkUWdCbmE0aDdlRWh0WitSZkRnK0p3R0hZSXRqdTZYL1QyK2hrS2dGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieE9sSXlVTXZwQWtqaVkxa3lYTGg3Nnc5enIyVFJaRnFDQks5eUJrT0kxYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVuUTM1YnVISGV6QzdMUlhOS25GY2JPUm9EYnJSdEhsd2dCMytGVHdBb08zSTFOQ2svdVNoZHBWUWNWcDVnTXpCSmNWSkVtRFV4Y2xmbmx0eGNObEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJCbWZwYW9qa2V4citENWhnZUVIaVB4UEFNMXd0RDdmTG54cmtkc2owVmFFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwWmdtV1ZmYlN6YTZuVlFzamRwcmpRIiwicGhvbmVJZCI6IjQwMjY1ZjMwLTQ1ZTMtNGJiYi1iYzI5LTI4NjU0NTU3OTJiMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOaGx5NThRWjJFSW5aN2NyNkF3cHFpdFgrT3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWFRZHRJNElIQ0ZMckFLTnNMZjRuRXpNQVBJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNSWUNZSlE1IiwibWUiOnsiaWQiOiI5NDcxMzYyNTIyNzozMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJJ4bSbIOG0oiAnIOG0jeG0hyDhtIsuyp8u4bShIOG0ocqcyarhtJvhtIcg4bSFyoDhtIDJouG0j8m0IiwibGlkIjoiNTU2ODkwOTk2NTMyMzg6MzBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcTE1cThCRUtHY25NVUdHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZSS93L1VUbkNEMEhkSXJYTmxMMlphZUhVQ2IwZzdSaUNQdnlkaUt2aEhzPSIsImFjY291bnRTaWduYXR1cmUiOiJSMEhpZ3JQaXoyQzVoUG9IbkphY0tEV0lmQnIxR1VGVWpqbHkwa0pJVjdOeVR3UnJvenZmenRMMHJvazJ3ckVjV2h6WU8zblZudEhUOC9HcHNDemxBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK29uSWhBaVpMdzRKNEZSWVpUU244UzVzbUh6aGZpSVBBREFtR25tWEo1aTMzWlBWVWM5aEk1WmhEMXA3d2dpRUhZL2pzeGRZcXA5WWNPQ2ZwMGNYQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMzYyNTIyNzozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXQ1A4UDFFNXdnOUIzU0sxelpTOW1XbmgxQW05SU8wWWdqNzhuWWlyNFI3In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU3Nzg2MDcsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1RrIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
