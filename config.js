const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUy46jRhT9laiUnT0xGIzBUksDGL/tNuB3NBqVoYAyT1MFGFreZRtpFGU7/zifEGF3qztRZtK5q6qiOPfUPfeeJxDFmKApKkHvCSQpziFF9ZKWCQI9oGSOg1LQBDakEPTA47LCg+Vkbc30gK+sCVkzjmku+HWhqKxtNEzUN5Ji0Rlv/AdwbYIkOwbY+gHghj1u8Nk1u5E32yeCdZZwkEjSzuw78rzUGkdm/LhSVdu7rB/AtUaEOMWRqyUeClEKgykqlxCn76MP5c1k4uOzIIaMg70jpxaDXVaOZsq5n5nZhbPpys2ztcwU76PPVAdYsCZz8jQpvFixYo6JxQ10qY2Z5XIlWP0W6znmvmqP7/QJdiNkj20UUUzL99ddsSYXFvosP3CMxXEUzMh0MKvSRctZlrqtL46+PBjo5Slg3kc82YeuOeI0u81cHg1maTPR2R2sDtMdWfJ6Om/TR7tfKAdmrb8lvkxfesX/X3XXdmc3O+WziUBUnpSS0s9Dw5OhO+nDcKBFhnriG0qj5evvo2+GVi5B2fKE2eXkTiKHymqj3eBEJ1a5MC1MpBbrVcvJTvNX+pBm6Y9Y7vqw3TA8d+wHrXhhG9yoGtH53mBbljHoV+JJv6jncrMTRFPh9pU2PXRPJXUc/rEz2Sb9xlrcVY+VN/H6jqT6rfVeEKST+3B7kY/KsQ167LUJUuRiQlNIcRzdzji2CaCdm8hKEb2VF5Sn3U5kFnJD6lR45cqcJ4YLLUPl2B+MxYkJJ+Noo55ExiQPoAmSNLYQIcgeYULjtJwjQqCLCOj9+qkJInShd+HqdHU2B6eErqMsCWJov6j68hFaVpxF1CwjS60XKAU95vUYUYojl9R1zCKYWh7OkepBSkDPgQFB1yawUY4tVOOBOGF87bLc6KOMN6AynCikE+s1ZS+O7lc6rIjYtsB9ENh2+wPPd5wPR8dhPoiO0LXZLn+EFgeaAD/PTP3PdyUUuEa8wDrc6nCbRrilU/PQgkzDiMY3Ge61RymyQY+mGWqCI7T8LFnFPop+gHvOsr0Ys5tB5sy1i+TSs2T4Ak9kSXuDe9cU9J5efUqN7RpPlbaqvNdk0AThrQVx/XKJ74ocLzBtsdvrfCS/FHUZYZL8EiEKmiCC9V3w8fMtvn398sdPb+Lb1y+//WP/+9+3f77uep/fxs815Wc9azI2ohAHpOY5HWU4cYfaQl20UjIcyporq27N+0X/l0G6N2q12kykQ64SmE9PRxSMOhI2tuvSHZrqINiV3SJvnx1dqfTxw7+AgB7whfV8sUhsw8xHR8tbG0NGsxfnpbiaZkYXrxvzMTNf6cyufeaD7tDKg3AjugqnFPJW6SrIP+miYmGk5pZVjWbSiXk8KMVDne3eh2+Tjbiipe6SaawhqSPsDjmtZDUdFjwVUWbs7M2ssdl0DkrAp/tdXziFXMZvJ32lms0IDdIFESxxdKFjsh8HfSW3tTHPufp9xG8WEzxbO74N39Nz1zoY3ZzyWdH/0P11fJhr8w3Cs/N+p0UVi2FNZ3ss0mFaxm0uMRrO3t8E81jxXe+wETNxJp0jRrYYFVyvn5ogCSB14jQEPUDCIwRNEEBC5dfxX+EQEQrDBPTYLifwLCPyQhOEpZwkJoX0xTWAfAu+ANe/ACZcuChRCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

