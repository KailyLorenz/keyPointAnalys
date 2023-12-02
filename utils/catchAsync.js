module.exports = fn => {
    return (req, res, next) => {
        // for global error
        fn(req, res, next).catch(next)
    }
}
