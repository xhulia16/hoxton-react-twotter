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
    tweetId: number
    content: string 
}