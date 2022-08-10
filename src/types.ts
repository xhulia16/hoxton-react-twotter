export type User={
    id:number
    profilePic: string
    headerPic: string
    username: string
    name:string 
    description:string 
    following:number 
    followers:number 
    tweets: Tweet[]
    comments: Comment[]
}    

export type Tweet={
    id: number
    userId: number|null
    tweet: string
    time: string
    retweets: number
    replies: number
    likes: number 
    comments: Comment[]
}

export type Comment={
    id:number
    userId: number
    tweetId: number
    content: string 
}