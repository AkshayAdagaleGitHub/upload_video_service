// import { Request, Response, NextFunction } from 'express';
// // import { auth } from '../firebase'; // Import Firebase Auth
//
// export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token = req.headers.authorization?.split(' ')[1]; // Get token from header
//
//         if (!token) {
//             return res.status(401).json({ message: 'Unauthorized: No token provided' });
//         }
//
//         // Verify the ID token
//         // const decodedToken = await auth.verifyIdToken(token);
//
//         // Add the user information to the request object
//         // req.user = decodedToken;
//
//         next(); // Proceed to the next middleware or route handler
//     } catch (error) {
//         console.error('Error verifying token:', error);
//         return res.status(401).json({ message: 'Unauthorized: Invalid token' });
//     }
// };