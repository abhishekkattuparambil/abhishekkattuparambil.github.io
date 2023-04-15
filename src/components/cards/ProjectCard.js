import {Col} from 'react-bootstrap';
import './style.css';

const ProjectCard = ({ name, desc, img }) => {
    return (
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={img} alt=""/>
          <div className="proj-txtx">
            <h4>{name}</h4>
            <span>{desc}</span>
          </div>
        </div>
      </Col>
    )
  }

export default ProjectCard
