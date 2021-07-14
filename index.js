require('dotenv').config();

const express = require('express');
const cors = require('cors');
const typeorm = require('typeorm');

typeorm.createConnection().then( async connection => {
    if ( connection.isConnected ) {
        console.log("typeorm Conectado!");
    } else {
        console.log("typeorm Desconectado!");
    }

    // Crear el servidor de express
    const app = express();

    // Configurar CORS
    const corsOptions = {
        origin: ['http://localhost:8100', 'http://localhost:3008', 'https://breadlab-clientes.web.app'],
        optionsSuccessStatus: 200, // For legacy browser support
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    };
    app.use( cors( corsOptions ) );

    // Lectura y parseo del body
    app.use( express.json() );


    // Rutas
    app.use( '/api/sms', require('./routes/sms') );

    app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
    });
}).catch(error => console.log(error));

