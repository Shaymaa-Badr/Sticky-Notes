const noteModel = require('../models/notes.model')

module.exports.home = async (req, res) => {
    let notes = await noteModel.find({ userID: req.session.userID })
    // let notes = await noteModel.find({}).populate('userID','name -_id').select('title -_id')
    res.render('home', { isLoggedIn: req.session.isLoggedIn, notes });

}

module.exports.addNote =async (req, res) => {
    const { title, desc } = req.body
    await noteModel.insertMany({ userID: req.session.userID, title, desc })
    console.log(req.session.userID)
    res.redirect('/home')
}

module.exports.deleteNote = async (req, res) => {
    await noteModel.findByIdAndDelete({ _id: req.body.delete })
    res.redirect('/home')
}
module.exports.editNote= async (req, res) => {
    const {_id, title, desc } = req.body
    await noteModel.findByIdAndUpdate({_id},{title,desc})
    res.redirect('/home')
}
module.exports.logOut = (req, res) => {
    
    req.session.destroy(() => {
        res.redirect('/login')
    })

}