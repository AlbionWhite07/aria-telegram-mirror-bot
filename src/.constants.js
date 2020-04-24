module.exports = Object.freeze({
  TOKEN: '903622903:AAEUdC1uwmbAAWC5cWzkPCAIQiuIOedOqvY',
  ARIA_SECRET: 'darkfang6969',
  ARIA_DOWNLOAD_LOCATION: '/home/fang/mirrorbot/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: 'https://drive.google.com/folderview?id=1euWllmxtwE9qTpfGPYTicLBzRr6TMqTP',
  SUDO_USERS: [901463530, 305002994],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001425979233],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@nameOf_bot"
  },
  IS_TEAM_DRIVE: True
});
