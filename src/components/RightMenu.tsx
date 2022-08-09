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
            <li>Trend 1</li>
            <li>Trend 2</li>
            <li>Trend 3</li>
            <li>Trend 4</li>
            <li>Trend 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
