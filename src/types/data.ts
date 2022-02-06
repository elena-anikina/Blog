export interface IUser {
    email: string,
    token: string,
    username: string,
    bio: string,
    image: string
}

export interface IAuthor extends IUser {
    following: boolean
}

export interface IArticle {
    slug: string,
    title: string,
    description: string,
    body: string,
    tagList: string[],
    createdAt: string,
    updatedAt: string,
    favorited: boolean,
    favoritesCount: number,
    author: IAuthor
}

export interface IArticles {
    articles: IArticle[],
    articlesCount: number
}