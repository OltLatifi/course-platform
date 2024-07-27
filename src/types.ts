
export interface User {
    id: number;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface RefreshToken {
    id: number;
    token: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    expiresAt: Date;
}
