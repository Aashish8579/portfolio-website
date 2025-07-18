

const projects = [
  {
    id: 1,
    title: "portfolio-website",
    image: "/projects/portfolio.png",
    description:
      "Built a responsive portfolio with reusable components ,Styled with Tailwind CSS and enhanced UX using React Icons, Toast, Scroll, and Typed.",
    githubLink: "https://github.com/yourgithub/gesture-music-controller",
  },
  {
    id: 2,
    title: "Gym-website",
    image: "/projects/gym-website.png",
    description:
      "• Built a full-stack gym website with a modern, responsive UI.",
    githubLink: "https://github.com/Aashish8579/gym_project",
  },
  {
    id: 3,
    title: "Food Ordering website UI",
    image: "/projects/food-order.png",
    description:
      "React-based food ordering UI with context API, cart feature, and responsive design.",
    githubLink: "https://github.com/Aashish8579/Food-App",
  },
  {
    id: 4,
    title: "Spotify-clone",
    image: "/projects/spotify.png",
    description:
      "Developed a fully functional Spotify-inspired music streaming web app using pure JavaScript, HTML, and CSS. The project replicates core Spotify features and offers a sleek, responsive UI.",
    githubLink: "https://github.com/Aashish8579/spotify",
  },
  {
    id: 5,
    title: "Weather App",
    image: "/projects/weather.png",
    description:
      "Developed a responsive weather application using JavaScript that fetches real-time weather data for any city using the OpenWeatherMap API. The app displays current temperature, weather conditions, humidity, and wind speed with dynamic UI updates based on user input."},
  {
    id: 6,
    title: "Tic-tac-toe",
    image: "/projects/Tic-tac-toe.png",
    description:
      "React-based food ordering UI with context API, cart feature, and responsive design.Built a classic 2-player Tic Tac Toe game using vanilla JavaScript with a clean and responsive UI. The game includes interactive grid functionality, win/draw detection logic, and reset functionality. Implemented modular and reusable code structure for game logic and DOM manipulation. D",
    githubLink: "https://github.com/Aashish8579/tic-tac-toe",
  },
  
];

export default function Portfolio() {
  return (
    <section className="py-12 bg-gray-100" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl  font-bold text-center mb-8">My Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>
                <div className="mt-4 flex justify-between">

                  <a
                    href={project.githubLink}
                    className="text-green-700 hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
