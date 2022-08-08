import { Header } from "../components/header";

export function Home() {
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
    </section>
  );
}
