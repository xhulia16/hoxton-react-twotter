import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Tweet } from "../types";

export function Home() {
    const [tweets, setTweets] =useState<Tweet[]>([])

    useEffect(()=>{
        fetch('http://localhost:4000/tweets')
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
 <div className="tweets-container">
          <img
            src="https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="user-icon"
          ></img>
          <div>
            <ul className="user-details">
              <li className="user-name">Name</li>
              <li>UserName</li>
              <li>{item.time}</li>
            </ul>
            <div>
              <p className="tweet-content">{item.tweet}</p>
            </div>
            <ul>
              <li>{item.replies} comments</li>
              <li>{item.retweets} retweets</li>
              <li>{item.likes} likes</li>
              <li>
                <span className="material-symbols-outlined">ios_share</span>
              </li>
            </ul>
          </div>
        </div>
        ))}
       
      </div>
    </section>
  );
}
