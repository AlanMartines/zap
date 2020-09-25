const banco = require("../banco");
const greetings = ['olá', 'ola', 'oi', 'opa','boa tarde', 'bom dia', 'boa noite', 'tudo bem', 'td bem'];
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
    `Olá ${contato}, estamos agendando os nomes para participação dos cultos na IPI Conceição da Aparecida.`,
    `Atualmente estamos tendo os seguintes cultos:
    _Quarta-feira 19h_ - \`\`\`Reunião de oração\`\`\`
    _Domingo      09h_ - \`\`\`EBD\`\`\`
    _Domingo      19h_ - \`\`\`Culto Dominical\`\`\``,
    `Por favor envie quais cultos deseja participar e os nomes completos dos participantes:`
  ];
}else{
  
}

}

exports.execute = execute;
