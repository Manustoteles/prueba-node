const booksControllers = {
    list: (req, res) =>{
        res.json([
            {
                id: 1,
                nombre: "producto1"
            },
            {
                id: 2,
                nombre: "producto2"
            }
        ])
    }
}

module.exports = booksControllers