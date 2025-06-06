import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).json({ success:false, message: "You're Unauthorized" });
    }

    // if token is present then verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success:false, message: "Token is not valid" });
        }
        req.user = user;
        next(); // don;t forget to call next() otherwise it will not go to the next middleware
    });
}    

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.role === 'admin') {
            next();
        } else {
            return res.status(401).json({ success:false, message: "You're not authenticated" });
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.role === 'admin') {
            next();
        } else {
            return res.status(401).json({ success:false, message: "You're not authorized" });
        }
    });
};