import { useEffect, useState } from "react"
import { Comment, User } from "../types"


export function Comments({item}){
    const [comments, setComments]=useState<Comment[]>([])
    const [users, setUsers]=useState<User>()

    useEffect(()=>{
        fetch(`http://localhost:4000/tweets/${Number(item)}/comments`)
        .then(resp=>resp.json())
        .then(commentsFromServer => setComments(commentsFromServer))
},[])

console.log(comments)
    return(
        <div>
            <ul>
                
                {comments.map(item=> (
                    <li>
                    <p>{item.content}</p>
                </li>
                ))}
                
            </ul>
        </div>
    )
}