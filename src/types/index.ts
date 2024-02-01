export interface Photo {
    id: string,
    urls: {
        regular: string
    },
    description: string,
    user: {
        username: string
    },
    likes: number
}