const Utils = require('../helpers/utils');

class Usuario {
    static get tabela(){
        return 'tb_usuarios';
    }
    constructor(objUsuario){
        this.USER_ID = '';
        this.USER_TIPO = '';
        this.USER_DEFICIENCIA = '';
        this.USER_NOME = '';
        this.USER_IDADE = '';
        this.RUA = '';
        this.BAIRRO = '';
        this.CIDADE = '';
        this.UF = '';
        Object.assign(this, objUsuario);
    }

    setarSenha(senha){
        this.senha = Utils.criptografa(senha); 
    }
}

module.exports = Usuario;