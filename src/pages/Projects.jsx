import { Link } from 'react-router-dom';
import project1 from '../assets/hotel-management.png';
import project2 from '../assets/food-sharing.png';
import project3 from '../assets/movie-portal.png';

const projects = [
  {
    id: 1,
    name: 'Hotel Management System',
    image: project1,
    description: 'A Hostel Management System client-side application built with React.js, featuring user authentication, meal management, reviews, and an admin panel for efficient hostel operations.',
  },
  {
    id: 2,
    name: 'Food Sharing Website',
    image: project2,
    description: 'A Community Food Sharing platform built with React.js, enabling users to share surplus food, request essentials, and reduce waste with secure authentication and real-time updates.',
  },
  {
    id: 3,
    name: 'Movie Portal',
    image: project3,
    description: 'A Movie Portal app built with React.js, offering a user-friendly interface to browse, search, and filter movies, view details, and add favorites, all with a responsive design.',
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
