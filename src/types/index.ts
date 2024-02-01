export interface Photo {
    id: string,
    urls: {
        regular: string
    },
    description: string,
    user: string,
    likes: number
}