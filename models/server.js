const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
        this.paths = {
            auth: '/api/auth',
            buscar: '/api/buscar',
            categorias: '/api/categorias',
            productos: '/api/productos',
            uploads: '/api/uploads',
            usuarios: '/api/usuarios',
        };
        
        // Conexión a la base de datos
        this.conectarDB();
        
        //Middlewares
        this.middlewares();
        
        // Rutas de mi app
        this.routes();
    }
    
    async conectarDB() {
        await dbConnection();
    }
    
    middlewares() {
        // CORS
        this.app.use( cors() );
        
        // Lectura y parseo del body
        this.app.use( express.json() );
        
        // Directorio público
        this.app.use( express.static('public') );
        
        // Fileupload - carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
        
    
    }
    
    routes() {
    
        this.app.use(this.paths.auth, require('../routes/auth.routes'));
        this.app.use(this.paths.buscar, require('../routes/buscar.routes'));
        this.app.use(this.paths.categorias, require('../routes/categorias.routes'));
        this.app.use(this.paths.productos, require('../routes/productos.routes'));
        this.app.use(this.paths.uploads, require('../routes/uploads.routes'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios.routes'));
    
    }
    
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;
