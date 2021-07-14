/*
    Ruta: /api/sms
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');
const { sendSMS } = require('../controllers/sms');

const router = Router();

router.post( '/',
    [
        validarJWT,
        check('number', 'El número de celular es obligatorio').not().isEmpty(),
        check('message', 'El mensaje es obligatorio').not().isEmpty(),
        check('line', 'El número de linea es obligatorio').not().isEmpty(),
        check('idCliente', 'El id del cliente es obligatorio').not().isEmpty(),
        check('numeroGoip', 'El numero del GoIP es obligatorio').not().isEmpty(),
        check('tipo', 'El tipo del SMS es obligatorio').not().isEmpty(),
        validarCampos,
    ], 
    sendSMS
);

module.exports = router;