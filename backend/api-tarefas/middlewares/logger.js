function logger (req, res, next){

    const metodo = req.method;
    const url = req.url;
    const hora = new Date().toLocaleString('pt-BR');

    console.log(`[${hora}] ${metodo} ${url}`);
    next();
    
}

module.exports = logger;