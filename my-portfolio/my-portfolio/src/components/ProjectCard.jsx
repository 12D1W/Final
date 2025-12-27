export default function ProjectCard({ title, pic, description, link }) {
  return (
    <div className="card">
      <div>
        <img src={pic} alt="wewe"></img>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank">
        View Project
        </a>
      </div>
      
    </div>
  );
}
