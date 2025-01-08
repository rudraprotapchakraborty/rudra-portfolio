import { Link } from 'react-router-dom';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    id: 1,
    name: 'Food Sharing Website',
    image: project1,
    description: 'A platform that connects people to share surplus food, reducing waste and helping communities.',
  },
  {
    id: 2,
    name: 'Movie Website',
    image: project2,
    description: 'A sleek and interactive movie database with user reviews, ratings, and personalized recommendations.',
  },
  {
    id: 3,
    name: 'Eco Adventure Website',
    image: project3,
    description: 'An engaging website promoting eco-friendly adventures and sustainable travel destinations.',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 transition-all duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-90"
            />

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {project.description}
              </p>
              <Link
                to={`/projects/${project.id}`}
                className="inline-block px-6 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all duration-300"
              >
                View More
              </Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
