import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Comments } from "../components/comments";
import { TweetHeader } from "../components/TweetHeader";
import { User } from "../types";
import { Tweet } from "../types";
import { Comment } from "../types";

export function SingleTweet() {
  const [tweet, setTweet] = useState<null | Tweet>(null);
  const [user, setUser] = useState<null | User>(null);
  const [comments, setComments]=useState<Comment[]>([])
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/tweets/${params.itemId}`)
      .then((resp) => resp.json())
      .then((tweetsFromServer) => {
        setTweet(tweetsFromServer);
        const value = tweetsFromServer.userId;
        const idValue=tweetsFromServer.id;
        {
          fetch(`http://localhost:4000/users/${value}`)
            .then((resp) => resp.json())
            .then((userFromServer) => setUser(userFromServer));
        }
        {
          fetch(`http://localhost:4000/tweets/${idValue}/comments`)
             .then(resp=>resp.json())
            .then((commentsFromServer) => setComments(commentsFromServer))
        }
      });
  }, []);


  if (tweet === null)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  if (user === null)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  console.log(params.itemId);

  return (
    <div>
      <TweetHeader />
      <div key={tweet.id} className="tweets-container">
        <Link to={`/profile/${user.id}`}>
          <img src={user.profilePic} className="user-icon"></img>
        </Link>
        <div>
          <ul className="user-details">
            <li className="user-name">{user.name}</li>
            <li>{user.username}</li>
            <li>{tweet.time}</li>
          </ul>

          <div>
            <p className="tweet-content">{tweet.tweet}</p>
          </div>

          <ul>
            <li>{tweet.replies} comments</li>
            <li>{tweet.retweets} retweets</li>
            <li>{tweet.likes} likes</li>
            <li>
              <span className="material-symbols-outlined">ios_share</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="user-reply">
        <img
          src="https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="user-icon"
        ></img>
        <div>
          <form
            className="review-form"
            onSubmit={(event) => {
              event.preventDefault();

              fetch('http://localhost:4000/comments',{
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  userId: 5,
                  tweetId: tweet.id,
                  content: event.target.reply.value,
                })
              })

              let reply={
                id: 10,
                userId: 5,
                tweetId: tweet.id,
                content: event.target.reply.value,
              };
            setComments([...comments, reply])
              event.target.reset()
            }}
          >
            <textarea
              name="reply"
              placeholder="Tweet your reply"
              className="tweet-input"
            ></textarea>
            <button className="tweet-input-btn">Reply</button>
          </form>
        </div>
      </div>
      <ul className="comments">
                
                {comments.map(item=> (
                    <li>
                    <p>{item.content}</p>
                </li>
                ))}
            </ul>
    </div>
  );
}
