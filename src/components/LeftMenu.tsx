import { Link } from "react-router-dom";

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
          <li> <Link to="/home">
            <span className="material-symbols-outlined">home</span>
            Home </Link>
          </li>
          <li><a href="#">
            <span className="material-symbols-outlined">tag</span>
            Explore</a>
          </li>
          <li><a href="#">
            <span className="material-symbols-outlined">notifications</span>
            Notifications</a>
          </li>
          <li><a href="#">
            <span className="material-symbols-outlined">mail</span>
            Messages</a>
          </li>
          <li><a href="#">
            <span className="material-symbols-outlined">bookmark</span>
            Bookmarks</a>
          </li>
          <li><a href="#">
            <span className="material-symbols-outlined">list_alt</span>
            Lists</a>
          </li>
          <li><a href="#">
            <span className="material-symbols-outlined">person</span>
            Profile</a>
          </li>
          <li><a href="#">
            <span className="material-symbols-outlined">pending</span>
            More</a>
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
