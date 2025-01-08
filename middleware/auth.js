import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/dashboard');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your token here');
        req.userId = decoded.userId;
        
        console.log('Authenticated user ID:', req.userId);
        
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.clearCookie('token');
        return res.redirect('/dashboard');
    }
}; 