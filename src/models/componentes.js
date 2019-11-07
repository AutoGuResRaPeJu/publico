const Utils = require('../helpers/utils');

class Usuario {
    static get tabela(){
        return 'tb_componentes';
    }
    constructor(objComponentes){
        this.rm = '';
        this.nome = '';
        this.curso = '';
        this.senha = '';
        Object.assign(this, objComponentes);
    }

    setarSenha(senha){
        this.senha = Utils.criptografa(senha); 
    }
}

module.exports = Componentes;