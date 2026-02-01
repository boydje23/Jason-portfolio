import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const heroAnim = useScrollAnimation();
  const photoAnim = useScrollAnimation();
  const bioAnim = useScrollAnimation();
  const skillsAnim = useScrollAnimation();
  const eduAnim = useScrollAnimation();

  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'java'] },
    { category: 'Frameworks/ Libraries', items: ['React', 'Node.js', 'PyTorch', 'TensorFlow', 'NetworkX'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Vite', 'Docker'] },
    // { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Firebase'] },
  ];

  return (
    <main className="about">
      <section 
        ref={heroAnim.ref}
        className={`about-hero fade-in ${heroAnim.isVisible ? 'visible' : ''}`}
      >
        <h1 className="page-title animated-title">About Me</h1>
        <p className="page-subtitle">Get to know the person behind the code</p>
      </section>

      <section
        ref={photoAnim.ref}
        className={`profile-section scale-in ${photoAnim.isVisible ? 'visible' : ''}`}
      >
       <div className="avatar-container">
        <div className="avatar">
          <img 
          src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} 
          alt="Jason" 
          className="avatar-image"
          />
          </div>
          </div>
      </section>

      <section 
        ref={bioAnim.ref}
        className="bio-section"
      >
        <div className="bio-content">
          <h2 className={`section-title fade-in-left ${bioAnim.isVisible ? 'visible' : ''}`}>Bio</h2>
          <p className={`bio-text fade-in-left stagger-1 ${bioAnim.isVisible ? 'visible' : ''}`}>
            I'm a Computer Science student with a deep passion for building technology that makes learning more personal and accessible. My interest began with curiosity about how people learn and how software can adapt to individual needs, and it quickly grew into a drive to create tools that blend thoughtful design with real-world impact.
          </p>
          <p className={`bio-text fade-in-left stagger-2 ${bioAnim.isVisible ? 'visible' : ''}`}>
            When I'm not coding, you'll find me exploring research at the intersection of Computer Science and Psychology, experimenting with new full-stack ideas, or working on projects focused on personalized education for students with autism. I believe in continuous learning, human-centered design, and using technology to build experiences that genuinely help others thrive.
          </p>
        </div>
      </section>

      <section 
        ref={skillsAnim.ref}
        className="skills-section"
      >
        <h2 className={`section-title fade-in ${skillsAnim.isVisible ? 'visible' : ''}`}>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-category scale-in stagger-${index + 1} ${skillsAnim.isVisible ? 'visible' : ''}`}
            >
              <h3 className="skill-category-title">{skill.category}</h3>
              <div className="skill-items">
                {skill.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section 
        ref={eduAnim.ref}
        className="education-section"
      >
        <h2 className={`section-title fade-in ${eduAnim.isVisible ? 'visible' : ''}`}>Education</h2>
        <div className={`education-card fade-in-right stagger-1 ${eduAnim.isVisible ? 'visible' : ''}`}>
          <div className="education-header">
            <h3 className="education-degree">Bachelor of Arts in Computer Science</h3>
            <span className="education-year">2023 - Present</span>
          </div>
          <p className="education-school">Wake Forest University</p>
          <p className="education-details">
            Focusing on software engineering, web development, and user experience design.
            Maintaining a strong academic record while actively participating in coding clubs
            and hackathons.
          </p>
        </div>
        <div className={`education-card fade-in-right stagger-1 ${eduAnim.isVisible ? 'visible' : ''}`}>
          <div className="education-header">
            <h3 className="education-degree">Bachelor of Arts in Psychology</h3>
            <span className="education-year">2023 - Present</span>
          </div>
          <p className="education-school">Wake Forest University</p>
          <p className="education-details">
          I’m deeply interested in psychology because I’ve always been curious about why people think, feel, and behave the way they do. I enjoy exploring the patterns behind human decision-making, personality, motivation, and how our experiences shape the way we see the world.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
