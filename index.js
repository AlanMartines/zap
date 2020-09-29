const venom = require("venom-bot");
const banco = require("./src/banco");
const stages = require("./src/stages");

venom.create('session name', '', '', {
  useChrome: false
}).then((client) => start(client)).catch((erro) => {
  console.log(erro);
});
function start(client) {
  client.onMessage( (message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.name
    );    
    if(resp){

      (async () => {for (let res of resp) {
        const element = res;
        
        if (banco.db[message.from].stage === 2) {
          setTimeout(() => {
            sendMsg(client, message, element)          
          }, (1000*60));
        } else {
          sendMsg(client, message, element)
        }
        // client.sendText(message.from, element);
        console.log(banco.db[message.from].stage)      
        console.log(message.from+': '+message.body)      
        console.log( element )
        await new Promise( resolve => setTimeout(resolve, 6000) )
      }})();
    }
   
  });
}

function sendMsg (client, message, element) {
  console.log(banco.db[message.from].stage)
  client.sendText(message.from, element);
}

function getStage(user) {
  if (banco.db[user]) {
    //Se existir esse numero no banco de dados
    return banco.db[user].stage;
  } else {
    //Se for a primeira vez que entra e contato
    banco.db[user] = {
      stage: 0,
    };
    return banco.db[user].stage;
  }
}


