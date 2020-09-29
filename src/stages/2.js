const banco = require("../banco");
const cultos = ['culto', 'cultos', 'horário', 'horario', 'agenda', 'reunião', 'reuniões', 'ebd', 'dominical', 'noite', 'amanhã', 'hoje' ];
function execute(user, msg, contato) {
  let search = false
  const msgArray =  msg.split(" ")
  console.log(msgArray)
  for(var i=0; i<msgArray.length; i++) {
    console.log(msgArray[i])
    if(cultos.includes(msgArray[i].toLowerCase())){
      search = true
      break
    }
  }
  if (search) {

  banco.db[user].stage = 3;

  return [
    `Atualmente estamos tendo os seguintes cultos:\n
\`\`\`▫️Quarta-feira 19h - Reunião de oração
    \n▫️Domingo      09h - EBD
    \n▫️Domingo      19h - Culto Dominical\n\`\`\``,
  ];
}

}

exports.execute = execute;
