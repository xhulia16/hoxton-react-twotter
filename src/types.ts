export type User={
    id:number
    profilePic: string
    headerPic: string
    username: string
    name:string 
    description:string 
    following:number 
    followers:number 
}    

export type Tweet={
    id: number
    userId: number
    tweet: string
    time: Date
    retweets: number
    quoteTweets: number
    likes: number 
}

export type Comment={
    id:number
    tweetId: number
    content: string 
}