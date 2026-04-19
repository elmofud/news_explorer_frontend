import heroBackground from "../../images/bg-hero.svg";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">What's going on in the world?</h1>
      <p className="hero__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="hero__search-form">
        <input
          className="hero__input"
          type="text"
          placeholder="Search for news"
        />
        <button className="hero__button" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default Hero;
