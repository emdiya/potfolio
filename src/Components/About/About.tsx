import "./About.css";
// import Me from "../../assets/my-profile.png";

import CircularImage from '../Home/CicularImg';
import Skill from "./Skill";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <CircularImage />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello, I am Em Diya, I am a young boy , who is a Mobile App Developer from Prey Veng,
              Cambodia, I'm a skilled Flutter developer 
              with over one year of experience based in Cambodia. 
              I specialize in crafting dynamic and engaging mobile
              applications using Flutter's versatile framework.
              My background includes designing and implementing 
              intuitive user interfaces while ensuring optimal performance. 
              I'm excited to contribute my expertise to projects 
              and collaborations in Cambodia's vibrant tech community
            </p>
            <button className="btn">Download CV</button>
          </div>

          <div className="about__skills grid">
            <Skill name="Flutter" percent="80%" color="#027DFD" />
            <Skill name="Dart" percent="80%" color="#0553B1" />
            <Skill name="UX/UI" percent="60%" color="#ff4d61" />
            <Skill name="React Js" percent="50%" color="#61dbfb" />
            <Skill name="Node Js" percent="50%" color="#3c873a" />
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
