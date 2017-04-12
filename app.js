var TelegramBot = require('node-telegram-bot-api');

/**
 * This example demonstrates setting up webhook
 * on the Heroku platform.
 */


const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const options = {
  webHook: {
    // Port to which you should bind is assigned to $PORT variable
    // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
    port: process.env.PORT
    // you do NOT need to set up certificates since Heroku provides
    // the SSL certs already (https://<app-name>.herokuapp.com)
    // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
  }
};
// Heroku routes from port :443 to $PORT
// Add URL of your app to env variable or enable Dyno Metadata
// to get this automatically
// See: https://devcenter.heroku.com/articles/dyno-metadata
const url = process.env.APP_URL || 'https://<app-name>.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);


var phrases = [
  "Gianroberto non pensava che fosse importante parlare, e infatti parlava il meno possibile",
  "Pensare all’oggi è un atto più rivoluzionario di quel che si possa credere. In quell’oggi pensavo a quella birra ghiacciata perché ne avevo una gran voglia e poi pensavo al fatto che mai e poi mai avrei immaginato di finire sull’unica imbarcazione che naviga sul Rio Napo a caricare maiali e quintali di banane.",
  "Avevo infinite cose da raccontare, ma erano così incredibili che non sapevo da che parte cominciare. Ero anche molto preoccupato. Avevo lasciato il lavoro due anni prima e mi sarei dovuto reinventare una professione. Volevo scrivere, sentivo di avere qualcosa da dire. Avevo vissuto due anni in lentezza e sobrietà.",
  "Eravamo soltanto cittadini che avevano deciso di smetterla di essere moderati",
  "Devo fare di tutto per non perdere il centro, per tenere la barra dritta, per allontanare le sirene del potere o dell’autocompiacimento. Decisi di girare l’Italia in motorino anche per questo",
  "Alla crisi argentina migliaia di ragazzi risposero costruendosi una professione, quella di artisti o artigiani de la calle, che nessuna speculazione finanziaria gli avrebbe mai portato via. In tanti nella strada trovarono la loro strada",
  "Se sai di poterti beccare il raffreddore prendi qualche precauzione, bevi spremute d’arancia, ti copri se fa freddo, ti asciughi bene i capelli dopo esserteli lavati. Ecco, io giro per l’Italia nei fine settimana e investo tempo nel parlare con chi vive sulla sua pelle problemi reali",
  "Spazio e aria Io provo a togliere spazio e aria alla corruzione ascoltando i cittadini che vogliono sottopormi un problema, andando nei mercati, facendo blitz negli ospedali",
  "Il bello è che in Rete per denigrarmi qualcuno mise in giro la voce che io avessi seguito dei corsi di PNL (programmazione neuro-linguistica) per prepararmi alla TV. Incredibile a che livello può arrivare la disonestà intellettuale. Ma quale PNL! Mi ero fatto le ossa a cena a casa di semplici cittadini come me.",
  "La povertà va abolita come venne abolita la schiavitù. Il reddito deve essere considerato un diritto umano, come lo studio, la sanità gratuita, come la possibilità di votare",
  "Siamo così abituati a vivere nel fango che chi ha la forza di alzare la testa, di tirarla fuori dal letame e di respirare aria pura è capace poi di spostare le montagne",
  "Quella volta mi licenziai e acquistai un biglietto di sola andata per Buenos Aires. Per quasi due anni viaggiai in autostop per l’America Latina tra la gente come una persona qualunque, alla ricerca di spremute di umanità",
  "Una sera conobbi il capitano. “Vieni qui straniero, ti ho osservato. Cosa ci fai da solo sulla nave?”. Mi disse che nel Rio Napo vive una stranissima creatura che ti entra nella punta del pene e sale finché ha voglia. “Se fai il bagno metti sempre un costume stretto",
  "Essere riconosciuto oggi, innegabilmente, mi apre molte porte e mi ha permesso anche di scrivere questo libro. Ma capita, nel silenzio della notte, di pensare ai tempi lontani su quella barca, dove nella solitudine non mi sentivo mai solo… Sono contento di essere quel che sono diventato ma sogno di poter tornare a essere uno straniero che lavora su una barca. Senza un nome, libero di non essere soltanto riconosciuto, ma di scegliere quando e da chi farmi conoscere",
  "Siamo stati terra di conquista dei barbari, dei franchi, degli arabi, dei normanni, dei francesi, degli spagnoli e da settant’anni degli americani. Non abbiamo mai vissuto una rivoluzione popolare com’è accaduto in altri Paesi: ciò per certi versi si è rivelato un bene, ma ci ha impedito di portare nei nostri cromosomi una vitalità iconoclasta necessaria per attuare grandi cambiamenti"

];
// Just to ping!
bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, phrases[getRandomIntInclusive(0, phrases.length - 1)]);
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

