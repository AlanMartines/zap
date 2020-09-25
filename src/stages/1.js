const banco = require("../banco");

function execute(user, msg) {
  if (msg.length>5) {          
      banco.db[user].stage = 2;
      return ["Agradecemos sua mensagem! Vamos entrar em contato em breve para confirmar sua inscrição no culto, até mais. Deus abençoe!"];
    }
  }




exports.execute = execute;
