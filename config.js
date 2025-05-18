

module.exports = {
  TOKEN: "",
  language: "pt",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "3aae8c98bfaa4f46af94380560acd6cd",
  spotifyClientSecret : "a45e7b794bea42928ff8112d0977c8b2",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Shadow Garden", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/r93pTtjhcF",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Amane",
      password: "nextgencoderspvt",
      host: "lavalink.nextgencoders.xyz",
      port:  80,
      secure: false
    }
  ]
}
