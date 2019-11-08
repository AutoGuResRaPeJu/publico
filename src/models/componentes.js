const Utils = require('../helpers/utils');

class Componentes {
    static get tabela(){
        return 'tb_componentes';
    }
    constructor(objComponentes){
        this.COMP_ID = '';
        this.COMP_NOME = '';
        this.COMP_DESC = '';
        this.COMP_DATA_INST = '';
        this.COMP_DATA_GARANTIA = '';
        this.COMP_VALOR = '';
        Object.assign(this, objComponentes);
    }

    
    }


module.exports = Componentes;