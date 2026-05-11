import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PRESENCE
  // =========================
  presence: {
    status: "idle",
    activities: [
      {
        name: "Made with 1cachar team | /help",
        type: 0, // 0 = Playing, 2 = Listening, 3 = Watching
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    owners: process.env.OWNER_IDS?.split(",") || [],
    defaultCooldown: 3, 
    deleteCommands: false,
    testGuildId: process.env.TEST_GUILD_ID,
    // Permet de désactiver certaines commandes globalement sans toucher au code
    disabledCommands: [], 
  },

  // =========================
  // AUTOMODERATION (NOUVEAU)
  // =========================
  automod: {
    antiSpam: {
      enabled: true,
      maxMessages: 5, // Messages max
      timeWindow: 5000, // Dans une fenêtre de 5 secondes
      punishment: "mute", // options: "warn", "mute", "kick", "ban"
      muteDuration: 600000, // 10 minutes
    },
    antiLink: {
      enabled: true,
      allowedRoles: [],
      allowedChannels: [], // Canaux où la pub est autorisée
    },
    antiInvite: {
      enabled: true, // Bloque les discord.gg/
      deleteMessage: true,
    },
    badWords: {
      enabled: true,
      words: ["insulte1", "insulte2"], // À remplacer ou lier à la BDD
      deleteMessage: true,
    },
    antiCaps: {
      enabled: false,
      threshold: 0.7, // 70% de majuscules déclenche l'automod
      minLength: 10,
    }
  },

  // =========================
  // LEVELING SYSTEM (NOUVEAU)
  // =========================
  leveling: {
    baseXp: 100, // XP requis pour le niveau 1
    xpMultiplier: 1.5, // Multiplicateur par niveau (ex: lvl 2 = 150xp, lvl 3 = 225xp)
    messageXpMin: 15,
    messageXpMax: 25,
    cooldown: 60000, // 1 minute de cooldown entre chaque gain d'XP par message
    voiceXpPerMinute: 5, // XP gagné par minute en vocal
    ignoreChannels: [], // Canaux où l'XP est désactivé (spam, commandes)
    announceChannel: null, // null = annonce dans le salon où le niveau a été passé
    roleRewards: {
      // Format: { level: "role_id" }
      // 5: "123456789012345678",
      // 10: "876543210987654321"
    }
  },

  // =========================
  // SUGGESTIONS SYSTEM (NOUVEAU)
  // =========================
  suggestions: {
    channelId: null,
    upvoteEmoji: "👍",
    downvoteEmoji: "👎",
    autoThread: true, // Crée un fil de discussion sous chaque suggestion
    colors: {
      pending: "#FEE75C",
      accepted: "#57F287",
      denied: "#ED4245",
    }
  },

  // =========================
  // STARBOARD (NOUVEAU)
  // =========================
  starboard: {
    channelId: null,
    emoji: "⭐",
    threshold: 5, // Nombre de réactions requises pour aller dans le starboard
    allowSelfStar: false, // Empêche l'auteur de voter pour son propre message
  },

  // =========================
  // TEMPORARY VOICE / JOIN TO CREATE (NOUVEAU)
  // =========================
  joinToCreate: {
    hubChannelId: null, // Le salon vocal "Créer un salon"
    categoryId: null, // La catégorie où les salons seront créés
    defaultBitrate: 64000,
    channelNameTemplate: "🎧 Salon de {user}",
  },

  // =========================
  // MUSIC SYSTEM (NOUVEAU)
  // =========================
  music: {
    defaultVolume: 80,
    maxQueueSize: 100,
    leaveOnEmpty: true,
    leaveOnEmptyCooldown: 300000, // Quitte après 5 minutes si le salon est vide
    leaveOnEnd: false, // Quitte quand la file d'attente est vide
    djRoles: [], // Rôles requis pour passer/stopper des musiques
  },

  // =========================
  // SOCIAL ALERTS (NOUVEAU)
  // =========================
  socials: {
    twitch: {
      checkInterval: 60000, // Vérifie toutes les minutes
      notificationChannel: null,
      messageTemplate: "🎥 **{streamer}** est en live sur Twitch ! Joue à **{game}**. Rejoignez ici : {url}",
    },
    youtube: {
      checkInterval: 300000, // Vérifie toutes les 5 minutes
      notificationChannel: null,
      messageTemplate: "📺 **{channel}** vient de sortir une nouvelle vidéo : **{title}** ! {url}",
    }
  },

  // =========================
  // ADVANCED LOGGING (NOUVEAU)
  // =========================
  logging: {
    channels: {
      moderation: null, // Bans, kicks, warns, automod
      messages: null,   // Messages supprimés/édités
      members: null,    // Arrivées, départs, changements de pseudo/rôle
      voice: null,      // Connexions, déconnexions, déplacements vocaux
      server: null,     // Changements de paramètres du serveur
    },
    ignoreBots: true, // Ne log pas les actions des autres bots
  },

  // =========================
  // APPLICATIONS SYSTEM
  // =========================
  applications: {
    defaultQuestions: [
      { question: "What is your name?", required: true },
      { question: "How old are you?", required: true },
      { question: "Why do you want to join?", required: true },
    ],
    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },
    applicationCooldown: 24, 
    deleteDeniedAfter: 7, 
    deleteApprovedAfter: 30, 
    managerRoles: [], 
  },

  // =========================
  // EMBED COLORS & BRANDING
  // =========================
  embeds: {
    colors: {
      primary: "#336699", 
      secondary: "#2F3136", 
      success: "#57F287", 
      error: "#ED4245", 
      warning: "#FEE75C", 
      info: "#3498DB", 
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",
      blurple: "#5865F2",
      giveaway: { active: "#57F287", ended: "#ED4245" },
      ticket: { open: "#57F287", claimed: "#FAA61A", closed: "#ED4245", pending: "#99AAB5" },
      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",
      starboard: "#F1C40F", // Nouvelle couleur ajoutée
      priority: { none: "#95A5A6", low: "#3498db", medium: "#2ecc71", high: "#f1c40f", urgent: "#e74c3c" },
    },
    footer: { text: "Titan Bot", icon: null },
    thumbnail: null,
    author: { name: null, icon: null, url: null },
  },

  // =========================
  // ECONOMY SETTINGS
  // =========================
  economy: {
    currency: { name: "coins", namePlural: "coins", symbol: "$" },
    startingBalance: 0,
    baseBankCapacity: 100000,
    dailyAmount: 100,
    workMin: 10, workMax: 100,
    begMin: 5, begMax: 50,
    robSuccessRate: 0.4,
    robFailJailTime: 3600000, 
  },

  // =========================
  // TICKET SYSTEM
  // =========================
  tickets: {
    defaultCategory: null,
    supportRoles: [],
    priorities: {
      none: { emoji: "⚪", color: "#95A5A6", label: "None" },
      low: { emoji: "🟢", color: "#2ECC71", label: "Low" },
      medium: { emoji: "🟡", color: "#F1C40F", label: "Medium" },
      high: { emoji: "🔴", color: "#E74C3C", label: "High" },
      urgent: { emoji: "🚨", color: "#E91E63", label: "Urgent" },
    },
    defaultPriority: "none",
    archiveCategory: null,
    logChannel: null,
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    defaultDuration: 86400000, 
    minimumWinners: 1, maximumWinners: 10,
    minimumDuration: 300000, maximumDuration: 2592000000, 
    allowedRoles: [], bypassRoles: [],
  },

  // =========================
  // VERIFICATION SETTINGS
  // =========================
  verification: {
    defaultMessage: "Cliquez sur le bouton ci-dessous pour vous vérifier et accéder au serveur !",
    defaultButtonText: "Se vérifier",
    autoVerify: {
      defaultCriteria: "none",
      defaultAccountAgeDays: 7,
      serverSizeThreshold: 1000,
      minAccountAge: 1,      
      maxAccountAge: 365,    
      sendDMNotification: true,
    },
    verificationCooldown: 5000,  
    maxVerificationAttempts: 3,   
    attemptWindow: 60000,         
    logAllVerifications: true,
  },

  // =========================
  // WELCOME / GOODBYE MESSAGES
  // =========================
  welcome: {
    defaultWelcomeMessage: "Bienvenue {user} sur {server} ! Nous sommes maintenant {memberCount} membres !",
    defaultGoodbyeMessage: "{user} a quitté le serveur. Nous sommes {memberCount} membres.",
    defaultWelcomeChannel: null,
    defaultGoodbyeChannel: null,
    welcomeImageTemplate: null, // Lien vers un fond d'image pour générer des images de bienvenue avec canvas
  },

  // =========================
  // GENERIC BOT MESSAGES
  // =========================
  messages: {
    noPermission: "❌ Vous n'avez pas la permission d'utiliser cette commande.",
    cooldownActive: "⏳ Veuillez patienter {time} avant de réutiliser cette commande.",
    errorOccurred: "⚠️ Une erreur s'est produite lors de l'exécution de la commande.",
    missingPermissions: "🤖 Je n'ai pas les permissions requises pour faire cela.",
    commandDisabled: "🚫 Cette commande est actuellement désactivée.",
    maintenanceMode: "🔧 Le bot est en maintenance, revenez plus tard.",
  },

  // =========================
  // FEATURE TOGGLES
  // =========================
  // Active/Désactive facilement des modules entiers
  features: {
    automod: true,
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,
    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,
    verification: true,
    reactionRoles: true,
    joinToCreate: true,
    music: true,
    suggestions: true,
    starboard: true,
    socials: true,
    voice: true,
    fun: true,
  },
};

export function validateConfig(config) {
  const errors = [];
  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Vérification des variables d\'environnement...');
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Le token du bot est requis (DISCORD_TOKEN ou TOKEN).");
  }
  if (!process.env.CLIENT_ID) {
    errors.push("L'ID du client est requis (CLIENT_ID).");
  }
  
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.POSTGRES_HOST) errors.push("Hôte PostgreSQL manquant (POSTGRES_HOST).");
    if (!process.env.POSTGRES_USER) errors.push("Utilisateur PostgreSQL manquant (POSTGRES_USER).");
    if (!process.env.POSTGRES_PASSWORD) errors.push("Mot de passe PostgreSQL manquant (POSTGRES_PASSWORD).");
  }

  return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Erreurs de configuration du bot :", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") process.exit(1);
}

export const BotConfig = botConfig;

export function getColor(path, fallback = "#99AAB5") {
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) {
    return parseInt(path.replace("#", ""), 16);
  }
  const result = path.split(".").reduce(
    (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
    botConfig.embeds.colors
  );
  if (typeof result === "string" && result.startsWith("#")) {
    return parseInt(result.replace("#", ""), 16);
  }
  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color)
  );
  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;
