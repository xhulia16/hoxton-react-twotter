import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { Tweet, User } from "../types";

export function Home() {
    const [tweets, setTweets] =useState<User[]>([])

    useEffect(()=>{
        fetch('http://localhost:4000/users?_embed=tweets')
        .then(resp=>resp.json())
        .then(tweetsFromServer=> setTweets(tweetsFromServer) )
    },[])

  return (
    <section className="home">
       <Header />
      <div className="user-tweet">
        <img
          src="https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="user-icon"
        ></img>
        <div>
          <form>
            <textarea
              placeholder="What's happening?"
              className="tweet-input"
            ></textarea>
            <button className="tweet-input-btn">Tweet</button>
          </form>
        </div>
      </div>
      <div>
        {tweets.map((item)=>(
            item.tweets.map((tweet: Tweet)=>(
              <Link to={`/home/${tweet.id}`}>
                <div key={tweet.id} className="tweets-container">
                  <Link to={`/profile/${item.id}`}>
                <img
                  src={item.profilePic}
                  className="user-icon"
                ></img>
                </Link>
                <div>
                  <ul className="user-details">
                    <li className="user-name">{item.name}</li>
                    <li>{item.username}</li>
                    
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
              </Link>
            ))
        ))}
       
      </div>
    </section>
  );
}
