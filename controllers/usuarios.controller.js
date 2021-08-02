const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API',
        id
    });
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;
    

    res.json({
        msg: 'post API',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
