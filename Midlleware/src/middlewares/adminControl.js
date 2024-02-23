const administradores = [
    {
        name: 'Ada'
    },
    {
        name: 'Greta'
    },
    {
        name: 'Vim'
    },
    {
        name: 'Tim'
    }
]



const routeMiddleware = {
    controlAdmin: (req, res, next) => {

        const admBuscado = req.query.user

        const esAdministrador = administradores.find((administrador) => administrador.name.toLocaleLowerCase() == admBuscado.toLocaleLowerCase());

        if (esAdministrador){
            console.log('estoy en 1')
            next()
        } else {
            res.send('no tienes privilegios')
            
        }

        
        
    }
}

module.exports = routeMiddleware