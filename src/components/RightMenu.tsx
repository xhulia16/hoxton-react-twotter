export function RightMenu() {
  return (
    <div className="right-menu">
      <div className="right-menu__panel">
        <label>
          <input
            className="search-twitter"
            placeholder="Search Twitter"
          ></input>
        </label>
        <div>
          <ul className="trends-list">
            <li className="trends-title">Trends for you</li>
            <li><a href="#">Trend 1</a></li>
            <li><a href="#">Trend 2</a></li>
            <li><a href="#">Trend 3</a></li>
            <li><a href="#">Trend 4</a></li>
            <li><a href="#">Trend 5</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
