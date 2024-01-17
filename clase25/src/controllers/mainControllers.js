const path =require('path')

const mainControllers = {
    index: (req, res) =>{
        res.sendFile(path.join(__dirname,'..','views','home.html'))
    },
    about: (req, res) =>{
        res.sendFile(path.join(__dirname,'..','views','about.html'))
    }
    
};

module.exports = mainControllers



