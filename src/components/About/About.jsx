import avatar from "../../images/placeholder-image.svg";

import "./About.css";

const About = () => {
  return (
    <div className="about">
      <img src={avatar} className="about__avatar-image" alt="avatar image" />
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__ifo">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
};
export default About;
