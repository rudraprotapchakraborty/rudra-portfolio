import project0 from '../assets/digital-wallet-system.png';
import project1 from '../assets/hotel-management.png';
import project2 from '../assets/food-sharing.png';
import project3 from '../assets/movie-portal.png';

// ICONS
import reactIcon from "../assets/icons/react.png";
import nodeIcon from "../assets/icons/node.png";
import mongoIcon from "../assets/icons/mongodb.png";
import firebaseIcon from "../assets/icons/firebase.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import expressIcon from "../assets/icons/express.png";

const projects = [
  {
    id: 0,
    name: 'Digital Wallet System',
    image: project0,

    longDescription:
      'A full-featured digital wallet system supporting User, Agent, and Admin roles. Users can transfer money, cash-in, cash-out, check transaction history, manage accounts, and perform wallet operations. Agents handle user transactions, while Admins manage system-wide controls, analytics, and security. Built with performance, data accuracy, and secure authentication in mind.',

    techCards: [
      {
        name: "React",
        icon: reactIcon,
        description: "Component-based UI, reusable layouts, routing, state handling, and optimized rendering.",
      },
      {
        name: "Node.js",
        icon: nodeIcon,
        description: "Backend runtime for API requests, authentication, caching, and business logic.",
      },
      {
        name: "Express.js",
        icon: expressIcon,
        description: "Lightweight backend routing, controllers, JWT authentication, validation layers.",
      },
      {
        name: "MongoDB",
        icon: mongoIcon,
        description: "Database for storing wallet transactions, user accounts, logs, and permissions.",
      },
      {
        name: "Tailwind CSS",
        icon: tailwindIcon,
        description: "Modern utility-first styling for responsive layouts and clean interface design.",
      },
    ],

    liveLink: 'https://digital-wallet-system-frontend-topaz.vercel.app/',
    githubLink: 'https://github.com/rudraprotapchakraborty/digital-wallet-system-frontend',

    challenges:
      'Integrating multi-role authorization securely, optimizing database queries for transaction logs, and syncing real-time wallet balance updates without UI delays.',
    improvements:
      'Will include biometric login, withdrawal PIN system, budgeting tools, analytics dashboard, and QR-based instant payments.',
  },

  {
    id: 1,
    name: 'Hotel Management System',
    image: project1,

    longDescription:
      'A complete hotel management system featuring bookings, meal plans, reviews, user dashboards, and admin analytics. Built with scalable architecture and secure authentication while maintaining a clean UX. Users can book meals, manage accounts, view history, and interact with staff. Admins can track revenue, bookings, and manage room availability.',

    techCards: [
      { name: "React", icon: reactIcon, description: "Reusable UI, routing, context, hooks, and dynamic page rendering." },
      { name: "Node.js", icon: nodeIcon, description: "Backend APIs for booking logic, meal plans, categories, payments." },
      { name: "Express.js", icon: expressIcon, description: "Server routes, validation, role-based access control." },
      { name: "MongoDB", icon: mongoIcon, description: "Stores booking data, user accounts, meal plans, and reviews." },
      { name: "Tailwind CSS", icon: tailwindIcon, description: "Responsive UI, consistent design across all components." },
    ],

    liveLink: 'https://hotel-management-25cdc.web.app/',
    githubLink: 'https://github.com/rudraprotapchakraborty/hotel-management-client',

    challenges:
      'Role-based access control, dynamic meal/room categorizations, and handling large booking data efficiently.',
    improvements:
      'Admin-level reports, payment gateway integration, multi-room bookings, and automated reminders will be added.',
  },

  {
    id: 2,
    name: 'Food Sharing Website',
    image: project2,

    longDescription:
      'A food-sharing platform to reduce waste by connecting donors with recipients. Users can donate food, request items, view realtime availability, and connect through an intuitive UI. Uses Firebase for authentication and real-time database updates, ensuring live availability of food posts.',

    techCards: [
      { name: "React", icon: reactIcon, description: "Interactive UI with dynamic components and state management." },
      { name: "Firebase", icon: firebaseIcon, description: "Authentication, real-time updates, cloud storage for posts." },
      { name: "Node.js", icon: nodeIcon, description: "Secondary backend for additional APIs where needed." },
      { name: "Tailwind CSS", icon: tailwindIcon, description: "Mobile-first design for all age groups and accessibility." },
      { name: "Express.js", icon: expressIcon, description: "API routing and middleware support for future scaling." },
    ],

    liveLink: 'https://food-sharing-5c75a.web.app/',
    githubLink: 'https://github.com/rudraprotapchakraborty/food-sharing-client',

    challenges:
      'Realtime sync with Firebase, secure authentication, geolocation-based filtering, and an accessible design.',
    improvements:
      'Mobile app version, AI food expiry predictions, user badges, donation analytics, and 2FA support.',
  },

  {
    id: 3,
    name: 'Movie Website',
    image: project3,

    longDescription:
      'A full movie discovery and review platform with search, filters, ratings, user accounts, watchlists, and detailed movie pages. Uses TMDB API to fetch real-time data including trending movies, cast, ratings, and trailers. Includes Redux for optimized state management.',

    techCards: [
      { name: "React", icon: reactIcon, description: "Dynamic UI for movies, ratings, reviews, pages and search filters." },
      { name: "Axios", icon: expressIcon, description: "Optimized API calls, error handling, and data fetching." },
    ],

    liveLink: 'https://movie-portal-c66f2.web.app/',
    githubLink: 'https://github.com/rudraprotapchakraborty/movie-portal-client',

    challenges:
      'Handling large TMDB API responses, optimizing pagination, and managing UI performance during heavy fetch operations.',
    improvements:
      'Watchlist improvements, ML-based recommendations, social sharing, and an admin CMS dashboard.',
  },
];

export default projects;
