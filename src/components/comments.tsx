import { useEffect, useState } from "react"
import { Comment } from "../types"


export function Comments({item}){
    const [comments, useComments]=useState<Comment[]>([])

    useEffect(()=>{
        fetch(`http://localhost:4000/tweets/${Number(item)}/comments`)
        .then(resp=>resp.json())
        .then(commentsFromServer => useComments(commentsFromServer))
},[])
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