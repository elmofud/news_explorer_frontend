import avatar from "../../images/avatar-space.png";

import "./About.css";

const About = () => {
  return (
    <div className="about">
      <img src={avatar} className="about__avatar-image" alt="avatar image" />
      <h2 className="about__title">About the author</h2>
      <p className="about__description">
        This block describes the project author. Here you should indicate your
        name, what you do, and which development technologies you know. You can
        also talk about your experience with TripleTen, what you learned there,
        and how you can help potential customers.
      </p>
    </div>
  );
};
export default About;
