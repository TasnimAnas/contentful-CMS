import { createClient } from "contentful";
import { useEffect, useState } from "react";
import SingleProject from "../SingleProject/SingleProject";
import "./Projects.css";
const Projects = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: "master", // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  useEffect(() => {
    const getProjects = async () => {
      try {
        const newData = await client.getEntries();
        setData(newData.items);
      } catch (error) {
        setErr(error);
      }
    };
    getProjects();
  }, []);

  return (
    <div className="projectContainer">
      <h2>My React Projects</h2>
      <div className="projectCenter">
        {data.map((project) => {
          const { title, url } = project.fields;
          const image = project.fields.image.fields.file.url;
          const id = project.sys.id;
          return <SingleProject {...{ title, url, image, id }} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
