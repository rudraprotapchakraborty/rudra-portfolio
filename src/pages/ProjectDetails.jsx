import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Assuming the context is in this folder
import projects from '../data/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  const { darkMode } = useContext(ThemeContext); // Access darkMode

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component loads
  }, []);

  if (!project) {
    return <div className="text-center text-2xl text-red-500">Project not found!</div>;
  }

  return (
    <div className={`max-w-3xl mx-auto px-6 py-8 ${darkMode ? 'bg-black text-purple-100' : 'bg-white text-gray-800'} rounded-xl shadow-xl transition-all duration-500`}>
      {/* Project Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-wide transform hover:scale-105 transition-all duration-500 ease-in-out">
        {project.name}
      </h1>

      {/* Project Image */}
      <div className="relative mb-6 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-72 object-cover rounded-lg transform hover:scale-105 transition-all duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-black opacity-40 hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
      </div>

      {/* Description */}
      <p className="text-lg mb-6 leading-relaxed transition-all duration-300">
        {project.description}
      </p>

      {/* Technologies Used */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside">
          {project.technologies.map((tech, index) => (
            <li key={index} className="mb-2 transform hover:translate-x-2 transition-all duration-300">{tech}</li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-purple-700 text-white font-semibold rounded-full hover:bg-purple-800 transition-all duration-300 transform hover:scale-105"
        >
          Live Link
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
        >
          GitHub Repository
        </a>
      </div>

      {/* Challenges Faced */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Challenges Faced
        </h2>
        <p>{project.challenges}</p>
      </div>

      {/* Improvements */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Potential Improvements
        </h2>
        <p>{project.improvements}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
