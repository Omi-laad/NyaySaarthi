const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            res.status(403).send({ message: 'Forbidden' });
        }
        next();

    }
}

module.exports = authorizeRoles