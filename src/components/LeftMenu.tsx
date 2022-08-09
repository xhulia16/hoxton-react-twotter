
export function LeftMenu() {
  return (
    <div className="left-menu">
      <div className="left-menu__panel">
        <ul className="left-menu_ul">
          <li>
            <img
              className="icon"
              src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png"
            ></img>
          </li>
          <li>
            <span className="material-symbols-outlined">home</span>
            Home
          </li>
          <li>
            <span className="material-symbols-outlined">tag</span>
            Explore
          </li>
          <li>
            <span className="material-symbols-outlined">notifications</span>
            Notifications
          </li>
          <li>
            <span className="material-symbols-outlined">mail</span>
            Messages
          </li>
          <li>
            <span className="material-symbols-outlined">bookmark</span>
            Bookmarks
          </li>
          <li>
            <span className="material-symbols-outlined">list_alt</span>
            Lists
          </li>
          <li>
            <span className="material-symbols-outlined">person</span>
            Profile
          </li>
          <li>
            <span className="material-symbols-outlined">pending</span>
            More
          </li>
          <li>
            <button className="tweet-btn">Tweet</button>
          </li>
        </ul>
        <div>Profile</div>
      </div>
    </div>
  );
}
