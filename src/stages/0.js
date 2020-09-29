const banco = require("../banco");
const greetings = ['olá', 'ola', 'oi', 'opa','boa tarde', 'bom dia', 'boa noite', 'tudo bem', 'td bem', 'vaga', 'culto'];
function execute(user, msg, contato) {
  let search = false
  const msgArray =  msg.split(" ")
  console.log(msgArray)
  for(var i=0; i<msgArray.length; i++) {
    console.log(msgArray[i])
    if(greetings.includes(msgArray[i].toLowerCase())){
      search = true
      break
    }
  }
  if (search) {

  banco.db[user].stage = 1;

  return [
    `Olá, estamos agendando os nomes para participação dos cultos na IPI Conceição da Aparecida.`,
    `Atualmente estamos tendo os seguintes cultos:\n
\`\`\`▫️Quarta-feira 19h - Reunião de oração
    \n▫️Domingo      09h - EBD
    \n▫️Domingo      19h - Culto Dominical\n\`\`\``,
    `Por favor envie quais cultos deseja participar e os nomes completos dos participantes:`
  ];
} else {
  banco.db[user].stage = 1;
  return [
    `Olá, estamos agendando os nomes para participação dos cultos na IPI Conceição da Aparecida.`,
    `Atualmente estamos tendo os seguintes cultos:\n
\`\`\`▫️Quarta-feira 19h - Reunião de oração
    \n▫️Domingo      09h - EBD
    \n▫️Domingo      19h - Culto Dominical\n\`\`\``,
    `Por favor envie quais cultos deseja participar e os nomes completos dos participantes:`
  ];
}

}

exports.execute = execute;
