import profilePic from "../assets/pic.png";
import facebook from "../assets/facebook_1051309.png";
import linkedin from "../assets/linkedin_3536569.png";
import github from "../assets/github_3291695.png";

const About = () => {
    return (
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-title-box">
            <h2 className="about-title">About Me</h2>
          </div>
          <div className="about-box">
            <div className="about-des">
              <p className="about-para">
                Hello! I am an enthusiastic and highly driven Computer Science undergraduate,
                deeply passionate about solving problems and turning innovative ideas into reality.
                My journey in technology is fueled by curiosity and a desire to learn continuously,
                allowing me to grow both personally and professionally.<br/><br/>
                I have a strong interest in software development, where I focus on building efficient, reliable, and
                user-centered solutions.
                Whether it’s tackling complex problems or learning new concepts, I enjoy every challenge that pushes me
                to
                think critically and creatively.
                For me, technology is not just about coding; it’s about finding solutions that can make a meaningful
                impact.<br/><br/>

                I aim to contribute meaningfully to the tech industry by combining my technical knowledge with
                innovative
                thinking.
              </p>
              <ul className="social-media">
                <li>
                  <a
                      href="https://www.facebook.com/thinura.jayathunga.3/"
                      target="_blank"
                  ><img src={facebook} alt="Facebook"
                  /></a>
                </li>
                <li>
                  <a
                      href="https://www.linkedin.com/in/thinura-jayathunga-85b06b26b/"
                      target="_blank"
                  ><img src={linkedin} alt="LinkedIn"
                  /></a>
                </li>
                <li>
                  <a href="https://github.com/Thinura-dinuth" target="_blank"
                  ><img src={github} alt="GitHub"
                  /></a>
                </li>
              </ul>

            </div>
            <div className="about-pic">
              <img
                  src={profilePic}
                  alt="Profile"
                  className="about-img"
              />
            </div>
          </div>
        </div>
      </section>
    );
};
export default About;