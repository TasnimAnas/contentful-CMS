import heroImage from "../../assets/hero_img.svg";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="heroContainer">
      <div className="heroCenter">
        <div className="heroTexts">
          <h1>Hero Heading</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            deserunt magnam maiores, perferendis ratione accusamus nulla unde
            officia quaerat est asperiores voluptatibus autem iste dolore amet
            beatae harum eligendi suscipit!
          </p>
        </div>
        <img src={heroImage} alt="heroImage" className="heroImage" />
      </div>
    </section>
  );
};
export default Hero;
