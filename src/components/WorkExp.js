import { Col } from "react-bootstrap";

export const WorkCard = ({ title, description, imgUrl, url,duration }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <h6>{duration}</h6>
          </div>
        </div>
      </a>
    </Col>
  );
};
