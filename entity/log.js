var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Log", // Will use table name `category` as default behaviour.
    tableName: "TBL_SMS_LOG", // Optional: Provide `tableName` property to override the default behaviour for table name. 
    columns: {
        id: {
            primary: true,
            type: "number",
            name: "ID_SMS"
        },
        idCliente: {
            type: "number",
            name: "ID_CLIENTE",
            nullable: false
        },
        numero: {
            type: "varchar2",
            length: 10,
            name: "NUMERO_ENVIO"
        },
        sms: {
            type: "varchar2",
            length: 250,
            name: "SMS"
        },
        fecha: {
            type: "date",
            name: "FECHA",
            default: () => { "SYSDATE"; }
        },
        code: {
            type: "number",
            name: "CODE"
        },
        slot: {
            type: "number",
            name: "SLOT"
        },
        numeroGoip: {
            type: "varchar2",
            length: 10,
            name: "NUMERO_GOIP"
        },
        tipo: {
            type: "varchar2",
            length: 10,
            name: "TIPO_SMS"
        },
        idPedido: {
            type: "number",
            name: "ID_PEDIDO"
        }
    }
});