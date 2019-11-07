const Utils = require('../helpers/utils');

class Casa {
    static get tabela(){
        return 'tb_casa';
    }
    constructor(objCasa){
        this.rm = '';
        this.nome = '';
        this.curso = '';
        this.senha = '';
        Object.assign(this, objCasa);
    }

    setarSenha(senha){
        this.senha = Utils.criptografa(senha); 
    }
}

module.exports = Casa;