const { response } = require('express');
const Goip = require('goip-sms');
const { getManager } = require('typeorm');

const sendSMS = async ( req, res = response) => {
    var sms = new Goip({host: '172.16.254.125', user: 'admin', password: 'netgo123'});
    const { number, message, line, idCliente, tipo, numeroGoip, idPedido } = req.body;
    sms.send({
        number,
        message,
        line
    }).then(function(result) {
        if(result.status === 200){
            const log = {
                idCliente,
                numero: number,
                sms: message,
                code: result.status,
                slot: line,
                numeroGoip,
                tipo,
                idPedido
            };
            
            getManager()
            .getRepository("Log")
            .save(log)
            .then( (savelog) => {
                console.log(savelog);
                res.json({
                    ok: true,
                    savelog
                });
            }).catch( (err) => {
                console.log(err);
                res.status(500).json( err );
            });
        } else {
            res.status(400).json( { msg: 'Se genero un error al enviar el SMS' } );
        }
        
    }).catch( ( err ) => {
        console.log(err);
        res.status(500).json( err );
    });
};

module.exports = {
    sendSMS
};