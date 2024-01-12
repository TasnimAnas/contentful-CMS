import heroImage from "../../assets/hero_img.svg";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="heroContainer">
      <div className="heroCenter">
        <div className="heroTexts">
          <h1>Tasnim Anas</h1>
          <p>
            A final year B.tech guy exploring different technologies like Web
            Development (Full Stack - MERN), App Development (Flutter), Machine
            Learning (Python, Flask, Scikit-Learn), Cloud (AWS, Firebase,
            Heroku) and Database technologies like SQL and NoSQL (MongoDB)
          </p>
        </div>
        <img src={heroImage} alt="heroImage" className="heroImage" />
      </div>
    </section>
  );
};
export default Hero;
