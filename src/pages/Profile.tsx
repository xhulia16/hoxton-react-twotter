import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileHeader } from "../components/Profileheader";
import { User } from "../types";

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
      </div>
    </div>
  );
}
