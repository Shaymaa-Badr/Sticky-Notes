const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')

module.exports.login = (req, res) => {
    if(req.session.isLoggedIn){
        res.redirect('/home')
    }else{
        res.render('login',{exists:req.flash('exists'),incorrect:req.flash('wrong'),isLoggedIn:false});
    }
    
}
module.exports.handleSignin = async (req, res) => {
    const { email, password } = req.body
    let user = await userModel.findOne({ email })
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            req.session.isLoggedIn = true;
            req.session.userID = user._id
            console.log(user._id)
            res.redirect('/home')
        } else {
            req.flash('wrong', true)
            res.redirect('/login')
        }
    } else {
        req.flash('exists', true)
        res.redirect('/login')
    }

}