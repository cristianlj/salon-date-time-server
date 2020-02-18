const routes = require('express').Router();


routes.get("/", (req,res)=>{
    return res.json({ hello: 'World kkkkk' });
});


module.exports = routes;
