const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const BancoUtils = require('../helpers/bancoUtils');
const Casa = require('../models/casa');
const CasaDAO = require('../models/casaDAO');
const Utils = require('../helpers/utils');
const segredo = "AluninhoFeliz";
const routers = express.Router();
const upload = multer({
    storage: multer.diskStorage({
       destination: (req, file, cb) => {
          cb(null, path.join(__dirname, '../../public/assets/imagens'))
     },
     filename: (req, file, cb) => {
         console.log(req.cookies.token);
        const casa = jwt.verify(req.cookies.token, segredo);        
        console.log(casa);
        let customFileName = casa.rm;
            fileExtension = file.originalname.split('.')[1] // get file extension from original file name
            cb(null, customFileName + '.' + fileExtension)
         }
      })
})


routers.post('/auth', (req,res) => {
   const casa = new Casa(req.body);
   casa.setarSenha(req.body.senha);
   new CasaDAO().buscaPorCasaESenha(casa, (resposta) => {
    
    if(resposta.length > 0){
        const token = jwt.sign({ rm: Utils.criptografa('' + resposta[0].rm), nome: resposta[0].nome, nivel: resposta[0].admin }, segredo, {expiresIn: '1h'});
        res.cookie('token', token).redirect('/index');
        //res.json(token);
    } else {       
        res.status(301).redirect('/login');
    }
  });
   
})

routers.get('/', (req,res) => {
    BancoUtils.select(Casa.tabela, (casas) => {
        res.json(casas);
    })
   
});

routers.post('/', (req,res) => {
    const casa = new Casa(req.body);
    casa.senha = casa.senha || "anjinho";
    casa.setarSenha(casa.senha);
    BancoUtils.insert(casa, Casa.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req,res) => {
    const casaNova = new Casa(req.body);
    BancoUtils.put(casaNova, Casa.tabela, {key: 'rm', value: casaNova.rm}, (r) => {
        res.json(r);
    });
})

routers.delete('/:rm', (req,res) => {
    BancoUtils.delete(Casa.tabela, {key: 'rm', value: req.params.rm}, (r) => {
        res.json(r);
    });
})

routers.post('/foto', upload.single('foto'), (req,res) => {
    res.redirect('/');
})

module.exports = routers;




/**
 * C --> Create  (SQL: INSERT)
 * R --> Read    (SQL: SELECT)
 * U --> Update  (SQL: UPDATE)
 * D --> Delete  (SQL: DELETE)
 */
  /**
   * REST (usando HTTP)
   * C --> POST
   * R --> GET
   * U --> PUT
   * D --> DELETE
   */ 
          