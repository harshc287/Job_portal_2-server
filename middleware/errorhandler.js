const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    res.staus(err.statusCode || 500).json({
        message: err.message || "Server Error"
    })

    
}

module.exports = errorHandler;