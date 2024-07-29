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

export interface Course {
    id: number;
    title: string;
    description: string;
    userId: number;
}

export interface Chapter {
    id: number;
    title: string;
    content: string;
    userId: number;
    courseId: number;
}
