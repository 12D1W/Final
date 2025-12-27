import react from "../assets/rr.svg";
import salahPic from "../assets/salah.jpg";


export default function Home() {
  return (
    <section className="home">
      <div className="home-image">
        <img src={salahPic} alt="Photo of me" />
      </div>

      <div className="home-text">
        <h1>Hello, I'm Salah.</h1>
        <p>
          I'm a developer passionate about building clean, interactive web apps
          with React. I enjoy creating portfolios, projects, and learning new
          technologies.
        </p>
      </div>
    </section>
  );
}
