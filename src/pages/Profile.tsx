import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProfileHeader } from "../components/Profileheader";
import { Tweet, User } from "../types";

export function Profile() {
  const [profile, setProfile]= useState<null |User>(null)
  const params = useParams();
  
  useEffect(()=>{
    fetch(`http://localhost:4000/users/${params.itemId}?_embed=tweets`)
    .then(resp=>resp.json())
    .then(profileFromServer=> setProfile(profileFromServer) )
},[])

if (profile === null)
return (
  <div>
    <h1>Loading...</h1>
  </div>
);

  return (
    <div>
      <ProfileHeader />
      <div className="profile-details">
      <div>
        <img className="profile-header" src={profile.headerPic}></img>
        <img className="user-icon" src={profile.profilePic}></img>
      </div>
      <h3>{profile.name}</h3>
      <h3 className="username">{profile.username}</h3>
      <p className="description">{profile.description}</p>
      <span> {profile.following} following</span>
      <span> {profile.following} followers</span>
      <div>
        <ul className="profile-ul">
          <li>Tweets</li>
          <li>Tweets and replies</li>
          <li>Media</li>
          <li>Likes</li>
        </ul>
      </div>
      </div>
      <div className="tweets">
      
            {profile.tweets.map((tweet: Tweet)=>(
              <Link to={`/home/${tweet.id}`}>
                <div key={tweet.id} className="tweets-container">
                  <Link to={`/profile/${profile.id}`}>
                <img
                  src={profile.profilePic}
                  className="user-icon"
                ></img>
                </Link>
                <div>
                  <ul className="user-details">
                    <li className="user-name">{profile.name}</li>
                    <li>{profile.username}</li>
                    
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
              </Link>)
              )}
        
      </div>
    </div>
  );
}
