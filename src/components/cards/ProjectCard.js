import {Col} from 'react-bootstrap';
import './style.css';

const ProjectCard = ({ name, desc, img }) => {
    return (
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={img} alt=""/>
          <div className='overlay'>
          </div>
        </div>
      </Col>
    )
  }

export default ProjectCard
