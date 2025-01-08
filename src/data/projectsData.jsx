import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    id: 1,
    name: 'Food Sharing Website',
    image: project1,
    description: 'A social platform designed to reduce food waste by connecting individuals, restaurants, and businesses to share surplus food. Users can list food items they wish to donate or share, search available food within their vicinity, and connect with others to help reduce environmental impact while aiding local communities in need.',
    technologies: ['React', 'Firebase', 'Node.js', 'Tailwind CSS', 'Express.js', 'Google Maps API'],
    liveLink: 'https://food-sharing-website-df55f.web.app/',
    githubLink: 'https://github.com/programming-hero-web-course2/b10a11-client-side-rudratechmos',
    challenges: 'The major challenges included implementing real-time updates of available food items with Firebase, ensuring secure user authentication, and optimizing the search functionality with location-based filtering using Google Maps API. Another challenge was building an intuitive UI/UX to cater to all age groups while maintaining accessibility standards.',
    improvements: 'Future improvements include the development of a mobile app for easier access, further UI/UX optimizations, integrating AI to predict food expiry based on listed items, implementing a community-driven feedback system for food donors and recipients, and enhancing data security protocols with two-factor authentication (2FA) for users.',
  },
  {
    id: 2,
    name: 'Movie Website',
    image: project2,
    description: 'A feature-rich movie database and review site where users can browse, search, and filter movies. It allows users to leave ratings, write reviews, and get personalized movie recommendations based on their preferences. The site also pulls real-time movie data from the TMDB API, showcasing the latest films, trailers, and ratings. Users can create an account to save their favorite movies and track their movie-watching history.',
    technologies: ['React', 'Redux', 'TMDB API', 'Bootstrap', 'React Router', 'Axios'],
    liveLink: 'https://movie-portal-46448.web.app/',
    githubLink: 'https://github.com/programming-hero-web-course2/b10-a10-client-side-rudratechmos',
    challenges: 'One of the primary challenges was handling large API responses from TMDB API efficiently and ensuring the responsiveness of the UI across all devices. The implementation of a smooth and fast search/filter system with pagination was also challenging, particularly in maintaining state consistency with Redux and optimizing data fetching for quicker loading times.',
    improvements: 'In future versions, the recommendation algorithm will be enhanced to incorporate machine learning models based on user behavior and ratings. A watchlist feature will be added so users can save movies to watch later. Additional features like social media integration, allowing users to share movie reviews and ratings, will also be integrated, along with an advanced admin panel for content management.',
  },
  {
    id: 3,
    name: 'Eco Adventure Website',
    image: project3,
    description: 'A dynamic website promoting eco-friendly travel destinations and sustainable adventure tourism. The site offers users the opportunity to explore various eco-tourism destinations, read informative blogs, and book eco-friendly activities. The platform also features an interactive map to explore destinations by region and type of adventure, including hiking, cycling, and wildlife watching, all aimed at promoting sustainable tourism and eco-friendly travel practices.',
    technologies: ['Next.js', 'GraphQL', 'Tailwind CSS', 'MongoDB', 'Mapbox API'],
    liveLink: 'https://assignment-9-5a4f1.web.app/',
    githubLink: 'https://github.com/programming-hero-web-course1/b10-a9-authentication-rudratechmos',
    challenges: 'One of the major challenges was integrating the interactive map functionality with Mapbox API, ensuring smooth performance and accurate data display for destinations. Additionally, optimizing the website for fast loading times while dealing with rich media content, including images and maps, was a technical challenge. Maintaining a clean and intuitive user interface with a wealth of information proved difficult, but was crucial to the success of the website.',
    improvements: 'Future iterations will add user-generated reviews for each travel destination to foster a more community-driven platform. Dark mode will be added for an improved user experience during nighttime browsing. A recommendation engine based on user preferences and past activity will be developed to suggest destinations. Additionally, plans are in place to integrate a booking system that allows users to directly reserve eco-friendly accommodations and activities.',
  },
];

export default projects;
