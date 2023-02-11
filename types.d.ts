export interface Story{
    user : User,
    closeFriend : boolean
}

export interface User{
    name : string,
    image : string
}

export interface PostHeader{
    owner : Story,
    hasStory : boolean
}

export interface Post{
    owner : Story,
    post : string,
    description : string,
    likes : number,
    comments : number,
    hasStory : boolean,
}