interface User {
    id: string;
    name: string | null;
    surname: string | null;
    username: string;
    avatar: string | null
}

export interface PostProp {
    id: string
    desc: string
    img: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    likes: [{ userId: string }]
    _count: {
        comment: number;
    };
    user: User
}