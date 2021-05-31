
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const routerBase = express.Router();

const port = process.env.PORT || 8080;
const service = process.env.SERVICE_NAME || "undefined";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

let usuario = [{
    nombre: 'name1',
    apellido: 'lastname1'
}, {
    nombre: 'name2',
    apellido: 'lastname2'
    }];
let respuesta = {
    status: 200,
    err: false,
    data: undefined
}

// base endponit
routerBase.get('/service/hp-api', function (req, res) {
    res.send({host: process.env.HOSTNAME || "undefined", date: Date.now(), from: "service"+service, apiTest: "/api/v1"})
})
routerBase.get('/service/:id/lpm', function (req, res) {
    res.send({status: "up"})
})

// USERS ENDPOINT
router.get('/', function (req, res) {
    res.send({message: `My HP API (Users)`})
});
router.get('/1', function (req, res) {
    res.send({message: `My HP API (Users)`})
});

router.get('/users', function (req, res) {
    res.send(usuario);
});
router.post('/users', function (req, res) {
    if (!req.body.nombre || !req.body.apellido){
        respuesta.status = 400;
        respuesta.err = "valores incompletos"
    }else {
        usuario.push(req.body);
        respuesta.err = undefined;
        respuesta.data = usuario;
    }
    res.send(respuesta);
});
router.delete('/users', function (req, res) {
    respuesta.status = 200;
    respuesta.data = "objeto eliminado";
    res.send(respuesta)
})



//ROUTERS
app.use('/api/v1', router);
app.use('', routerBase);

//start server
const server = app.listen(port, "127.0.0.1",(error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port: ${server.address().port}`);
})
