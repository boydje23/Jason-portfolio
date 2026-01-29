import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
  const heroAnim = useScrollAnimation();
  const introAnim = useScrollAnimation();

  return (
    <main className="home">
      <section className="hero">
        <div 
          ref={heroAnim.ref}
          className={`hero-content fade-in ${heroAnim.isVisible ? 'visible' : ''}`}
        >
          <div className="avatar-container">
            <div className="avatar">
              <span className="avatar-initials">J</span>
            </div>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Jason</span>
          </h1>
          
          <p className="hero-tagline">
            Computer Science Student & Web Design Enthusiast
          </p>
          
          <p className="hero-description">
            Passionate about crafting clean, intuitive, and meaningful digital experiences.
            I believe great design is invisible — it just works.
          </p>
          
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section 
        ref={introAnim.ref}
        className="intro-section"
      >
        <h2 className={`section-title fade-in ${introAnim.isVisible ? 'visible' : ''}`}>
          What I Do
        </h2>
        <div className="intro-grid">
          <div className={`intro-card scale-in stagger-1 ${introAnim.isVisible ? 'visible' : ''}`}>
            <div className="intro-icon">🎨</div>
            <h3>Web Design</h3>
            <p>Creating visually appealing and user-friendly interfaces</p>
          </div>
          <div className={`intro-card scale-in stagger-2 ${introAnim.isVisible ? 'visible' : ''}`}>
            <div className="intro-icon">💻</div>
            <h3>Development</h3>
            <p>Building responsive and performant web applications</p>
          </div>
          <div className={`intro-card scale-in stagger-3 ${introAnim.isVisible ? 'visible' : ''}`}>
            <div className="intro-icon">🚀</div>
            <h3>Problem Solving</h3>
            <p>Turning complex challenges into elegant solutions</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
