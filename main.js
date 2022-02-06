var Datastore = require('nedb'),

// crear base de datos en memoria:
db = new Datastore();

// crear base de datos con persistencia:
//db = new Datastore({filename: __dirname + '/data/example.dat', autoload: true});

db.insert({n: (0 | (Math.random() * 10000)), now: new Date()}, function(err, record) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(record);
});
// insertamos otro:
db.insert({n: (0 | (Math.random() * 10000)), now: new Date()}, function(err, record) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(record);
});





// recuperar archivos:
/*
db.find({n: 3}, function(err, record) {
    if (err) {
        console.error(err);
        process.exit(0);
    }
    console.log(record);
});
Si queremos obtener todos los documentos sólo tenemos que pasar un objeto vacío y, por lo tanto, todos los documentos cumplen esta condición:
Obtener todos los documentos
*/
db.find({}, function(err, record) {
    if (err) {
        console.error(err);
        process.exit(0);
    }
    console.log("resultado: ");
    console.log(record);
});

// contar registros:
db.count({}, function(err, record) {
    if (err) {
        console.error(err);
        process.exit(0);
    }
    console.log("cantidad: "+record);
});