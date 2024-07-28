import { User } from "../models"

declare global {
    namespace Express {
        interface User {
            id: number;
            email: string;
            password: string;
            createdAt: Date;
            updatedAt: Date;
        }

        interface Request {
            user?: User;
        }
    }
}
