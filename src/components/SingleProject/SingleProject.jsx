import "./SingleProject.css";
const SingleProject = ({ title, url, image, id }) => {
  return (
    <a href={url} target="_blank">
      <div className="singleProject">
        <img className="projectImage" src={image} alt={title} />
        <div className="projectName">{title}</div>
      </div>
    </a>
  );
};
export default SingleProject;
