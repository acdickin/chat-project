import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    console.log("protectRoute ", req.cookies);
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" })
        }
        const decoded = jwt.verify(token, process.env.JWT_Secret)
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" })
        }
        // remove password
        const user = await User.findById(decoded.userId).select('-password')
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware ", error)
        res.status(500).json({ error: "Internal server error" })
    }
}
export default protectRoute;