import "./AboutMe.css";
import hero from "../../Images/hero.png";

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="aboutMeImage">
        <img src={hero} alt="Hero"/>
      </div>
      <p>
        A web developer in training, currently enrolled in Northwesterns coding bootcamp. Focusing on learning the MERN stack, and other technologies to become a full stack developer.
      </p>
    </div>
  );
}
