import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url ,stack,txt}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <br />
            <br />
            <h6>{stack}</h6>
            <br />
            <br />
            <h6>{txt}</h6>

          </div>
        </div>
      </a>
    </Col>
  );
};
