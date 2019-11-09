const con = require('../helpers/banco');

class CasaDAO {
   buscaPorComponenteECasa(casa, cb){
       const sql = "select * from tb_usuarios";
       con.query(sql, [], (err,res) => {
            if(err) throw err;
            else cb(res);
       });
   }
}

module.exports = CasaDAO;