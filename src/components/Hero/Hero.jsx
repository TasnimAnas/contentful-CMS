import heroImage from "../../assets/hero_img.svg";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="heroContainer">
      <div className="heroCenter">
        <div className="heroTexts">
          <h1>Tasnim Anas</h1>
          <p>
            A final-year B.Tech (CSE) guy exploring different technologies like
            Web Development (Full Stack - <b>M</b>ongo <b>E</b>xpress<b> R</b>
            eact <b>N</b>ode), App Development (Flutter), Machine Learning
            (Python, Flask, Scikit-Learn), Cloud (AWS, Firebase, Heroku), and
            Database Technologies like SQL (MySQL, PostgreSQL) and NoSQL
            (MongoDB)
          </p>
        </div>
        <img src={heroImage} alt="heroImage" className="heroImage" />
      </div>
    </section>
  );
};
export default Hero;
