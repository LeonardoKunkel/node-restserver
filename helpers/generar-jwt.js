const jwt = require('jsonwebtoken')

const generarJWT = ( uid = '' ) => {

    return new Promise( (resolve, reject) => {
    
        const payload = { uid }; // Aquí se podría guardar el nombre, correo, edad, role, etc...
        
        jwt.sign( payload, process.env.SECRETOPRIVATEKEY, {
            expiresIn: '4h',
        }, ( err, token ) => {
        
            if ( err ) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve( token );
            }
        
        });
    
    })

}

module.exports = {
    generarJWT
}
