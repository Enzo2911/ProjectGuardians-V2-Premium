//--------------------Module Guardians-----------------------\\

const Discord = require("discord.js"),
  Guardians = new Discord.Client(),
  colors = require("colors"),
  fs = require("fs"),
  Canvas = require("canvas"),
  search = require("youtube-search"),
  snek = require("snekfetch"),
  math = require("math-expression-evaluator"),
  asciify = require("asciify"),
  rp = require("request-promise"),
  request = require("request"),
  unirest = require("unirest"),
  Config = require("./configurations.json");

//-------------------------------------------------------------------------\\

//------------------------Login Bot---------------------------------\\
if (!Config.Token) {
  console.log(
    "Le token na pas été trouvé ou n'est pas valide. Verifié le token dans configurzations.json"
  );
} else {
  Guardians.login(Config.Token);
}

//------------------------Color Theme---------------------------------\\

colors.setTheme({
  help: "pink",
  warn: "yellow",
  error: "red"
});

//------------------------------------------------------------------\\

//----------------------Log Guardians V2----------------------\\

Guardians.on("ready", () => {
  console.log(`Welcome To Guardians Project V2`.rainbow);
  console.log(`------------------------------------------`.rainbow);
  console.log(`Informations of the selfbot`.rainbow);
  console.log(`------------------------------------------`.rainbow);
  console.log(`Name: ${Guardians.user.tag}`.rainbow);
  console.log(`Id: ${Guardians.user.id}`.rainbow);
  console.log(`Token: ${Guardians.token}`.rainbow);
  console.log(`------------------------------------------`.rainbow);
  console.log(`Stats of the selfbot`.rainbow);
  console.log(`------------------------------------------`.rainbow);
  console.log(`Member Counts: ${Guardians.users.size}`.rainbow);
  console.log(`Server Counts: ${Guardians.guilds.size}`.rainbow);
  console.log(`Version Bot: 2.0 Premium`.rainbow);
  console.log(`------------------------------------------`.rainbow);
  console.log(`@Copyright By JackRyan @2019 @GuardiansProjectV2@`.rainbow);
  console.log(`------------------------------------------`.rainbow);

  Guardians.user.setActivity("V2.0 Project Guardians Premium Ready To Use", {
    startTimestamp: new Date()
  });

  Guardians.user.setAFK(true);
});

//-------------------------------------------------------------------------\\

// ---------------- PERMISSION DISCORD ---------------- \\

const Permission = [
  "KICK_MEMBERS",
  "BAN_MEMBERS",
  "ADMINISTRATOR",
  "CREATE_INSTANT_INVITE",
  "MANAGE_CHANNELS",
  "MANAGE_GUILD",
  "ADD_REACTIONS",
  "VIEW_AUDIT_LOG",
  "VIEW_CHANNEL",
  "READ_MESSAGES",
  "SEND_MESSAGES",
  "SEND_TTS_MESSAGES",
  "MANAGE_MESSAGES",
  "EMBED_LINKS",
  "ATTACH_FILES",
  "READ_MESSAGE_HISTORY",
  "MENTION_EVERYONE",
  "USE_EXTERNAL_EMOJIS",
  "EXTERNAL_EMOJIS",
  "CONNECT",
  "SPEAK",
  "MUTE_MEMBERS",
  "DEAFEN_MEMBERS",
  "MOVE_MEMBERS",
  "USE_VAD",
  "CHANGE_NICKNAME",
  "MANAGE_NICKNAMES",
  "MANAGE_ROLES",
  "MANAGE_ROLES_OR_PERMISSIONS",
  "MANAGE_WEBHOOKS",
  "MANAGE_EMOJIS"
];

// ---------------------------------------------------- \\

//---------------------Command Discord---------------------\\

Guardians.on("message", async message => {
  const msg = message,
    starting = message.content;
  let messageArray = message.content.split(" "),
    args = messageArray.slice(1),
    prefix = Config.Prefix,
    time = Config.Time,
    timespam = Config.TimeSpam,
    timeraid = Config.TimeRaid,
    raid = Config.Raid,
    region = Config.Region,
    apiyoutube = Config.ApiYoutube,
    raideur = Config.Raideur,
    nombreraid = Config.NombreRaid,
    tokenlist = Config.TokenList,
    utilisateur = Config.User;
  var parle = args.join(" "),
    opts = {
      maxResults: 1,
      type: "video",
      key: apiyoutube
    };

  //------------------------------------Command Menu-------------------------------------\\

  if (starting.startsWith(prefix + "Guardians")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    var Guardians = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle(
        `Bienvenue sur Guardians Project V2` + ` *${message.author.tag}*`
      )
      .addBlankField(1)
      .addField(
        `__👿 ${prefix}Guardians 👿__`,
        `** Affiche Le Menu (t'y est deja 😂)**`
      )
      .addBlankField(1)
      .addField(
        `__🐈 ${prefix}Fun 🐈__`,
        `** Affiche Les Commandes Drole ( Blague, Jeux ). !**`
      )
      .addBlankField(1)
      .addField(
        `__🔥 ${prefix}Moderations 🔥__`,
        `** Affiche Les Commandes de Modérations ( Ban, Kick ). !**`
      )
      .addBlankField(1)
      .addField(
        `__💣 ${prefix}Raid 💣__`,
        `** Affiche Les Commandes De Raid ( Destruction de serveur 🔪 // __Ce genre de commande sont sous risque de vous faire bannir par discord__ ). !**`
      )
      .addBlankField(1)
      .addField(
        `__📍 ${prefix}Spamming 📍__`,
        `** Affiche Les Commandes De Spam ( __Ce genre de commande sont sous risque de vous faire bannir par discord__ ). !**`
      )
      .addBlankField(1)
      .addField(
        `__🔧 ${prefix}Setup 🔧__`,
        `**Affiche les Commandes pour configurer votre selfbot et vous( Streaming, Live.. ).!**`
      )
      .addBlankField(1)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setImage(
        "https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894"
      )
      .setTimestamp()
      .setColor(`#FFC0CB`);
    message.channel
      .send(Guardians)
      .catch(console.error())
      .then(d => d.delete(time));
  }

  //------------------------------------------------------------------------------------\\

  //-----------------------------------Command Raid---------------------------------------\\

  if (starting.startsWith(prefix + "Raid")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    var Raid = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle(`Bienvenue sur Guardians Project V2 __Section Raid__`)
      .addField(
        `__💀 ${prefix}NickRaid 💀__`,
        `**Mais un nickname prédéfinit a tout le monde. ! 📎**`
      )
      .addField(
        `__💀 ${prefix}DeleteChannel 💀__`,
        `**Supprime tout les Channel d'un discord. ! 📎**`
      )
      .addField(
        `__💀 ${prefix}DeleteRole 💀__`,
        `**Supprime tout les Role d'un discord. ! 📎**`
      )
      .addField(
        `__💀 ${prefix}CreeRole 💀__`,
        `**Cree 250 role prédefinit par Raid. ! 📎**`
      )
      .addField(
        `__💀 ${prefix}DeleteEmoji 💀__`,
        `**Supprime tout les Emoji d'un discord. ! 📎**`
      )
      .addField(
        `__💀 ${prefix}CreeChannel 💀__`,
        `**Cree 250 channel prédefinit par Raid. !  📎**`
      )
      .addField(
        `__💀 ${prefix}CreeMix 💀__`,
        `**Cree 250 channel & vocaux & role prédefinit par Raid. !  📎**`
      )
      .addField(
        `__💀 ${prefix}Deface 💀__`,
        `**Deface le serveur son icon & sa régions & son nom. 📎**`
      )
      .addField(
        `__💀 ${prefix}AllBan 💀__`,
        `**Ban toute les perssonne sur le serveur en dessous de toi (tu peut pas ban le fonda par ex) ! 📎**`
      )
      .addField(
        `__💀 ${prefix}AllKick 💀__`,
        `**Kick toute les perssonne sur le serveur en dessous de toi (tu peut pas ban le fonda par ex) ! 📎**`
      )
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setImage(
        "https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894"
      )
      .setTimestamp()
      .setColor(`#FFC0CB`);
    message.channel
      .send(Raid)
      .catch(console.error())
      .then(d => d.delete(time));
  }

  //---------------------------------------------------------------------------------------------\\

  //-----------------------------------Command Spamming---------------------------------------\\

  if (starting.startsWith(prefix + "Spamming")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    var Spam = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle(`Bienvenue sur Guardians Project V2 __Section Spam__`)
      .addField(
        `__📝 ${prefix}SpamEmbed 📝__`,
        `**Spam un Discord avec des embed comportant un text prédefinit. 📎**`
      )
      .addField(
        `__📝 ${prefix}SpamText 📝__`,
        `**Spam un Discord avec un text prédefinit. 📎**`
      )
      .addField(`__📝 ${prefix}SpamNazi 📝__`, `**Spam un Message Nazi. ! 📎**`)
      .addField(
        `__📝 ${prefix}SpamDieux 📝__`,
        `**Spam un Message Dieux. ! 📎**`
      )
      .addField(
        `__📝 ${prefix}SpamTTS 📝__`,
        `**Spam un Message A haute voix ( si permission du tts ) ! 📎**`
      )
      .addField(
        `__📝 ${prefix}SpamChoise 📝__`,
        `**Spam un Message Que vous avez choisit directement. ! 📎**`
      )
      // .addField(`__📝 ${prefix}SpamToken 📝__`, `**Spam un Discord avec un text prédefinit via des token prédefinit. ! 📎**`)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setImage(
        "https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894"
      )
      .setTimestamp()
      .setColor(`#FFC0CB`);
    message.channel
      .send(Spam)
      .catch(console.error())
      .then(d => d.delete(time));
  }

  //---------------------------------------------------------------------------------------------\\

  //-----------------------------------Command Moderations---------------------------------------\\

  if (starting.startsWith(prefix + "Moderations")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    var Mod = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle(`Bienvenue sur Guardians Project V2 __Section Moderations__`)
      .addBlankField(1)
      .addField(
        `__👿 ${prefix}Banid 😈__`,
        `**Ban une personne via son id ( Pour les raideur par exemple. 🔒 ) **`
      )
      .addField(
        `__👿 ${prefix}Ban 😈__`,
        `**Ban une personne en le mentionnant **`
      )
      .addField(`__👿 ${prefix}UnBan 😈__`, `**Deban la personne via son id**`)
      .addField(
        `__🆑 ${prefix}Clear 🆑__`,
        `**Efface un nombre de message déterminé ( 250 maximum ).**`
      )
      .addField(
        `__👿 ${prefix}Kick 😈__`,
        `**Kick une personne en le mentionnant **`
      )
      .addField(
        `__🔥 ${prefix}ChangeNick 🔥__`,
        `**Change le nickname d'une personne via son id ( ID + NameDeLaPersonne )**`
      )
      .addField(
        `__🔥 ${prefix}DefaultNickALL 🔥__`,
        `**Remet le nickname de tout le monde par default**`
      )
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setImage(
        "https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894"
      )
      .setTimestamp()
      .setColor(`#FFC0CB`);
    message.channel
      .send(Mod)
      .catch(console.error())
      .then(d => d.delete(time));
  }

  //------------------------------------------------------------------------------------\\

  //-----------------------------------Command Fun---------------------------------------\\

  if (starting.startsWith(prefix + "Fun")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    var Fun = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle(`Bienvenue sur Guardians Project V2 __Section Fun__`)
      .addBlankField(1)
      .addField(
        `__👿 ${prefix}Clash 👿__`,
        `**Random Clash Preinscrit ( Pour niquer des ... 🖕🖕 ) **`
      )
      .addField(
        `__⚽ ${prefix}8ball ⚽__`,
        `**Question (poser par vous) / Réponse (aléatoire) **`
      )
      .addField(
        `__🕵🏾 ${prefix}Token 🕵🏾__`,
        `**Affiche votre token discord (Commande Dangereuse si quelqu'un recupere le token 😂)**`
      )
      .addField(
        `__🐱‍💻 ${prefix}HackToken 🐱‍💻__`,
        `**Hack le token discord de la personne mentionné (Troll 😂)**`
      )
      .addField(
        `__🗣️💻 ${prefix}Echo 🗣️💻__`,
        `**Répete se que vous dite mais avec un embed. 🗣️**`
      )
      .addField(
        `__🎶 ${prefix}SearchMusic 🎶__`,
        `**Recherce la music demander et donne des info dessus. 🎵**`
      )
      .addField(
        `__💬 ${prefix}Space 💬__`,
        `**Ecrit un text il fera un espace entre chaque lettre ;)**`
      )
      .addField(
        `__💬 ${prefix}Reverse 💬__`,
        `**Ecrit un text il le réecrira a l'envers ;)**`
      )
      .addField(
        `__🐯 ${prefix}Avatar 🐯__`,
        `**Mentionne la personne a qui tu veut recupérer ou voir sa pdp.**`
      )
      .addField(
        `__🔢 ${prefix}Calcul 🔢__`,
        `**Donne un calcule et il le résoudrera.**`
      )
      .addField(
        `__ℹ️ ${prefix}ServerInfo ℹ️__`,
        `**Donne des informations sur le server sur lequel vous êtes. :p**`
      )
      .addField(
        `__ℹ️ ${prefix}Whois ℹ️__`,
        `**Donne des informations sur une personne.**`
      )
      .addField(`__💉 ${prefix}Ascii 💉__`, `**Dessine votre text. :p**`)
      .addField(
        `__👿 ${prefix}BoobsDedi 👿__`,
        `**Envoie une boobs avec votre dédicace. 😂**`
      )
      .addField(
        `__👿 ${prefix}TweetNetflix 👿__`,
        `**Envoie un Tweet via le compte netflix avec votre text. :p**`
      )
      .addField(
        `__👿 ${prefix}TweetEmmanuelMacron 👿__`,
        `**Envoie un Tweet via le compte de M. Macron 😂 avec votre text.**`
      )
      .addField(
        `__👿 ${prefix}TweetDonaldTrump 👿__`,
        `**Envoie un Tweet via le compte de Trump 😂 avec votre text.**`
      )
      .addField(
        `__☠️ ${prefix}Base64Enc & ${prefix}Base64Dec ☠️__`,
        `**Encrypte et Decrypt votre text en base64.**`
      )
      .addField(
        `__🕵🏾 ${prefix}Coronavirus ☠️__`,
        `**Survivra tu au virus nommé "☠️ coronavirus ☠️"**`
      )
      .addField(
        `__💬 ${prefix}GenNitro 💬__`,
        `**Genere un nitro et l'envoie (une chance sur 1million jdirais) 😂**`
      )
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setImage(
        "https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894"
      )
      .setTimestamp()
      .setColor(`#FFC0CB`);
    message.channel
      .send(Fun)
      .catch(console.error())
      .then(d => d.delete(time));
  }

  //------------------------------------------------------------------------------------\\

  //-----------------------------Command Setup---------------------------------------\\

  if (starting.startsWith(prefix + "Setup")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    var Setup = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle(`Bienvenue sur Guardians Project V2 __Section Setup__`)
      .addBlankField(1)
      .addField(`__📴 ${prefix}Down 📴__`, `**Eteint le bot ;).**`)
      .addField(
        `__⚽ ${prefix}setGame ⚽__`,
        `**Définira un statut en < mode jeux ⚽ >.**`
      )
      .addField(
        `__🎧 ${prefix}setEcoute 🎧__`,
        `**Définira un statut en < mode écoute 🎧 >.**`
      )
      .addField(
        `__📡 ${prefix}setStream 📡__`,
        `**Définira un statut en < mode Steaming 📡 >.**`
      )
      .addField(
        `__📴 ${prefix}setWatch 📺__`,
        `**Définira un statut en < mode Watching 📺 >.**`
      )
      .addField(
        `__📺 ${prefix}setStatut__`,
        `**Définira un statut par par : idle = absent | dnd = offline  | invisible = invisible  | online = online.**`
      )
      .addField(`__🔫 ${prefix}Null 🔫__`, `**Remettra le statut par default**`)
      .addField(
        `__ ${prefix}WhoisId 🤔__`,
        `**Savoir mon id ou celle de la personne que j'aurais mentionné**`
      )
      .addField(
        `__ 😈 ${prefix}DefaultNickME 😈__`,
        `**Remet mon nickname par default.**`
      )
      .addField(
        `__ 😈 ${prefix}SetAfk & RemAfk 😈__`,
        `** Mais l'afk avec une reason choisi & enleve l'afk. !**`
      )
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setImage(
        "https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894"
      )
      .setTimestamp()
      .setColor(`#FFC0CB`);
    message.channel
      .send(Setup)
      .catch(console.error())
      .then(d => d.delete(time));
  }

  //------------------------------------------------------------------------------------\\

  /////////////////////////////////////// DOWN LE BOT ////////////////////////////////////////

  if (starting.startsWith(prefix + "Down")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());

    message.channel
      .send("**__Merci d'avoir utilise Guardians Project V2 Premium__**")
      .catch(console.error())
      .then(Guardians.destroy());
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////// Clear ///////////////////////////////////////

  if (starting.startsWith(prefix + "Clear")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    let nombre = args.join(" ");
    let i = 0;
    if (!nombre) {
      message.channel
        .send("Vous devez choisir combien de message a supprimer. !")
        .catch(console.error)
        .then(m => m.delete(time));
    }
    if (nombre < 1) {
      message.channel
        .send("Votre nombre de message a supprimer est trop faible. !")
        .catch(console.error)
        .then(m => m.delete(time));
    }
    if (nombre > 250) {
      message.channel
        .send("Vous pouvez supprimer 250 message maximum")
        .catch(console.error)
        .then(m => m.delete(time));
    }
    if (message.channel.type === "text") {
      return message.channel
        .fetchMessages({ limit: nombre })
        .then(messages => {
          messages.forEach(m => {
            m.delete().catch(console.error);
            i++;
          });
        })
        .then(() => {
          if (i > nombre) {
            i = 0;
          }
          const thisbetter = new Discord.RichEmbed()
            .setDescription(nombre + " messages ont bien été supprimes")
            .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
            .setColor(`#FFC0CB`)
            .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
            .setTimestamp();
          message.channel
            .send(thisbetter)
            .catch(console.error)
            .then(m => m.delete(time));
        })
        .catch(console.error);
    }
  }

  ////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////// BASE 64 ENCODE //////////////////////////////////////

  if (starting.startsWith(prefix + "Base64Enc")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());

    const text = args.join(" ");
    var b = new Buffer(text);
    var coded = b.toString("base64");
    const baseencode = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle(`Base64 Encode`)
      .addField(`__Input: __`, `**${text}**`)
      .addField(`__Output: __`, `**${coded}**`)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setTimestamp()
      .setColor(`#FFC0CB`);
    message.channel
      .send(baseencode)
      .catch(console.error())
      .then(d => d.delete(time));
  }

  /////////////////////////////////// BASE 64 DECODE ////////////////////////////////////

  if (starting.startsWith(prefix + "Base64Dec")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());

    const text = args.join(" ");
    var b = new Buffer(text, "base64");
    var decoded = b.toString();
    const basedecode = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle(`Base64 Decode`)
      .addField(`__Input: __`, `**${text}**`)
      .addField(`__Output: __`, `**${decoded}**`)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setTimestamp()
      .setColor(`#FFC0CB`);
    message.channel
      .send(basedecode)
      .catch(console.error())
      .then(d => d.delete(time));
  }

  ///////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////// DEFACE TOUT LE MONDE //////////////////////////////

  if (starting.startsWith(prefix + "Deface")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (message.guild.member(message.author).hasPermission("MANAGE_GUILD")) {
      message.guild.setIcon(
        "https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894"
      );
      var interval = setInterval(function() {
        message.guild.setName(raideur[Math.floor(Math.random() * nombreraid)]); // RAIDEUR EN LETTRE ET DANS NOMBRERAID LE NOMBRE DE LETTRE QUE TU A MIS.
        message.guild.setRegion(region[Math.floor(Math.random() * 15)]);
      }, timeraid);
    } else {
      console.log(console.error());
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  ///////////////////////////// NICK /////////////////////////////////////

  if (starting.startsWith(prefix + "NickRaid")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (
      message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES")
    ) {
      message.guild.members.forEach(member => {
        if (member.setNickname(raid));
      });
    } else {
      console.log(console.error());
    }
  }

  /////////////////////////////////////////////////////////////////////////

  //////////////////////////////// DELETE CHANNEL //////////////////////////////////////

  if (message.content.startsWith(prefix + "DeleteChannel")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
      message.guild.channels.forEach(channel => {
        if (channel.deletable) channel.delete();
      });
    } else {
      console.log(console.error());
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////// DELETE ROLE ///////////////////////////////////////

  if (starting.startsWith(prefix + "DeleteRole")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (message.guild.member(message.author).hasPermission("MANAGE_ROLES")) {
      message.guild.roles.forEach(role => {
        role.delete();
      });
    } else {
      console.log(console.error());
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////// CREE ROLE ///////////////////////////////////////

  if (starting.startsWith(prefix + "CreeRole")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (message.guild.member(message.author).hasPermission("MANAGE_ROLES")) {
      let i = 0;
      let interval = setInterval(function() {
        message.guild.createRole(raid).then(i++);
        if (i < 250) {
          clearInterval(interval);
        }
      }, timeraid);
    } else {
      console.log(console.error());
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////// CREE MIX /////////////////////////////////////

  if (starting.startsWith(prefix + "CreeMix")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
      let i = 0;
      let interval = setInterval(function() {
        message.guild.createRole(raid).then(i++);
        message.guild.createChannel(raid).then(i++);
        message.guild.createChannel(raid, "voice").then(i++);
        if (i < 750) {
          clearInterval(interval);
        }
      }, timeraid);
    } else {
      console.log(console.error());
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////// CREE CHANNEL /////////////////////////////////////

  if (starting.startsWith(prefix + "CreeChannel")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
      let i = 0;
      let interval = setInterval(function() {
        message.guild.createChannel(raid).then(i++);
        if (i < 250) {
          clearInterval(interval);
        }
      }, timeraid);
    } else {
      console.log(console.error());
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////// SPAM NAZI ///////////////////////////////////////

  if (starting.startsWith(prefix + "SpamNazi")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    let inteval = setInterval(function() {
      msg.channel.send(
        "@everyone ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? Jugez-moi, c'est vous que vous jugerez. Adorlf Hitler(1981)"
      );
    }, timespam);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////// SPAM DIEUX ///////////////////////////////////////

  if (starting.startsWith(prefix + "SpamDieux")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    let inteval = setInterval(function() {
      msg.channel.send(
        "@everyone ✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞✞ Place Dieu devant toi sans craindre rien derriere. Dieux (1874)"
      );
    }, timespam);
  }

  //////////////////////////////////////////////// SPAM TTS ///////////////////////////////////////

  if (starting.startsWith(prefix + "SpamTTS")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    let inteval = setInterval(function() {
      msg.channel.send(
        "@everyone If I say that shit then I mean it  She calls me, I screen it, I'm only fuckin' if it's convenient You lie on pussy, that's weak shit, we pass pussy 'round, that's G shit But you ain't fam so what is this we shit? You cuff yours and then leash it  Listen, I'm tellin' you, it's my world, I does what I wish to If you're mad well too bad, sounds like a personal issue  I walk in, they all stare like Who the fuck is this dude? I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT",
        { tts: true }
      );
    }, timespam);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////// SPAM CHOISE ///////////////////////////////////////

  if (starting.startsWith(prefix + "SpamChoise")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    var spammsg = args.join(" ");
    let inteval = setInterval(function() {
      msg.channel.send(spammsg);
    }, timespam);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////SPAM EMBED///////////////////////////////////////

  var linkembed = Config.LinkEmbed;

  if (starting.startsWith(prefix + "SpamEmbed")) {
    const inteval = setInterval(function() {
      const embedd = new Discord.RichEmbed()
        .setDescription(linkembed)
        .setColor(`#FFC0CB`)
        .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
        .setTimestamp();
      message.channel.send(embedd).catch(console.error);
    }, timespam);
  }

  ////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////SPAM NORMAL/////////////////////////////////////////

  var linknormal = Config.LinkNormal;

  if (starting.startsWith(prefix + "SpamText")) {
    const interval = setInterval(function() {
      message.channel.send(linkembed).catch(console.error);
    }, timespam);
  }

  //////////////////////////////////////////////// REVERSE ///////////////////////////////////////

  if (starting.startsWith(prefix + "Reverse")) {
    if (!utilisateur.includes(message.author.id)) return;

    if (args.length < 1) {
      message.edit("Vous devez entrer le texte ? inverser !");
    }

    message
      .edit(
        args
          .join(" ")
          .split("")
          .reverse()
          .join("")
      )
      .then(m => m.delete(time));
  }

  //-------------------------------------------------------------------------------------\\

  ////////////////////////////// CHANGE TON JEUX ///////////////////////////////////////////

  if (starting.startsWith(prefix + "setGame")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    Guardians.user.setGame(parle);
    return message.reply("Mon **jeu** a etait **modifie** avec **succes** !!");
  }

  ///////////////////////////// CHANGE TON ECOUTE ///////////////////////////////////////////
  else if (starting.startsWith(prefix + "setEcoute")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    Guardians.user.setActivity(parle, { type: "LISTENING" });
    return message.reply(
      "Mon **Ecoute** a etait **modifie** avec **succes** !!"
    );
  }

  ///////////////////////////// CHANGE TON Watch ///////////////////////////////////////////
  else if (starting.startsWith(prefix + "setWatch")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    Guardians.user.setActivity(parle, { type: "WATCHING" });
    return message.reply(
      "Mon **Watching** a etait **modifie** avec **succes** !!"
    );
  }

  ///////////////////////////// CHANGE TON STREAM ///////////////////////////////////////////
  else if (starting.startsWith(prefix + "setStream")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    Guardians.user.setActivity(parle, {
      type: "STREAMING",
      url: "https://www.twitch.tv/Project/Guardians"
    });
    return message.reply(
      "Mon **Streaming** a etait **modifie** avec **succes** !!"
    );
  }

  ///////////////////////////// REMET A NULL  ///////////////////////////////////////////
  else if (starting.startsWith(prefix + "Null")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    Guardians.user.setActivity(null);
    return message.reply(
      "Mon **Jeux, Stream, Watch, Ecoute** a etait **remit** par **Default** !!"
    );
  }

  /////////////////////////////// CHANGE TON STATUT /////////////////////////////////////////////
  else if (starting.startsWith(prefix + "setStatut")) {
    if (message.author.id !== Guardians.user.id) return;
    if (message.deletable) message.delete();
    Guardians.setStatus(parle);
    return message.reply(
      "Mon **status** a etait **modifie** avec **succes** !!"
    );
    // idle = absent | dnd = offline  | invisible = invisible  | online = online \\
  }

  //-----------------------------------Command Clash---------------------------------------\\

  if (starting.startsWith(prefix + "Clash")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    const clashh = Config.Clash;
    let clash = clashh[Math.floor(Math.random() * clashh.length)];
    var Clash = new Discord.RichEmbed()
      .setTitle("__** Clash Party **__")
      .setColor(`#FFC0CB`)
      .setDescription(clash)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@");
    message.channel
      .send(Clash)
      .catch(console.error())
      .then(d => d.delete(30000));
  }

  //---------------------------------------------------------------------------------------\\

  //------------------------------------Command 8Ball--------------------------------------\\

  if (starting.startsWith(prefix + "8ball")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    var question = starting
      .split(" ")
      .join(" ")
      .slice(13);
    const Reponse = Config.Reponse;
    const ball = new Discord.RichEmbed()
      .setDescription("__** Jeux 8ball **__")
      .setColor(`#FFC0CB`)
      .addField("Question: ", question)
      .addField("Reponse:", Reponse[Math.floor(Math.random() * Reponse.length)])
      .setThumbnail(message.author.avatarURL);
    message.channel
      .send(ball)
      .catch(console.error())
      .then(d => d.delete(10000));
  }

  //------------------------------------------------------------------------------------\\

  //------------------------------------Command Token--------------------------------------\\

  if (starting.startsWith(prefix + "Token")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    msg.channel.send("Etes vous sur?").then(() => {
      message.channel
        .awaitMessages(response => response.content === "Oui", {
          max: 1,
          time: time,
          errors: ["time"]
        })
        .then(collected => {
          const token = new Discord.RichEmbed()
            .setTitle("__**  Votre Token  **__")
            .setColor(`#FFC0CB`)
            .setDescription(
              `Voici votre token ( **a garder prive absolument** ) ${Config.Token}`
            );
          message.channel
            .send(token)
            .catch(console.error())
            .then(d => d.delete(time));
        });
    });
  }

  //---------------------------------------------------------------------------------------\\

  if (starting.startsWith(prefix + "HackToken")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    let mention = message.mentions.users.first();
    const token = [
      "NDgzNDczOTEzMDMzMTI5OTk3.DmT-HA.JTBUeVQs95ckwwThrPjbXvqSViE",
      "NDg1MDgzOTEzMTcwMDU5Mjg1.DmrZNQ.Pk3z74IojeopiKmaVFPvuHJetuQ",
      "NDg1MDgzMjg2ODkzMjMyMTMw.DmrYmQ.vZpbSCwKk4clIBVsnmLf2P_X_kQ",
      "NDg1MDg2ODMyMDk1MTMzNjk2.Dmrb7g.nwHpax0Hf8jXAxnHofhMoDMITLY",
      "NDgzODkyNzk0NDI4MjI3NTkz.DmaD8A.QgjxtZPaeZPN_yZdh1hiX6s3qWM",
      "NDgzODk5NjI5NDc0NDE0NjAz.DmaKXA.JXrDqX3D6AvxLqZ_Wl_7WON2FAA",
      "NDgzOTAwMzAyNjU5OTQ0NDQ4.DmaLBg.EhzZs_gWfy7aEctoAr0yajjbbPY",
      "NDgzOTAwODE3NTE0OTU0NzU2.DmaMUw.l9_MyouZ1VE0lSEDtiWnmb0iH_g",
      "NDgzOTAyMTQ2MzA0MDE2Mzg1.DmaM6A.AQwjv0gGIoo4ssGweYe2J2SHw_c",
      "NDgzOTAyNzEyMjMzMDY2NDk3.DmaNag.QkToVbYxOroREeo5EJgcc_szWTs",
      "NDgzOTAzMjg2NTM4MTQxNzA2.DmaOKQ.Z5RtYfYn99_W2j-OKhqAjG1GTkM",
      "NDgzOTA0MDYxNjQ1NzgzMDQx.DmaOtw.VQCrDHn5Geg6snXDUuv-MsyYJzE",
      "NDg1MDg4NTIwMTc2OTI2NzIw.DmrdkA.zG8N59V6gwwL9qbow-KShSunfPk",
      "NDg1MDg5MTE5MDgxMzMyNzM3.DmrePg.LLrrGPrqG8KYFjUlDqNhn6o8fOA",
      "NDg1MDkxODkzMzE5ODI3NDU3.DmrgmQ.KkZllmOhKdbUDq4WxFgyPGeHRpI",
      "NDg1MDkyMzQ4ODA4NjU4OTU0.DmrhMg.dGm-NvRg65v_I3JGzGp9zEscr7g",
      "NDg1MDkyODkxODExNzc0NDY1.Dmrh4A.jEnSdDM5qJhubPbWXZqPwb0Vhqc",
      "NDg1MDkzNzA3NDg2NTkzMDU2.Dmrihg.t_MdTJFUI71__p4ifk0zJipujCg",
      "NDg1MDk0MjU0MDI1MTEzNjEy.Dmri9w.nrCpJ6_gxxUO5oNJX-zPBqQ8alI",
      "NDg1MDk0NzQxNjA0Njk2MDg3.DmrjTw.8kQaOrs--zhJgHq-5zvHtHJs0Xg",
      "NDg1MDk1MTcwODEyMTQ5NzYx.Dmrjuw.bPtHvAR84wMNMgovwitEharzqRk",
      "NDg1MDk3MDIyODIzODU4MTc3.Dmrlaw.-x4N1Prspc1vO0Bb5SFJGb5Y4Ag"
    ];

    if (!mention)
      return message.channel.send("Veuillez mentionne une personne a Haxorer");

    message.channel.send("Haxorage En Cours...").then(msg => {
      var i = 5;
      var b = "=";
      let inteval = setInterval(function(test) {
        if (i < 100) {
          i = i + 5;
          b = b + "=";
          var Barre = b + "=";
          var Chargement = i + "%";
          msg
            .edit("Progression du hack : [ " + Barre + " ] " + Chargement)
            .catch(console.error())
            .then(d => d.delete(time));
        } else {
          clearInterval(inteval);
          if (message.deletable) message.delete().catch(console.error());
          const HackToken = new Discord.RichEmbed()
            .setAuthor(
              message.author.username + "  HACK :  " + mention.username
            )
            .setDescription(
              `${mention.username}` +
                " Vous venez de vous faire hacker votre token par " +
                `${message.author.username}`
            )
            .addBlankField(1)
            .setColor(`#FFC0CB`)
            .addField(
              "Voici Le Token Discord de la personne mentionne:",
              token[Math.floor(Math.random() * token.length)]
            )
            .setImage(
              "https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2Fimages.jpg?1538919390582"
            )
            .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
            .setTimestamp();
          message.channel
            .send(HackToken)
            .catch(console.error)
            .then(m => m.delete(time));
        }
      }, 1500);
    });
  }

  //-------------------------------Command Eval--------------------------------------\\

  if (starting.startsWith(prefix + "Eval")) {
    if (!utilisateur.includes(message.author.id)) return;
    var Code = args.join(" ");
    if (message.deletable) message.delete().catch(console.error());
    try {
      message.channel
        .send(eval(Code))
        .catch(console.error)
        .then(m => m.delete(time));
    } catch (err) {
      message.channel
        .sendEmbed(
          new Discord.RichEmbed()
            .setAuthor("Erreur Eval")
            .setColor(`#FFC0CB`)
            .addField(
              "Une erreur a ete detecte sur le code ",
              "**Le code etait : **" +
                " --" +
                Code +
                "-- " +
                "**  L'erreur est :**" +
                ` --${err}-- !`
            )
            .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
            .setTimestamp()
          // Si Une erreur a ete detecte sur le code
        )
        .catch(console.error)
        .then(m => m.delete(time));
    }
  }

  //-------------------------------------------------------------------------------\\

  /////////////////Fr////////////// SAY ////////////////////////////////////////////

  if (starting.startsWith(prefix + "Echo")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    let mention = message.mentions.users.first();
    var echoo = args.join(" ");
    const echo = new Discord.RichEmbed()
      .setTitle("")
      .setDescription(echoo)
      .setColor(`#FFC0CB`)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setTimestamp();
    message.channel
      .send(echo)
      .catch(console.error)
      .then(m => m.delete(time));
  }

  //////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////// BAN ID ///////////////////////////////////////

  if (starting.startsWith(prefix + "Banid")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    let args = message.content.split(" ").slice(1);
    if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
      message.guild.ban(args[0]).catch(error => {
        const banid = new Discord.RichEmbed()
          .addField(
            `**${message.author.username}**`,
            `__banissement de <@${args[0]}> avec succes.__`
          )
          .setColor(`#FFC0CB`)
          .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
          .setTimestamp();
        message.channel
          .send(banid)
          .catch(console.error)
          .then(m => m.delete(time));
      });
    } else {
      const banerror = new Discord.RichEmbed()
        .addField(
          `**${message.author.username}**`,
          `__Erreur de banissement de <@${args[0]}>.__`
        )
        .setColor(`#FFC0CB`)
        .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
        .setTimestamp();
      message.channel
        .send(banerror)
        .catch(console.error)
        .then(m => m.delete(time));
    }
  }

  //////////////////////////////// SPLIT ///////////////////////////////////

  if (starting.startsWith(prefix + "Space")) {
    if (!utilisateur.includes(message.author.id)) return;
    var split = args.join(" ");
    let world = split;
    message.edit(world.split("").join(" "));
  }

  ///////////////////////////////////////////////////////////////////////////

  ///////////////////////////////WHOIS ID ///////////////////////////////////

  if (starting.startsWith(prefix + "WhoisId")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    var mentionn = message.mentions.users.first();
    const Id = new Discord.RichEmbed()
      .setTitle(`Id de ${mentionn.username}`)
      .setThumbnail(mentionn.avatarURL)
      .setDescription(`Voici l'id demande : ${mentionn.id}`)
      .setColor(`#FFC0CB`)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setTimestamp();
    message.channel
      .send(Id)
      .catch(console.error)
      .then(m => m.delete(time));
  }

  ///////////////////////////////////////////////////////////////////////////

  //////////////////////////// BAN ///////////////////////////////////////////

  if (starting.startsWith(prefix + "Ban")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
      message.guild.ban(args[0]).catch(error => {
        const ban = new Discord.RichEmbed()
          .addField(
            `**${message.author.username}**`,
            `__Banissement de ${args} avec succes.__`
          )
          .setColor(`#FFC0CB`)
          .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
          .setTimestamp();
        message.channel
          .send(ban)
          .catch(console.error)
          .then(m => m.delete(time));
      });
    } else {
      const banerr = new Discord.RichEmbed()
        .addField(
          `**${message.author.username}**`,
          `__Erreur de banissement de ${args}.__`
        )
        .setColor(`#FFC0CB`)
        .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
        .setTimestamp();
      message.channel
        .send(banerr)
        .catch(console.error)
        .then(m => m.delete(time));
    }
  }

  ///////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////

  if (starting.startsWith(prefix + "Kick")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
      message.guild.kick(args[0]).catch(error => {
        const ban = new Discord.RichEmbed()
          .addField(
            `**${message.author.username}**`,
            `__${args} a ete kick avec success.__`
          )
          .setColor(`#FFC0CB`)
          .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
          .setTimestamp();
        message.channel
          .send(ban)
          .catch(console.error)
          .then(m => m.delete(time));
      });
    } else {
      const banerr = new Discord.RichEmbed()
        .addField(
          `**${message.author.username}**`,
          `__Erreur pour kick ${args}.__`
        )
        .setColor(`#FFC0CB`)
        .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
        .setTimestamp();
      message.channel
        .send(banerr)
        .catch(console.error)
        .then(m => m.delete(time));
    }
  }

  ///////////////////////////////////////////////////////////////////////////

  ///////////////////////////CHANGE NICK/////////////////////////////////////

  if (starting.startsWith(prefix + "ChangeNick")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (
      message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES")
    ) {
      message.guild.members.get(args[0]).setNickname(args[1]);

      const nicksuccess = new Discord.RichEmbed()
        .setDescription(
          `**${args[0]}** __Nickname Change avec success par ${args[1]}.__`
        )
        .setColor(`#FFC0CB`)
        .setFooter(`Pour get l'id de la personne utilise la commande WhoisId`);
      message.channel
        .send(nicksuccess)
        .catch(console.error)
        .then(m => m.delete(time));
    } else {
      const nickerror = new Discord.RichEmbed()
        .setDescription(`**${args[0]}** __Nickname n'a pas pus ?tre change.__`)
        .setColor(`#FFC0CB`)
        .setFooter(`Pour get l'id de la personne utilise la commande WhoisId`);
      message.channel
        .send(nickerror)
        .catch(console.error)
        .then(m => m.delete(time));
    }
  }

  ///////////////////////////////////////////////////////////////////////////

  /////////////////////////DEFAULT NICK ALL//////////////////////////////////

  if (starting.startsWith(prefix + "DefaultNickALL")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (
      message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES")
    ) {
      message.guild.members.forEach(member => {
        if (member.setNickname(" "));
      });

      const defaultsuccess = new Discord.RichEmbed()
        .setDescription(
          `__**Le Nickname de tout le monde va ?tre remis par default.**__`
        )
        .setColor(`#FFC0CB`)
        .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
        .setTimestamp();
      message.channel
        .send(defaultsuccess)
        .catch(console.error)
        .then(m => m.delete(time));
    } else {
      const defaulterror = new Discord.RichEmbed()
        .setDescription(
          `__**Impossible de remettre le Nickame de tout le monde a default**__`
        )
        .setColor(`#FFC0CB`)
        .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
        .setTimestamp();
      message.channel
        .send(defaulterror)
        .catch(console.error)
        .then(m => m.delete(time));
    }
  }

  ////////////////////////////////////////////////////////////////////////////

  /////////////////////////DEFAULT NICK ME///////////////////////////////////

  if (starting.startsWith(prefix + "DefaultNickME")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    message.guild.member(message.author).setNickname(" ");
    const mesuccess = new Discord.RichEmbed()
      .setDescription(`__**Mon Nickname a ete remis par default**__`)
      .setColor(`#FFC0CB`)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setTimestamp();
    message.channel
      .send(mesuccess)
      .catch(console.error)
      .then(m => m.delete(time));
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////// SERVER ///////////////////////////////////////////////

  if (starting.startsWith(prefix + "ServerInfo")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    let servericon = message.guild.iconURL;
    var date = message.guild.createdAt;
    let server = new Discord.RichEmbed()
      .setDescription("**                                      SERVER INFO  **")
      .addField("Server Name: ", message.guild.name, true)
      .addField("Creator's id: ", message.guild.owner.id, true)
      .addField("Creator Of This Serveur: ", message.guild.owner, true)
      .addField(
        "Cree le: ",
        date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " : " +
          date.getHours() +
          ":" +
          date.getMinutes(),
        true
      )
      .addField("Total members: ", message.guild.memberCount, true)
      .addField("Nombre de Channels: ", message.guild.channels.size, true)
      .addField("Nombre de Roles: ", message.guild.roles.size, true)
      .addField("Region du Serveur: ", message.guild.region, true)
      .addField(
        "Emoji du Serveur: ",
        message.guild.emojis.size === 0
          ? "Ce serveur n'a pas d'Emoji"
          : message.guild.emojis.size + "/ 100",
        true
      )
      .addField(
        "Channel AFk: ",
        message.guild.afkChannel === null
          ? "Ce serveur n'a pas de Salon AFK"
          : message.guild.afkChannel.name,
        true
      )
      .addField(
        "Niveau de verification du Server:",
        message.guild.verificationLevel,
        true
      )
      .setThumbnail(servericon)
      .setColor(`#FFC0CB`)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setTimestamp();
    message.channel
      .send(server)
      .catch(console.error)
      .then(m => m.delete(time));
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////// CALCULATRICE /////////////////////////////////////

  if (starting.startsWith(prefix + "Calcul")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (args.length < 1) {
      message
        .reply("Tu dois fournir un calcul valide :boom:")
        .catch(console.error)
        .then(m => m.delete(time));
    }
    const question = args.join(" ");
    let answer;
    try {
      answer = math.eval(question);
    } catch (err) {
      console.error(`Invalid math equation: ${err}`);
    }

    message.delete();
    let calcule = new Discord.RichEmbed()
      .setDescription("**Calculatrice !**")
      .addField("**Equation:**", question)
      .addField("**Resultat:**", answer)
      .setColor(`#FFC0CB`)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setTimestamp();
    message.channel
      .send(calcule)
      .catch(console.error)
      .then(m => m.delete(time));
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////// AVATAR ////////////////////////////////////////////////

  if (starting.startsWith(prefix + "Avatar")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    const user = message.mentions.users.first();
    if (!user) {
      message
        .reply("ta pas mentionner de personne :smile: !.")
        .catch(console.error)
        .then(m => m.delete(time));
    }

    if (!user.avatarURL) {
      message
        .reply(`Il na pas d'avatar !.`)
        .catch(console.error)
        .then(m => m.delete(time));
    }

    let avatar = new Discord.RichEmbed()
      .setDescription("**Avatar Discord**")
      .addField(`${user.username}'s Avatar`, `[Download](${user.avatarURL})`)
      .setImage(user.avatarURL)
      .setColor(`#FFC0CB`)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setTimestamp();
    message.channel
      .send(avatar)
      .catch(console.error)
      .then(m => m.delete(time));
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////// ASCII /////////////////////////////////////////////

  if (starting.startsWith(prefix + "Ascii")) {
    if (!utilisateur.includes(message.author.id)) return;
    let textasciify = args.join(" ");
    if (!textasciify)
      return message
        .edit("Tu n'a rien ecrit :sob:. !!")
        .catch(console.error)
        .then(m => m.delete(time));
    asciify(textasciify, { font: "standard" }, function(err, res) {
      if (err) {
        console.error(err);
        message.channel
          .send(`Une erreur a ete produite // L'Error est : \`\`\`${err}\`\`\``)
          .catch(console.error)
          .then(m => m.delete(time));
        return;
      }

      message
        .edit("```\n" + res + "```\n")
        .catch(console.error)
        .then(m => m.delete(time));
    });
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////// WHOIS /////////////////////////////////////////////

  if (starting.startsWith(prefix + "Whois")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    let mention = message.mentions.users.first();
    if (!mention) {
      return message
        .reply("Veuillez mentionne une personne")
        .catch(console.error)
        .then(m => m.delete(time));
    }
    const rejointdiscord =
      mention.createdAt.getDate() +
      1 +
      "/" +
      (mention.createdAt.getMonth() + 1) +
      "/" +
      mention.createdAt.getFullYear() +
      " | " +
      mention.createdAt.getHours() +
      ":" +
      mention.createdAt.getMinutes() +
      ":" +
      mention.createdAt.getSeconds();

    let last;
    if (mention.lastMessage === null) {
      last = "Cette utilisateur na pas recemment parler";
    } else {
      last = mention.lastMessage;
    }
    let stat;
    if (mention.presence.status === "offline") {
      stat = "Offline";
    } else if (mention.presence.status === "online") {
      stat = "Online";
    } else if (mention.presence.status === "dnd") {
      stat = "Indisponible";
    } else if (mention.presence.status === "idle") {
      stat = "Invisible";
    }
    let game;
    if (mention.presence.game === null) {
      game = "Cette utilisateur n'a actuellement pas de jeux lance.";
    } else {
      game = mention.presence.game.name;
    }
    let mentione;
    if (mention.bot === false) {
      mentione = "N'est pas un bot.";
    } else if (mention.bot === true) {
      mentione = "Est un bot.";
    }
    const whois = new Discord.RichEmbed()
      .addField(
        "Infomation :",
        `Pseudo : ${mention.username} \n Tag : ${mention.tag} \n Discriminateur : ${mention.discriminator} \n Id : ${mention.id} \n Rejoint discord : ${rejointdiscord} \n Son Statut : ${stat} \n Dernier Message Envoye : ${last} \n Cet user ${mentione} \n Utilisateur : ${game}`
      )
      .addField(
        `Role que le joueur a sur le serveur ! :`,
        "``" +
          message.mentions.members
            .first()
            .roles.map(r => r.name)
            .join(", ") +
          "``" +
          "\n"
      )
      .setThumbnail(mention.displayAvatarURL)
      .setColor(`#FFC0CB`)
      .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
      .setTimestamp();
    message.channel
      .send(whois)
      .catch(console.error)
      .then(m => m.delete(time));
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  if (starting.startsWith(prefix + "UnBan")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
      message.guild.unban(args[0]);

      const debansuccess = new Discord.RichEmbed()
        .setDescription(`__**Bannisement de ${args[0]} avec success.**__`)
        .setColor(`#FFC0CB`)
        .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
        .setTimestamp();
      message.channel
        .send(debansuccess)
        .catch(console.error)
        .then(m => m.delete(time));
    } else {
      const defaulterror = new Discord.RichEmbed()
        .setDescription(`__**Impossible de ban ${args[0]}**__`)
        .setColor(`#FFC0CB`)
        .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
        .setTimestamp();
      message.channel
        .send(defaulterror)
        .catch(console.error)
        .then(m => m.delete(time));
    }
  }

  ////////////////////////////////// AFK / ENLEVE AFK /////////////////////////////////////////////////

  let afk = JSON.parse(fs.readFileSync("./Statut.json", "utf8"));

  ////////////////////////////////////// ENLEVE AFK //////////////////////////////////////////////////

  if (starting.startsWith(prefix + "RemAfk")) {
    if (!utilisateur.includes(message.author.id)) return;

    if (afk[msg.author.id]) {
      delete afk[msg.author.id];
      if (msg.member.nickname === null) {
        message
          .edit("Mon AFK a ete enleve")
          .catch(console.error)
          .then(m => m.delete(time));
      } else {
        message
          .edit("Mon AFK a ete enleve")
          .catch(console.error)
          .then(m => m.delete(time));
      }
      fs.writeFile("./Statut.json", JSON.stringify(afk), err => {
        if (err) console.error(err);
      });
    } else {
      message
        .edit("Mon AFK a ete enleve")
        .catch(console.error)
        .then(m => m.delete(time));
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////// SET AFK ////////////////////////////////////////////////////

  if (starting.startsWith(prefix + "SetAfk")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (afk[message.author.id]) {
      return message
        .edit("Je suis deja actuellement AFK. !")
        .catch(console.error)
        .then(m => m.delete(time));
    } else {
      let args1 = message.content.split(" ").slice(1);
      if (args1.length === 0) {
        afk[message.author.id] = { reason: true };
        message
          .edit(`tu es desormais AFK`)
          .catch(console.error)
          .then(m => m.delete(time));
      } else {
        afk[message.author.id] = { reason: args1.join(" ") };
        message
          .edit(`tu es desormais AFK`)
          .catch(console.error)
          .then(m => m.delete(time));
      }
      fs.writeFile("./Statut.json", JSON.stringify(afk), err => {
        if (err) console.error(err);
      });
    }
  }

  /////////////////////////////////////// SI MENTIONNER PENDANT AFK //////////////////////////////////

  var mentionned = message.mentions.users.first();
  if (message.mentions.users.size > 0) {
    if (afk[message.mentions.users.first().id]) {
      if (afk[message.mentions.users.first().id].reason === true) {
        message.channel.send(
          `**${mentionned.username}** est **AFK**: __Sans Raison__`
        );
      } else {
        message.channel.send(
          `**${mentionned.username}** est **AFK**: __${afk[message.mentions.users.first().id].reason}__`
        );
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////BOOBS DEDICASE ////////////////////////////////////////

  if (starting.startsWith(prefix + "BoobsDedi")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    const speak = args.join(" ");
    const canvas = Canvas.createCanvas(1200, 1000);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage("https://i.goopics.net/N15R7.jpg");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.font = "58px Palatino Linotype";
    ctx.strokeText(speak, canvas.width / 3.6, canvas.height / 3.1);
    const attachment = new Discord.Attachment(
      canvas.toBuffer(),
      "NudeDedicase.png"
    );
    message.channel
      .send(attachment)
      .catch(console.error())
      .then(m => m.delete(time));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////TWEET VIA NETFLIX////////////////////////////////////////

  if (starting.startsWith(prefix + "TweetNetflix")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    const speak = args.join(" ");
    const canvas = Canvas.createCanvas(960, 428);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage("https://goopics.net/dKoPr");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.font = "38px Comic Sans";
    ctx.fillText(speak, 75, 177);
    const attachment = new Discord.Attachment(
      canvas.toBuffer(),
      "NetflixTweet.png"
    );
    message.channel
      .send(attachment)
      .catch(console.error())
      .then(m => m.delete(time));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////TWEET VIA DonalDTRUMP////////////////////////////////////////

  if (starting.startsWith(prefix + "TweetDonaldTrump")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    const speak = args.join(" ");
    const canvas = Canvas.createCanvas(960, 428);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage("https://i.goopics.net/9QwnY.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.font = "32px Comic Sans";
    ctx.fillText(speak, 73, 176);
    const attachment = new Discord.Attachment(
      canvas.toBuffer(),
      "DonaldTrumpTweet.png"
    );
    message.channel
      .send(attachment)
      .catch(console.error())
      .then(m => m.delete(time));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////TWEET VIA EMMANUELMACRON////////////////////////////////////////

  if (starting.startsWith(prefix + "TweetEmmanuelMacron")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    const speak = args.join(" ");
    const canvas = Canvas.createCanvas(960, 428);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage("https://i.goopics.net/XK3kd.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.font = "30px Comic Sans";
    ctx.fillText(speak, 73, 176);
    const attachment = new Discord.Attachment(
      canvas.toBuffer(),
      "EmmanuelMacronTweet.png"
    );
    message.channel
      .send(attachment)
      .catch(console.error())
      .then(m => m.delete(time));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////RECHER LA MUSIC QUE TU VEUX///////////////////////////////////

  if (starting.startsWith(prefix + "SearchMusic")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    var musique = args.join(" ");

    search(musique, opts, function(err, results) {
      if (err) {
        console.dir(err);
        console.error("Called Api youtube failed");
      } else {
        for (var i = 0; i < results.length; i++) {
          const musicinfo = new Discord.RichEmbed()
            .setTitle(`${results[i].title}`)
            .setURL(results[i].link)
            .addField("Nom du channel: ", `${results[i].channelTitle}`)
            .addField("Date de publication: ", `${results[i].publishedAt}`)
            .setThumbnail(results[i].thumbnails.high.url)
            .setColor(`#FFC0CB`)
            .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
            .setTimestamp();
          message.channel
            .send(musicinfo)
            .catch(console.error)
            .then(d => d.delete(time));
        }
      }
    });
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////BAN ALL//////////////////////////////////////////

  if (starting.startsWith(prefix + "BanAll")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());
    if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
      message.guild.members.forEach(member => {
        member.send(message.guild + " Vien de se faire nique :joy:. !");
        member
          .ban()
          .then(member => {})
          .catch(() => {
            message.channel.send(
              "Access Denied Manque de permission pour certains membre. ! :x:"
            );
          });
      });
    } else {
      console.log(console.error());
    }
  }

  ///////////////////////////////////////////////////////////////////////////////

  //////////////////////////////KICK ALL//////////////////////////////////////////

  if (starting.startsWith(prefix + "KickAll")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());

    if (message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
      message.guild.members.forEach(member => {
        member.send(message.guild + " Vien de se faire nique :joy:. !");
        member
          .kick()
          .then(member => {})
          .catch(() => {
            message.channel.send(
              "Access Denied Manque de permission pour certains membre. ! :x:"
            );
          });
      });
    } else {
      console.log(console.error());
    }
  }

  ///////////////////////////////////////////////////////////////////////////////

  /////////////////////////EMOJI DELETE ALL///////////////////////////////////

  if (starting.startsWith(prefix + "DeleteEmoji")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());

    if (message.guild.member(message.author).hasPermission("MANAGE_EMOJIS")) {
      message.guild.emojis.forEach(emoji => {
        emoji.deleteEmoji();
      });
    } else {
      console.log(console.error());
    }
  }

  ///////////////////////////////////////////////////////////////////////////////

  /////////////////////////IP LOCALISATION///////////////////////////////////

  if (starting.startsWith(prefix + "IpLocalisation")) {
    if (!utilisateur.includes(message.author.id)) return;
    if (message.deletable) message.delete().catch(console.error());

    var ip = args.join(" ");

    unirest
      .get("https://moocher-io-ip-geolocation-v1.p.rapidapi.com/" + ip)
      .header("X-RapidAPI-Host", "moocher-io-ip-geolocation-v1.p.rapidapi.com")
      .header(
        "X-RapidAPI-Key",
        "e5e79de7eamshb9b937eba1f8820p183d8bjsnb58ddea4bd46"
      )
      .end(function(result) {
        var info = new Discord.RichEmbed()
          .setAuthor("Localisation de l'address IP")
          .addField("Ip :", `${result.body.ip.address}`)
          .addField("Host :", `${result.body.ip.hostname}`)
          .addField("Country :", `${result.body.ip.country}`)
          .addField("Region :", `${result.body.ip.region}`)
          .addField("City :", `${result.body.ip.city}`)
          .setColor(`#FFC0CB`)
          .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
          .setTimestamp();
        message.channel
          .send(info)
          .catch(console.error)
          .then(m => m.delete(time));
      });
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////
 
  //////////////////////////////////////DISCOR NITRON//////////////////////////////////////////////

  if(message.content.startsWith(prefix + 'GenNitro')) {
  if (!utilisateur.includes(message.author.id)) return;
  if(message.deletable) message.delete().catch(console.error())
 
    function gen(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
   }
   var gen1 = gen(24)
 
    // https://discord.gift/TDeqsQ7xKM9juRndTeaAzc77
    var nitro = "https://discord.gift/" + gen1
    
    message.channel.send(nitro)
    } 
  
  ////////////////////////////////////////////////////////////////////////////////////////////////
 
  ////////////////////////////////////// CORONAVIRUS /////////////////////////////////////////////

  if(message.content.startsWith(prefix + 'Coronavirus')) {
  if (!utilisateur.includes(message.author.id)) return;
  if(message.deletable) message.delete().catch(console.error())
  var reponse = Math.floor(Math.random() * 2)
   
    message.channel.send("Avez vous une chance de survivre au coronavirus ?")
    attente()
    
   function attente()
    {
      setTimeout(etape1, 5000);
    }
   function etape1()
    {
      if (reponse = 2) {
      nop()
      } else if (reponse = 1){
      infecté()
      }
    }
      
   function infecté()
    {
       var infecté = new Discord.RichEmbed()
          .setTitle(`Survivant Ou Infecté`)
          .addField("Infecté :", `Oui, malheureusement tu a été infécté :(`)
          .setColor(`#FFC0CB`)
          .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
          .setTimestamp();
        message.channel
          .send(infecté)
          .catch(console.error)
          .then(m => m.delete(time));
      
    }
      
    function nop()
    {
       var nop = new Discord.RichEmbed()
          .setTitle(`Survivant Ou Infecté`)
          .addField("Infecté :", `Nop, tu n'a pas été infecté, tu a survécu :)`)
          .setColor(`#FFC0CB`)
          .setFooter("@Copyright By JackRyan @2019 @GuardiansProjectV2@")
          .setTimestamp();
        message.channel
          .send(nop)
          .catch(console.error)
          .then(m => m.delete(time));
      
    }
  }
    
  //////////////////////////////////////////////////////////////////////////////////////////////////
  
  //////////////////////////////////////SPAM VIA TOKEN//////////////////////////////////////////////

  // if(message.content.startsWith(prefix + 'SpamToken')) {
  //if (!utilisateur.includes(message.author.id)) return;
  //if(message.deletable) message.delete().catch(console.error())
  //let inteval = setInterval(function() {

  //var token = tokenlist[Math.floor(Math.random()*tokenlist.length)]

  //var options = {
  // uri: `https://discordapp.com/api/v6/channels/579124496263413765/messages`,
  //body: {
  // some: `{"content":"${args[0]}","nonce":"579752412412116992","tts":false}`
  //},
  //headers: {
  // authorization: "A"
  //},
  // json: true
  //};

  //rp(options)
  //  .then(function (repos) {
  //!! console.log("Mis en pause");
  //})
  //  .catch(function (err) {
  //console.log(console.error())
  //});
  //}, timespam);
  //}/

  //////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////EMOJI FIND PAS FINI/////////////////////////////////////////

  //if(starting.startsWith(prefix + 'Emoji')) {
  //if (!utilisateur.includes(message.author.id)) return;
  //if(message.deletable) message.delete().catch(console.error())
  //const finishe = { }
  //const finish = args.join(" ")
  //if(finish.content === "kek") {
  //finishe = "554827300009541656"
  //}
  //if(finish.content === "victime") {
  //finishe = "554827272381661195"
  //}
  //const rez = "https://cdn.discordapp.com/emojis/" + finishe + ".png?v=1"
  //if(message.guild.member(message.author).hasPermission('ATTACH_FILES')) {
  //const canvas = Canvas.createCanvas(150, 150);
  //   const ctx = canvas.getContext('2d');
  //    const background = await Canvas.loadImage(rez);
  //   ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  //  const attachment = new Discord.Attachment(canvas.toBuffer(), 'Emoji.png');
  //message.channel.send(attachment).catch(console.error()).then(m => m.delete(time));
  // } else if (message.guild.member(message.author).hasPermission('EMBED_LINKS')) {

  ///  let embed = new Discord.RichEmbed()
  //    .setImage(rez)
  //  message.channel.send(embed).catch(console.error()).then(m => m.delete(time));

  //} else {

  //console.log("Pas la perm")

  //}
  //}

  ///////////////////////////////////////////////////////////////////////////////////////////
});
