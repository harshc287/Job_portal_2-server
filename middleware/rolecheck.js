const admin = (req, res, next) => {
    if(req.user && req.user.role === 'admin') return next()
        res.status(403).json({message: "Admin Only Route"})
}

const user = (req, res, next ) =>{
    if(req.user && req.user.role === 'user') return next()
        res.status(403).json({message: "User Only Route"})
}

module.exports = {admin, user};
