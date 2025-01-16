const express = require('express');
const routes = express.Router();
const authenticate = require('./controller/authAdController.js');
const authToken = require('./authToken.js');
const CrudNotificacao = require('./controller/crudNotificacao.js');
const CrudtpNotificacoes = require('./controller/crudTpNotificacao.js');
const Crudventos = require('./controller/crudEventos.js');
const CrudDiretorias = require('./controller/crudDiretorias.js');
const CrudSetores = require('./controller/crudSetores.js');
const crudSetores = require('./controller/crudSetores.js');
const crudTarefas = require('./controller/crudTarefas.js');
const crudUsuarios = require('./controller/crudUsuario.js');
//kreittu
routes.post('/authenticate', authenticate.user_authenticate)
//GIT
routes.use(authToken.tokenValited)

routes.post('/createNotificacao', CrudNotificacao.CreateNotificacao)
routes.get('/buscaNotificacoes', CrudNotificacao.getAllNotificacoes)
routes.post('/buscaNotificacoes', CrudNotificacao.getNotificacoes)
routes.put('/updateNotificacao', CrudNotificacao.updateNotificacao)


routes.post('/createtpNotificacao', CrudtpNotificacoes.CreateTpNotificacao)
routes.get('/buscanotificacaoTotal', CrudtpNotificacoes.getAlltipos)
routes.post('/buscatiponotificacao', CrudtpNotificacoes.getTipoNotificcao)
routes.put('/updateTpNotificacao', CrudtpNotificacoes.updateTipoNotificacao)

routes.post('/createevento', Crudventos.CreateEvento)
routes.get('/buscaeventos', Crudventos.getAllEventos)
routes.post('/buscaeventoespecifico', Crudventos.geteventoEspecfico)
routes.put('/updateEvento', Crudventos.updateEvento)

routes.post('/createDiretorias', CrudDiretorias.CreateDiretoria)
routes.get('/getAllDiretorias', CrudDiretorias.getAllDiretorias)
routes.post('/buscaDiretoriaespecifica', CrudDiretorias.getDiretoria)
routes.put('/updateDiretoria', CrudDiretorias.updateDiretoria)

routes.post('/createSetores', CrudSetores.CreateSetores)
routes.get('/buscaSetores', CrudSetores.getAllSetores)
routes.post('/buscaSetorespecifico', crudSetores.getsetor)
routes.put('/alteraSetores', CrudSetores.updateSetores)

routes.post('/createTarefa', crudTarefas.CreateTarefa)
routes.get('/buscaTarefas', crudTarefas.getAllTarefas)
routes.post('/buscaTarefaEspecifica', crudTarefas.getTarefa)
routes.put('/alteratarefa', crudTarefas.updateTarefa)

routes.post('/CreatePlanoAcao', crudTarefas.CreateTarefa)
routes.get('/getAllPlanoAcao', crudTarefas.getAllTarefas)
routes.post('/getPlanoAcao', crudTarefas.getTarefa)
routes.put('/updatePlanoAcao', crudTarefas.updateTarefa)

routes.post('/CreateCausaRaiz', crudTarefas.CreateTarefa)
routes.get('/getAllCausaRaiz', crudTarefas.getAllTarefas)
routes.post('/getCausaRaiz', crudTarefas.getTarefa)
routes.put('/updateCausaRaiz', crudTarefas.updateTarefa)

routes.post('/Createusuario', crudUsuarios.CreateUsuario)
routes.get('/getAllUsuarios', crudUsuarios.getAllUsuarios)
routes.post('/getUsuario', crudUsuarios.getUsuario)
routes.put('/updateUsuario', crudUsuarios.updateUsuario)


module.exports = routes;
