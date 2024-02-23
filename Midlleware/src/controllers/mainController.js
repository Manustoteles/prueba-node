

const mainController = {
    index: (req,res) => {
        res.render('index')
    },
    adminControl : (req,res) =>{
        const userToValidate = req.query.user
        
        res.send("Hola Admin: " + userToValidate )
    }
}

module.exports = mainController;