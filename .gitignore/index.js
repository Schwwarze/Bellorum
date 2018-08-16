const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "°"

bot.on('ready', function() {
    bot.user.setGame("Command: °help");
    console.log("connected");
});

bot.login("MzYxMDYyODEwNDU0NzIwNTEy.DlMrug.0StIEBGyPzB597S2uNjF1qe_yCM");
//commande : Help et Salut
bot.on('message', msg => {
    if  (msg.content.startsWith(prefix + "help")) {
        msg.channel.sendMessage("__Liste des commandes:__ \n -°help : vraiment besoin de le dire ? \n -°ping : Ca dit pong \n -°doghug : Hug de chien ! \n -°cathug : Hug de chat ! \n -°random : donne un nombre entier random entre 1 et 100 \n -°kiss : Bisou ! \n -°invite : Vous donne une invite pour ce serveur Discord \n \n __Moderation :__ \n -°clear (valeur entre 1 et 100) : supprime les messages ");
    }

    if (msg.content === "Salut"){
        msg.reply("Bien le bonjour");
        console.log("Commande salut éffectuée");
    }
});
//commande : ping
bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "ping")) {
      msg.reply("pong !");
      console.log("Commande Ping éffectuée")
  }
});
//commande : doghug
bot.on('message', msg => {
    if (msg.content.startsWith(prefix + "doghug")) {
        msg.reply("Dog hug ! https://gph.is/1sEt56F");
        console.log("Commande doghug éffectuée")
    }
  });


//commande : Cathug
bot.on('message', msg => {
    if (msg.content.startsWith(prefix + "cathug")) {
        msg.reply("Cat hug ! https://gph.is/XIZojn");
        console.log("Commande cathug éffectuée")
    }
  });
  //commande : Serveur anti Naillik
  bot.on('message', msg => {
    if (msg.content.startsWith(prefix + "Anti-Naillik")) {
        msg.reply("Rejoignez la résistance. \n Vous avez fait un bon choix. \n https://discord.gg/yJ8DJYs");
        console.log("Commande Anti Naillik éffectuée")
    }
  });
  //commande : Ban Naillik
  bot.on('message', msg => {
    if (msg.content.startsWith(prefix + "je-suis-naillik")) {
        msg.reply("BAN ! \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK \n BAN NAILLIK ");
        console.log("Commande Je suis Naillik éffectuée")
    }
  });

//msg.delete()

//Commande : Random
bot.on('message', msg => {
    const args =  msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (msg.content.startsWith(prefix + "random"))  {
        msg.channel.send(Math.floor(Math.random() * parseInt(args[0])))

        console.log("commande Random éffectutée")
    }
});

//commande : Clear
bot.on('message', msg => {
    if (msg.content.startsWith(prefix + "clear")) {
        const args =  msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(`Vous n'avez pas les droits nécessaires.`);
        if (!args[0]) {
          args[0] = 1;
        }
        let messagecount = parseInt(args[0]);
      
        if (!messagecount || messagecount < 1 || messagecount > 100) {
          return msg.reply("Merci d'indiquer un nombre inférieur à 100.");
        }
        messagecount++;
        msg.channel.fetchMessages({
          limit: messagecount
        }).then(message => msg.channel.bulkDelete(message));
        console.log("Clear effectué")
    }});

//commande : Kiss
bot.on('message', msg => {
    if (msg.content.startsWith(prefix + "kiss")) {
        msg.reply("Cute ! https://gph.is/1ae9Gz2")
        console.log("kiss effectué")
    }
});

  //commande : invite 
bot.on('message', msg => {
    if (msg.content.startsWith(prefix + "invite")) {
        msg.reply("Voici une invite ! \n https://discord.gg/QMfhE2P");
        console.log("Commande invite éffectuée")
    }
  });
