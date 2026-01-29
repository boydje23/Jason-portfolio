interface CardProps {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  linkText?: string;
}

const Card = ({ title, description, tags, link, linkText }: CardProps) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      
      {tags && tags.length > 0 && (
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          {linkText || 'View Project'} →
        </a>
      )}
    </div>
  );
};

export default Card;
