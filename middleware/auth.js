import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/dashboard');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '01fbfe464668cadd163d181351b13ff3f71b1a17282e505f63a52447c99dfa4d');
        req.userId = decoded.userId;
        
        console.log('Authenticated user ID:', req.userId);
        
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.clearCookie('token');
        return res.redirect('/dashboard');
    }
}; 