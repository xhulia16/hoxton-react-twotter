import { ProfileHeader } from "../components/Profileheader";

export function Profile() {
  return (
    <div>
      <ProfileHeader />
      <div className="profile-details">
      <div>
        <img className="header"></img>
        <img className="icon"></img>
      </div>
      <h3>name</h3>
      <h3>username</h3>
      <p> User description</p>
      <span> 2 following</span>
      <span> 4 followers</span>
      <div>
        <ul>
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
