import Card from '../components/Card';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const heroAnim = useScrollAnimation();
  const gridAnim = useScrollAnimation();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, and secure checkout functionality. Built with modern web technologies for optimal performance.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool featuring real-time updates, drag-and-drop functionality, and team workspaces. Designed for productivity and ease of use.',
      tags: ['TypeScript', 'Next.js', 'MongoDB', 'Socket.io'],
      link: 'https://github.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that displays current conditions and forecasts using geolocation and external APIs. Features clean data visualization.',
      tags: ['React', 'REST API', 'Chart.js', 'CSS'],
      link: 'https://github.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing my work and skills. Built with React and TypeScript, featuring a clean monochromatic design and smooth interactions.',
      tags: ['React', 'TypeScript', 'CSS'],
      link: 'https://github.com',
    },
    {
      title: 'Blog Platform',
      description: 'A minimalist blog platform with markdown support, syntax highlighting, and a custom CMS. Optimized for readability and fast loading times.',
      tags: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
      link: 'https://github.com',
    },
    {
      title: 'Algorithm Visualizer',
      description: 'An interactive tool for visualizing sorting and pathfinding algorithms. Educational project designed to help understand complex algorithms.',
      tags: ['JavaScript', 'Canvas API', 'Algorithms'],
      link: 'https://github.com',
    },
  ];

  return (
    <main className="projects">
      <section 
        ref={heroAnim.ref}
        className={`projects-hero fade-in ${heroAnim.isVisible ? 'visible' : ''}`}
      >
        <h1 className="page-title animated-title">Projects</h1>
        <p className="page-subtitle">A collection of my recent work and side projects</p>
      </section>

      <section 
        ref={gridAnim.ref}
        className="projects-grid"
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`scale-in stagger-${(index % 3) + 1} ${gridAnim.isVisible ? 'visible' : ''}`}
          >
            <Card
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Projects;
