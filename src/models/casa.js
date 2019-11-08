const Utils = require('../helpers/utils');

class Casa {
    static get tabela(){
        return 'tb_casa';
    }
    constructor(objCasa){
        this.CASA_ID = '';
        this.LONGITUDE = '';
        this.LATITUDE = '';
        this.DESCRICAO_CASA = '';
        Object.assign(this, objCasa);
    }

    setarSenha(senha){
        this.senha = Utils.criptografa(senha); 
    }
}

module.exports = Casa;