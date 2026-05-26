import avatar from "../../images/avatar-author.jpg";

import "./About.css";

const About = () => {
    return (
        <div className="about">
            <img
                src={avatar}
                className="about__avatar-image"
                alt="avatar image"
            />
            <div className="about__container">
                <h2 className="about__title">About the author</h2>
                <p className="about__info">
                    I'm Tracey, retiring from Stellantis in 2030 and pivoting
                    into tech for my next chapter. My design background gave me
                    an early eye for how things should look and feel — coding
                    lets me actually build them. I'm learning React, JavaScript,
                    HTML, CSS, Vite, and Git through TripleTen, and this News
                    Explorer project demonstrates REST API integration with a
                    React frontend. Retirement isn't an ending for me — it's
                    freedom to build apps and games I've always wanted to make.
                </p>
            </div>
        </div>
    );
};
export default About;
